/**
 * Database Handlers for Cloudflare D1
 * Migration from SQLite to D1
 */

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  startup_id?: number;
  created_at?: string;
}

interface Startup {
  id: number;
  name: string;
  category?: string;
  description: string;
  contact_email?: string;
  contact_phone?: string;
  website?: string;
  station_code?: string;
  user_id: number;
  status: string;
  created_at?: string;
}

interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  time: string;
  location?: string;
  type?: string;
  max_participants?: number;
  created_at?: string;
}

// Initialize Database Schema
export async function initializeDatabase(env: any) {
  const db = env.DB;

  // Users Table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT DEFAULT 'user',
      startup_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Startups Table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS startups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT,
      description TEXT,
      contact_email TEXT,
      contact_phone TEXT,
      website TEXT,
      station_code TEXT,
      user_id INTEGER,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Events Table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      location TEXT,
      type TEXT,
      max_participants INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Event Registrations Table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS event_registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      status TEXT DEFAULT 'registered',
      registered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (event_id) REFERENCES events(id),
      FOREIGN KEY (user_id) REFERENCES users(id),
      UNIQUE(event_id, user_id)
    )
  `);

  // Analytics Table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS analytics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_type TEXT NOT NULL,
      event_data TEXT,
      user_id INTEGER,
      session_id TEXT,
      ip_address TEXT,
      user_agent TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// User Operations
export async function createUser(env: any, userData: Omit<User, 'id' | 'created_at'>): Promise<number> {
  const db = env.DB;
  const result = await db.prepare(`
    INSERT INTO users (email, password, name, role)
    VALUES (?, ?, ?, ?)
  `).bind(userData.email, userData.password, userData.name, userData.role || 'user').run();

  return result.meta.last_row_id || 0;
}

export async function getUserByEmail(env: any, email: string): Promise<User | null> {
  const db = env.DB;
  const result = await db.prepare('SELECT * FROM users WHERE email = ?').bind(email).first<User>();
  return result || null;
}

export async function getUserById(env: any, id: number): Promise<User | null> {
  const db = env.DB;
  const result = await db.prepare('SELECT * FROM users WHERE id = ?').bind(id).first<User>();
  return result || null;
}

// Startup Operations
export async function getAllStartups(env: any): Promise<Startup[]> {
  const db = env.DB;
  const result = await db.prepare(`
    SELECT * FROM startups WHERE status = ? ORDER BY created_at DESC
  `).bind('approved').all<Startup>();
  return result.results || [];
}

export async function getStartupById(env: any, id: number): Promise<Startup | null> {
  const db = env.DB;
  const result = await db.prepare('SELECT * FROM startups WHERE id = ?').bind(id).first<Startup>();
  return result || null;
}

export async function createStartup(env: any, startupData: Omit<Startup, 'id' | 'created_at' | 'status'>): Promise<number> {
  const db = env.DB;
  const result = await db.prepare(`
    INSERT INTO startups (name, category, description, contact_email, contact_phone, website, station_code, user_id, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')
  `).bind(
    startupData.name,
    startupData.category || null,
    startupData.description,
    startupData.contact_email || null,
    startupData.contact_phone || null,
    startupData.website || null,
    startupData.station_code || null,
    startupData.user_id
  ).run();

  return result.meta.last_row_id || 0;
}

// Event Operations
export async function getAllEvents(env: any): Promise<Event[]> {
  const db = env.DB;
  const result = await db.prepare(`
    SELECT * FROM events ORDER BY date ASC, time ASC
  `).all<Event>();
  return result.results || [];
}

export async function getEventById(env: any, id: number): Promise<Event | null> {
  const db = env.DB;
  const result = await db.prepare('SELECT * FROM events WHERE id = ?').bind(id).first<Event>();
  return result || null;
}

export async function createEvent(env: any, eventData: Omit<Event, 'id' | 'created_at'>): Promise<number> {
  const db = env.DB;
  const result = await db.prepare(`
    INSERT INTO events (title, description, date, time, location, type, max_participants)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    eventData.title,
    eventData.description || null,
    eventData.date,
    eventData.time,
    eventData.location || null,
    eventData.type || null,
    eventData.max_participants || null
  ).run();

  return result.meta.last_row_id || 0;
}

// Event Registration Operations
export async function registerForEvent(env: any, eventId: number, userId: number): Promise<boolean> {
  const db = env.DB;
  
  // Check if already registered
  const existing = await db.prepare(`
    SELECT * FROM event_registrations WHERE event_id = ? AND user_id = ?
  `).bind(eventId, userId).first();

  if (existing) {
    return false;
  }

  // Check max participants
  const event = await getEventById(env, eventId);
  if (event?.max_participants) {
    const count = await db.prepare(`
      SELECT COUNT(*) as count FROM event_registrations WHERE event_id = ?
    `).bind(eventId).first<{ count: number }>();

    if (count && count.count >= event.max_participants) {
      return false;
    }
  }

  // Register
  await db.prepare(`
    INSERT INTO event_registrations (event_id, user_id)
    VALUES (?, ?)
  `).bind(eventId, userId).run();

  return true;
}

