-- Cloudflare D1 Database Schema - Investor & TTT Extensions
-- Erweiterung für Investor-Portal, Z-Canvas Berechnungen, MCP-Database Integration

-- Investor Profiles Table
CREATE TABLE IF NOT EXISTS investor_profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  investor_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE,
  name TEXT NOT NULL,
  company TEXT,
  logo_url TEXT,
  api_key TEXT UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'active'
);

-- Investor Calculations (Historical Z-Canvas Calculations)
CREATE TABLE IF NOT EXISTS investor_calculations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  investor_id TEXT NOT NULL,
  calculation_type TEXT NOT NULL, -- 'local', 'global', 'production', 'complete', 'scenario'
  calculation_params TEXT NOT NULL, -- JSON
  calculation_result TEXT NOT NULL, -- JSON
  scenario_name TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (investor_id) REFERENCES investor_profiles(investor_id)
);

-- TTT Company Products (MCP-Database Integration)
CREATE TABLE IF NOT EXISTS ttt_products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_code TEXT UNIQUE NOT NULL,
  product_name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  production_time_hours REAL NOT NULL,
  production_cost_base REAL NOT NULL,
  mass_capital_factor REAL DEFAULT 1.0,
  productivity_rate REAL DEFAULT 1.0,
  mcp_inventory_id TEXT, -- Link zu MCP-Database Inventar
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'active'
);

-- TTT Production Cost History
CREATE TABLE IF NOT EXISTS ttt_production_costs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  production_run_id TEXT,
  time_cost REAL,
  material_cost REAL,
  mass_capital_cost REAL,
  total_cost REAL NOT NULL,
  profit_margin REAL,
  time_cost_factor REAL,
  calculated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES ttt_products(id)
);

-- Investor Scenarios (Saved Investment Scenarios)
CREATE TABLE IF NOT EXISTS investor_scenarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  investor_id TEXT NOT NULL,
  scenario_name TEXT NOT NULL,
  scenario_params TEXT NOT NULL, -- JSON mit local/global/production
  scenario_result TEXT, -- JSON
  saved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (investor_id) REFERENCES investor_profiles(investor_id)
);

-- MCP-Database Sync Log (Cursor.com Integration)
CREATE TABLE IF NOT EXISTS mcp_sync_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sync_type TEXT NOT NULL, -- 'products', 'inventory', 'catalog'
  source TEXT NOT NULL, -- 'cursor.com', 'local'
  items_synced INTEGER DEFAULT 0,
  sync_status TEXT DEFAULT 'pending', -- 'pending', 'success', 'error'
  error_message TEXT,
  synced_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Time Cost Index Tracking (Selbstinvestoreinsatzziel)
CREATE TABLE IF NOT EXISTS time_cost_index (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  investor_id TEXT,
  project_id TEXT,
  total_time_hours REAL NOT NULL,
  productive_time_hours REAL NOT NULL,
  time_value_rate REAL DEFAULT 50.0, -- €/Stunde
  time_cost_index REAL NOT NULL,
  efficiency_rate REAL NOT NULL,
  calculated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (investor_id) REFERENCES investor_profiles(investor_id)
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_investor_profiles_investor_id ON investor_profiles(investor_id);
CREATE INDEX IF NOT EXISTS idx_investor_profiles_email ON investor_profiles(email);
CREATE INDEX IF NOT EXISTS idx_investor_profiles_api_key ON investor_profiles(api_key);
CREATE INDEX IF NOT EXISTS idx_investor_calculations_investor_id ON investor_calculations(investor_id);
CREATE INDEX IF NOT EXISTS idx_investor_calculations_type ON investor_calculations(calculation_type);
CREATE INDEX IF NOT EXISTS idx_investor_calculations_created ON investor_calculations(created_at);
CREATE INDEX IF NOT EXISTS idx_ttt_products_code ON ttt_products(product_code);
CREATE INDEX IF NOT EXISTS idx_ttt_products_mcp_id ON ttt_products(mcp_inventory_id);
CREATE INDEX IF NOT EXISTS idx_ttt_production_costs_product ON ttt_production_costs(product_id);
CREATE INDEX IF NOT EXISTS idx_ttt_production_costs_run ON ttt_production_costs(production_run_id);
CREATE INDEX IF NOT EXISTS idx_investor_scenarios_investor ON investor_scenarios(investor_id);
CREATE INDEX IF NOT EXISTS idx_mcp_sync_log_type ON mcp_sync_log(sync_type);
CREATE INDEX IF NOT EXISTS idx_mcp_sync_log_status ON mcp_sync_log(sync_status);
CREATE INDEX IF NOT EXISTS idx_time_cost_index_investor ON time_cost_index(investor_id);
CREATE INDEX IF NOT EXISTS idx_time_cost_index_project ON time_cost_index(project_id);



