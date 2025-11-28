-- Cloudflare D1 Database Schema - Jobs & C-E-O-C Extensions
-- Job Applications, Center Edge of Circle Management

-- Job Applications Table
CREATE TABLE IF NOT EXISTS job_applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  application_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  type TEXT NOT NULL, -- 'employee', 'startup', 'investor', 'other'
  motivation TEXT NOT NULL,
  problem_example TEXT,
  agree_license INTEGER DEFAULT 0, -- 0 = false, 1 = true
  status TEXT DEFAULT 'pending', -- 'pending', 'reviewed', 'accepted', 'rejected'
  ceoc_status TEXT DEFAULT 'candidate', -- 'candidate', 'active', 'center-edge-of-circle'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  source TEXT DEFAULT 'startup-systems-portal'
);

-- C-E-O-C Members (Center Edge of Circle)
CREATE TABLE IF NOT EXISTS ceoc_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  application_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  type TEXT NOT NULL,
  ceoc_role TEXT DEFAULT 'edge', -- 'edge', 'center', 'connection'
  circle_id TEXT, -- ID of the circle/startup they belong to
  capacity_share REAL DEFAULT 0.0, -- Anteil der Kapazität vom CEO (0.0 - 1.0)
  decision_power TEXT DEFAULT 'process', -- 'process', 'product', 'capacity', 'technology', 'all'
  joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'active', -- 'active', 'inactive'
  FOREIGN KEY (application_id) REFERENCES job_applications(application_id)
);

-- Startup Registrations (als C-E-O-C)
CREATE TABLE IF NOT EXISTS startup_ceoc_registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  startup_id TEXT UNIQUE NOT NULL,
  startup_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  description TEXT,
  ceoc_status TEXT DEFAULT 'pending', -- 'pending', 'active', 'center-edge-of-circle'
  capacity_share REAL DEFAULT 0.0,
  circle_position TEXT, -- Position im Kreis (für Visualisierung)
  registered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Problem Formulations (von C-E-O-C Mitgliedern)
CREATE TABLE IF NOT EXISTS problem_formulations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  problem_id TEXT UNIQUE NOT NULL,
  submitted_by TEXT NOT NULL, -- application_id oder startup_id
  problem_description TEXT NOT NULL,
  problem_formula TEXT, -- Die Formel
  category TEXT, -- Kategorie des Problems
  status TEXT DEFAULT 'pending', -- 'pending', 'formulated', 'programmed', 'product', 'licensed'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (submitted_by) REFERENCES job_applications(application_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);
CREATE INDEX IF NOT EXISTS idx_job_applications_type ON job_applications(type);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_ceoc_status ON job_applications(ceoc_status);
CREATE INDEX IF NOT EXISTS idx_ceoc_members_application_id ON ceoc_members(application_id);
CREATE INDEX IF NOT EXISTS idx_ceoc_members_circle_id ON ceoc_members(circle_id);
CREATE INDEX IF NOT EXISTS idx_startup_ceoc_startup_id ON startup_ceoc_registrations(startup_id);
CREATE INDEX IF NOT EXISTS idx_startup_ceoc_status ON startup_ceoc_registrations(ceoc_status);
CREATE INDEX IF NOT EXISTS idx_problem_formulations_submitted_by ON problem_formulations(submitted_by);
CREATE INDEX IF NOT EXISTS idx_problem_formulations_status ON problem_formulations(status);



