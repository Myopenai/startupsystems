/**
 * Global Central City Arrivals - Backend Server
 * Node.js/Express.js Backend für Startup-Registrierung und Event-Management
 * 
 * Installation:
 * npm install express cors body-parser jsonwebtoken bcryptjs sqlite3
 * 
 * Start:
 * node gcc-backend-server.js
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'gcc-secret-key-change-in-production-2025';
const NS_API_KEY = process.env.NS_API_KEY || ''; // Set via environment variable

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Setup
const dbPath = path.join(__dirname, 'gcc-database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('✓ Connected to SQLite database');
        initializeDatabase();
    }
});

// Initialize Database Tables
function initializeDatabase() {
    // Users Table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT DEFAULT 'user',
        startup_id INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Startups Table
    db.run(`CREATE TABLE IF NOT EXISTS startups (
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
    )`);

    // Events Table
    db.run(`CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        location TEXT,
        type TEXT,
        max_participants INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Event Registrations Table
    db.run(`CREATE TABLE IF NOT EXISTS event_registrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        status TEXT DEFAULT 'registered',
        registered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (event_id) REFERENCES events(id),
        FOREIGN KEY (user_id) REFERENCES users(id),
        UNIQUE(event_id, user_id)
    )`);

    // Analytics Table
    db.run(`CREATE TABLE IF NOT EXISTS analytics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_type TEXT NOT NULL,
        event_data TEXT,
        user_id INTEGER,
        session_id TEXT,
        ip_address TEXT,
        user_agent TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    console.log('✓ Database tables initialized');
}

// Authentication Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
}

// ==================== AUTHENTICATION ROUTES ====================

// User Registration
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, name, role } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Email, password, and name are required' });
        }

        // Check if user exists
        db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            if (user) {
                return res.status(400).json({ error: 'User already exists' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create user
            db.run(
                'INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)',
                [email, hashedPassword, name, role || 'user'],
                function(err) {
                    if (err) {
                        return res.status(500).json({ error: 'Failed to create user' });
                    }

                    // Generate token
                    const token = jwt.sign(
                        { id: this.lastID, email, name, role: role || 'user' },
                        JWT_SECRET,
                        { expiresIn: '7d' }
                    );

                    // Log analytics
                    logAnalytics('user_registered', { user_id: this.lastID, email });

                    res.json({
                        success: true,
                        token,
                        user: { id: this.lastID, email, name, role: role || 'user' }
                    });
                }
            );
        });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

// User Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Generate token
            const token = jwt.sign(
                { id: user.id, email: user.email, name: user.name, role: user.role },
                JWT_SECRET,
                { expiresIn: '7d' }
            );

            // Log analytics
            logAnalytics('user_login', { user_id: user.id, email });

            res.json({
                success: true,
                token,
                user: { id: user.id, email: user.email, name: user.name, role: user.role }
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Get Current User
app.get('/api/auth/me', authenticateToken, (req, res) => {
    db.get('SELECT id, email, name, role, startup_id FROM users WHERE id = ?', [req.user.id], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ user });
    });
});

// ==================== STARTUP ROUTES ====================

// Get All Startups
app.get('/api/startups', (req, res) => {
    db.all('SELECT * FROM startups WHERE status = ? ORDER BY created_at DESC', ['approved'], (err, startups) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ startups });
    });
});

// Get Single Startup
app.get('/api/startups/:id', (req, res) => {
    db.get('SELECT * FROM startups WHERE id = ?', [req.params.id], (err, startup) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (!startup) {
            return res.status(404).json({ error: 'Startup not found' });
        }
        res.json({ startup });
    });
});

// Register New Startup
app.post('/api/startups', authenticateToken, (req, res) => {
    const { name, category, description, contact_email, contact_phone, website, station_code } = req.body;

    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }

    db.run(
        'INSERT INTO startups (name, category, description, contact_email, contact_phone, website, station_code, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [name, category, description, contact_email, contact_phone, website, station_code, req.user.id],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to create startup' });
            }

            // Update user's startup_id
            db.run('UPDATE users SET startup_id = ? WHERE id = ?', [this.lastID, req.user.id]);

            logAnalytics('startup_registered', { startup_id: this.lastID, user_id: req.user.id });

            res.json({
                success: true,
                startup: { id: this.lastID, name, category, description, status: 'pending' }
            });
        }
    );
});

// Update Startup
app.put('/api/startups/:id', authenticateToken, (req, res) => {
    const { name, category, description, contact_email, contact_phone, website, station_code } = req.body;

    // Check ownership
    db.get('SELECT user_id FROM startups WHERE id = ?', [req.params.id], (err, startup) => {
        if (err || !startup) {
            return res.status(404).json({ error: 'Startup not found' });
        }
        if (startup.user_id !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Not authorized' });
        }

        db.run(
            'UPDATE startups SET name = ?, category = ?, description = ?, contact_email = ?, contact_phone = ?, website = ?, station_code = ? WHERE id = ?',
            [name, category, description, contact_email, contact_phone, website, station_code, req.params.id],
            (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to update startup' });
                }
                logAnalytics('startup_updated', { startup_id: req.params.id, user_id: req.user.id });
                res.json({ success: true });
            }
        );
    });
});

// ==================== EVENT ROUTES ====================

// Get All Events
app.get('/api/events', (req, res) => {
    db.all('SELECT * FROM events ORDER BY date ASC, time ASC', (err, events) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ events });
    });
});

// Get Single Event
app.get('/api/events/:id', (req, res) => {
    db.get('SELECT * FROM events WHERE id = ?', [req.params.id], (err, event) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        // Get registration count
        db.get('SELECT COUNT(*) as count FROM event_registrations WHERE event_id = ?', [req.params.id], (err, result) => {
            event.registered_count = result.count;
            res.json({ event });
        });
    });
});

// Create Event (Admin only)
app.post('/api/events', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access required' });
    }

    const { title, description, date, time, location, type, max_participants } = req.body;

    if (!title || !date || !time) {
        return res.status(400).json({ error: 'Title, date, and time are required' });
    }

    db.run(
        'INSERT INTO events (title, description, date, time, location, type, max_participants) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [title, description, date, time, location, type, max_participants],
        function(err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to create event' });
            }
            logAnalytics('event_created', { event_id: this.lastID, user_id: req.user.id });
            res.json({ success: true, event: { id: this.lastID, title, date, time } });
        }
    );
});

// Register for Event
app.post('/api/events/:id/register', authenticateToken, (req, res) => {
    const eventId = req.params.id;

    // Check if already registered
    db.get('SELECT * FROM event_registrations WHERE event_id = ? AND user_id = ?', [eventId, req.user.id], (err, registration) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (registration) {
            return res.status(400).json({ error: 'Already registered for this event' });
        }

        // Check max participants
        db.get('SELECT max_participants FROM events WHERE id = ?', [eventId], (err, event) => {
            if (err || !event) {
                return res.status(404).json({ error: 'Event not found' });
            }

            db.get('SELECT COUNT(*) as count FROM event_registrations WHERE event_id = ?', [eventId], (err, result) => {
                if (event.max_participants && result.count >= event.max_participants) {
                    return res.status(400).json({ error: 'Event is full' });
                }

                db.run(
                    'INSERT INTO event_registrations (event_id, user_id) VALUES (?, ?)',
                    [eventId, req.user.id],
                    function(err) {
                        if (err) {
                            return res.status(500).json({ error: 'Failed to register' });
                        }
                        logAnalytics('event_registered', { event_id: eventId, user_id: req.user.id });
                        res.json({ success: true, message: 'Successfully registered for event' });
                    }
                );
            });
        });
    });
});

// Get User's Event Registrations
app.get('/api/users/events', authenticateToken, (req, res) => {
    db.all(
        'SELECT e.*, er.status, er.registered_at FROM events e JOIN event_registrations er ON e.id = er.event_id WHERE er.user_id = ? ORDER BY e.date ASC',
        [req.user.id],
        (err, events) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            res.json({ events });
        }
    );
});

// ==================== NS API PROXY ====================

// NS API Proxy - Departures
app.get('/api/ns/departures/:station', async (req, res) => {
    const stationCode = req.params.station;

    if (!NS_API_KEY) {
        return res.status(500).json({ error: 'NS API key not configured' });
    }

    try {
        const response = await fetch(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=${stationCode}`, {
            headers: {
                'Ocp-Apim-Subscription-Key': NS_API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`NS API error: ${response.status}`);
        }

        const data = await response.json();
        logAnalytics('ns_api_call', { station: stationCode });
        res.json(data);
    } catch (error) {
        console.error('NS API Error:', error);
        res.status(500).json({ error: 'Failed to fetch NS data', message: error.message });
    }
});

// ==================== ANALYTICS ROUTES ====================

// Log Analytics Event
function logAnalytics(eventType, eventData = {}) {
    const sessionId = eventData.session_id || 'unknown';
    const ipAddress = eventData.ip_address || 'unknown';
    const userAgent = eventData.user_agent || 'unknown';

    db.run(
        'INSERT INTO analytics (event_type, event_data, user_id, session_id, ip_address, user_agent) VALUES (?, ?, ?, ?, ?, ?)',
        [eventType, JSON.stringify(eventData), eventData.user_id || null, sessionId, ipAddress, userAgent],
        (err) => {
            if (err) {
                console.error('Analytics logging error:', err);
            }
        }
    );
}

// Get Analytics (Admin only)
app.get('/api/analytics', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access required' });
    }

    const { startDate, endDate, eventType } = req.query;
    let query = 'SELECT * FROM analytics WHERE 1=1';
    const params = [];

    if (startDate) {
        query += ' AND created_at >= ?';
        params.push(startDate);
    }
    if (endDate) {
        query += ' AND created_at <= ?';
        params.push(endDate);
    }
    if (eventType) {
        query += ' AND event_type = ?';
        params.push(eventType);
    }

    query += ' ORDER BY created_at DESC LIMIT 1000';

    db.all(query, params, (err, analytics) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ analytics });
    });
});

// Get Analytics Summary
app.get('/api/analytics/summary', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access required' });
    }

    db.all(`
        SELECT 
            event_type,
            COUNT(*) as count,
            DATE(created_at) as date
        FROM analytics
        WHERE created_at >= datetime('now', '-30 days')
        GROUP BY event_type, DATE(created_at)
        ORDER BY date DESC, count DESC
    `, (err, summary) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ summary });
    });
});

// ==================== HEALTH CHECK ====================

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        ns_api_configured: !!NS_API_KEY
    });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
    console.log(`🚀 Global Central City Arrivals Backend Server running on port ${PORT}`);
    console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
    console.log(`🔑 NS API Key: ${NS_API_KEY ? '✓ Configured' : '✗ Not configured (set NS_API_KEY env variable)'}`);
    console.log(`💾 Database: ${dbPath}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    db.close((err) => {
        if (err) {
            console.error('Database close error:', err);
        } else {
            console.log('✓ Database closed');
        }
        process.exit(0);
    });
});

