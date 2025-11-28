# 🏗️ VOLLSTÄNDIGE SYSTEMARCHITEKTUR
## Startup Systems Portal - Alle Apps, Server, Hosts, IPs vernetzt

**Datum:** 2025-11-26  
**Version:** 1.0.0  
**Status:** ✅ Vollständig dokumentiert

---

## 📊 ÜBERSICHT

Diese Dokumentation beschreibt die vollständige Vernetzung aller Komponenten des Startup Systems Portals:

- ✅ **Frontend-Layer** (Public HTML/CSS/JS)
- ✅ **Backend-Layer** (Cloudflare Workers)
- ✅ **Database-Layer** (Cloudflare D1)
- ✅ **API-Integration** (REST APIs)
- ✅ **Server & Hosting** (Cloudflare Infrastructure)
- ✅ **Netzwerk-Architektur** (Edge Computing)

---

## 🌐 NETZWERK-ARCHITEKTUR

### Cloudflare Workers Edge Network

```
                    ┌─────────────────────────────────┐
                    │   Cloudflare Global Network     │
                    │   (200+ Datenzentren weltweit)  │
                    └─────────────────────────────────┘
                                │
                                │ HTTPS
                                │
                    ┌───────────▼────────────┐
                    │  Cloudflare Workers    │
                    │  startupsystems        │
                    │  (Edge Computing)      │
                    └───────────┬────────────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
        ┌───────▼──────┐ ┌──────▼──────┐ ┌─────▼──────┐
        │  Main API    │ │  GCC API    │ │ Investor   │
        │  /api        │ │  /api/gcc   │ │ API        │
        │              │ │             │ │ /api/      │
        └───────┬──────┘ └──────┬──────┘ │ investor   │
                │               │         └─────┬──────┘
                │               │               │
                └───────────────┼───────────────┘
                                │
                    ┌───────────▼────────────┐
                    │  Cloudflare D1         │
                    │  Database              │
                    │  togethersystembackend │
                    └────────────────────────┘
```

---

## 🖥️ SERVER & HOSTING

### Cloudflare Infrastructure

**Platform:** Cloudflare Workers  
**Database:** Cloudflare D1 (SQLite)  
**CDN:** Cloudflare Global Network  
**SSL/TLS:** Automatisch von Cloudflare

#### Worker Details

- **Worker Name:** `startupsystems`
- **Worker URL:** `https://startupsystems.telcotelekom.workers.dev`
- **Database Name:** `togethersystembackend`
- **Database ID:** `8a9c3e5a-d79c-4a1b-9a7e-07689eeef16b`
- **Region:** Global (Edge Computing)

#### IP-Adressen & Hosts

**Cloudflare Edge Locations:**
- Automatische IP-Routing über 200+ Datenzentren
- Nähestes Datenzentrum wird automatisch gewählt
- IPv4 & IPv6 Support

**DNS:**
- Managed by Cloudflare
- Automatische SSL-Zertifikate
- DDoS Protection

---

## 📱 FRONTEND-APPS

### 1. Hauptportal
- **Pfad:** `/` (Root)
- **Datei:** `public/index.html`
- **Zweck:** Haupt-Landing-Page
- **Features:**
  - Welcome-Message
  - API-Endpoint Übersicht
  - Navigation zu allen Modulen

### 2. Investor Portal
- **Pfad:** `/investor/`
- **Datei:** `public/investor/index.html`
- **Zweck:** Investor-Berechnungsplattform
- **Features:**
  - Z-Canvas Kapitalformeln
  - Produktionskosten-Berechnung
  - Zeitkosten-Leitzahl
  - Szenarien-Rechner
- **API:** `/api/investor/*`

### 3. TogetherSystems Portal
- **Pfad:** `/togethersystems/`
- **Datei:** `public/togethersystems/portal.html`
- **Zweck:** TTT Portal
- **Features:**
  - Together Systems Überblick
  - Systemarchitektur
  - Migrations-Status
  - GitHub Integration

### 4. GCC Portal
- **Pfad:** `/gcc-nijmegen/`
- **Datei:** `public/gcc-nijmegen/index.html`
- **Zweck:** Global Central City Arrivals Nijmegen
- **Features:**
  - Startup-Hub Portal
  - NS API Integration
  - Event-Management
- **API:** `/api/gcc/*`

### 5. YORDY Showcase
- **Pfad:** `/YORDY-SHOWCASE-SIMPLE.html`
- **Datei:** `YORDY-SHOWCASE-SIMPLE.html`
- **Zweck:** Artist Showcase
- **Features:**
  - MicroLED-Qualität Visualisierung
  - High-Resolution Artwork

---

## 🔌 BACKEND-APIS

### 1. Main Startup Systems API

**Base URL:** `/api`

**Endpoints:**
- `GET /api` - API Info
- `GET /api/status` - Service Status
- `GET /api/health` - Health Check

**Worker:** `workers/index.ts`

### 2. GCC API (Global Central City Arrivals)

**Base URL:** `/api/gcc`

**Endpoints:**
- `GET /api/gcc/health` - Health Check
- `POST /api/gcc/auth/login` - User Login
- `POST /api/gcc/auth/register` - User Registration
- `GET /api/gcc/startups` - List Startups
- `POST /api/gcc/startups` - Create Startup
- `GET /api/gcc/events` - List Events
- `POST /api/gcc/events` - Create Event
- `GET /api/gcc/ns/arrivals` - NS Train Arrivals
- `GET /api/gcc/analytics` - Analytics Data

**Worker:** `workers/gcc-api/index.ts`

### 3. Investor API

**Base URL:** `/api/investor`

**Endpoints:**
- `GET /api/investor/health` - Health Check
- `POST /api/investor/calculate/local` - Lokale Kapitalberechnung
- `POST /api/investor/calculate/global` - Globale BPP-Berechnung
- `POST /api/investor/calculate/production` - Produktionskosten
- `POST /api/investor/calculate/time-index` - Zeitkosten-Leitzahl
- `POST /api/investor/calculate/complete` - Kombinierte Berechnung
- `POST /api/investor/scenarios` - Szenarien-Rechner

**Worker:** `workers/investor-api/index.ts`

---

## 🗄️ DATABASE-ARCHITEKTUR

### Cloudflare D1 Database

**Database Name:** `togethersystembackend`  
**Database ID:** `8a9c3e5a-d79c-4a1b-9a7e-07689eeef16b`  
**Type:** SQLite (Serverless)

### Tabellen-Struktur

#### Bestehende Tabellen (d1-schema.sql)

1. **users** - User Accounts
   - `id`, `email`, `password`, `name`, `role`, `startup_id`, `created_at`

2. **startups** - Startup Registrierungen
   - `id`, `name`, `category`, `description`, `contact_email`, `status`, `created_at`

3. **events** - Events
   - `id`, `title`, `description`, `date`, `time`, `location`, `type`, `created_at`

4. **event_registrations** - Event-Registrierungen
   - `id`, `event_id`, `user_id`, `status`, `registered_at`

5. **analytics** - Analytics Tracking
   - `id`, `event_type`, `event_data`, `user_id`, `session_id`, `created_at`

#### Neue Tabellen (d1-schema-investor.sql)

6. **investor_profiles** - Investor-Profile
   - `id`, `investor_id`, `email`, `name`, `company`, `logo_url`, `api_key`, `status`

7. **investor_calculations** - Berechnungs-Historie
   - `id`, `investor_id`, `calculation_type`, `calculation_params`, `calculation_result`

8. **ttt_products** - TTT Produktkatalog
   - `id`, `product_code`, `product_name`, `production_time_hours`, `production_cost_base`, `mcp_inventory_id`

9. **ttt_production_costs** - Produktionskosten
   - `id`, `product_id`, `production_run_id`, `total_cost`, `profit_margin`, `calculated_at`

10. **investor_scenarios** - Gespeicherte Szenarien
    - `id`, `investor_id`, `scenario_name`, `scenario_params`, `scenario_result`

11. **mcp_sync_log** - MCP-Database Sync
    - `id`, `sync_type`, `source`, `items_synced`, `sync_status`, `synced_at`

12. **time_cost_index** - Zeitkosten-Tracking
    - `id`, `investor_id`, `project_id`, `total_time_hours`, `productive_time_hours`, `time_cost_index`

---

## 🔗 API-INTEGRATIONEN

### Externe APIs

#### 1. NS API (Niederländische Bahn)
- **Zweck:** Real-time Zug-Ankünfte/Abfahrten
- **Endpoint:** `/api/gcc/ns/arrivals`
- **Proxy:** Ja (über GCC API)

#### 2. MCP-Database (Cursor.com)
- **Zweck:** TTT Inventar & Produktkatalog
- **Integration:** Geplant
- **Sync:** Automatisch (via `mcp_sync_log`)

### Interne API-Kommunikation

```
Frontend → Cloudflare Workers → D1 Database
              │
              ├─→ GCC API
              ├─→ Investor API
              └─→ Main API
```

---

## 🔐 SICHERHEIT & AUTHENTIFIZIERUNG

### JWT Authentication
- **Algorithms:** HS256
- **Secret:** Konfigurierbar via Environment Variables
- **Token-Expiry:** Konfigurierbar

### Rate Limiting
- **Implementiert:** Via Cloudflare Workers
- **Schutz:** DDoS, API-Missbrauch

### SSL/TLS
- **Automatisch:** Von Cloudflare bereitgestellt
- **Verschlüsselung:** TLS 1.3

---

## 📊 MONITORING & ANALYTICS

### Cloudflare Analytics
- **Real-time Monitoring:** Via Cloudflare Dashboard
- **Metrics:**
  - Request Count
  - Error Rate
  - Response Time
  - Bandwidth

### Custom Analytics
- **Tabelle:** `analytics`
- **Tracking:** Events, User-Actions, API-Calls

---

## 🚀 DEPLOYMENT-ARCHITEKTUR

### Deployment-Prozess

```
Local Development
    │
    ├─→ Git Commit
    │       │
    │       └─→ GitHub Repository
    │               │
    │               └─→ Cloudflare Workers
    │                       │
    │                       ├─→ Automatic Build
    │                       ├─→ Automatic Deploy
    │                       └─→ Global Edge Network
    │
    └─→ Manual Deploy (wrangler deploy)
            │
            └─→ Cloudflare Workers
                    └─→ Global Edge Network
```

### Deployment-Kommandos

```bash
# Local Development
npm run dev

# Deploy to Cloudflare
npm run deploy

# Database Migration
npx wrangler d1 execute togethersystembackend --file=./d1-schema.sql
npx wrangler d1 execute togethersystembackend --file=./d1-schema-investor.sql
```

---

## 🌍 GLOBALE VERFÜGBARKEIT

### Edge Locations

**Cloudflare Network:**
- 200+ Datenzentren weltweit
- Automatisches Load Balancing
- Nähestes Datenzentrum wird gewählt
- Low Latency (< 50ms)

### Regions

- ✅ Europa
- ✅ Nordamerika
- ✅ Asien
- ✅ Ozeanien
- ✅ Südamerika
- ✅ Afrika

---

## 📈 SKALIERBARKEIT

### Auto-Scaling
- **Cloudflare Workers:** Automatisch
- **D1 Database:** Automatisch
- **Kein Server-Management:** Notwendig

### Limits

**Cloudflare Workers Free Tier:**
- 100.000 Requests/Tag
- 10ms CPU-Zeit pro Request

**D1 Database Free Tier:**
- 5 GB Storage
- 5 Millionen Reads/Tag
- 100.000 Writes/Tag

### Upgrade-Optionen
- Cloudflare Workers Paid Plan
- D1 Database Paid Plan
- Erweiterte Limits verfügbar

---

## 🔄 CI/CD PIPELINE

### GitHub Actions (Optional)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

### Manual Deployment

```bash
# Install Dependencies
npm install

# Build
npm run build

# Deploy
npm run deploy
```

---

## 📋 ARCHITEKTUR-DIAGRAMM

```
┌─────────────────────────────────────────────────────────────┐
│                    USER / CLIENT                             │
│              (Browser, Mobile, API Client)                   │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS
                         │
┌────────────────────────▼────────────────────────────────────┐
│           CLOUDFLARE GLOBAL NETWORK                          │
│              (200+ Edge Locations)                           │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │   EU-1     │  │   US-1     │  │   ASIA-1   │  ...       │
│  └────────────┘  └────────────┘  └────────────┘            │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│         CLOUDFLARE WORKERS (startupsystems)                  │
│                                                               │
│  ┌──────────────────────────────────────────────────┐       │
│  │  Main Router (workers/index.ts)                  │       │
│  │  - CORS, Logger, Error Handling                  │       │
│  └───────┬────────────────┬────────────────┬────────┘       │
│          │                │                │                 │
│  ┌───────▼──────┐ ┌──────▼──────┐ ┌───────▼──────┐        │
│  │  Main API    │ │  GCC API    │ │  Investor    │        │
│  │  /api        │ │  /api/gcc   │ │  API         │        │
│  │              │ │             │ │  /api/       │        │
│  │  - Status    │ │  - Auth     │ │  investor    │        │
│  │  - Health    │ │  - Startups │ │              │        │
│  │  - Users     │ │  - Events   │ │  - Calculate │        │
│  │              │ │  - NS API   │ │  - Scenarios │        │
│  └───────┬──────┘ └──────┬──────┘ └───────┬──────┘        │
│          │                │                │                 │
└──────────┼────────────────┼────────────────┼─────────────────┘
           │                │                │
           └────────────────┼────────────────┘
                            │
           ┌────────────────▼────────────────┐
           │   CLOUDFLARE D1 DATABASE        │
           │   (togethersystembackend)       │
           │                                 │
           │  ┌──────────────────────────┐  │
           │  │  users                   │  │
           │  │  startups                │  │
           │  │  events                  │  │
           │  │  analytics               │  │
           │  │  investor_profiles       │  │
           │  │  investor_calculations   │  │
           │  │  ttt_products            │  │
           │  │  ttt_production_costs    │  │
           │  │  investor_scenarios      │  │
           │  │  mcp_sync_log           │  │
           │  │  time_cost_index        │  │
           │  └──────────────────────────┘  │
           └─────────────────────────────────┘
                            │
           ┌────────────────▼────────────────┐
           │   EXTERNE APIS                  │
           │                                 │
           │  - NS API (Niederländische Bahn)│
           │  - MCP-Database (Cursor.com)    │
           │  - (Geplant)                    │
           └─────────────────────────────────┘
```

---

## 🔧 TECHNOLOGIE-STACK

### Frontend
- **HTML5** - Struktur
- **CSS3** - Styling (Custom Properties, Grid, Flexbox)
- **JavaScript (ES6+)** - Funktionalität
- **No Frameworks** - Vanilla JS für Performance

### Backend
- **Cloudflare Workers** - Serverless Runtime
- **Hono Framework** - Web Framework
- **TypeScript** - Type Safety
- **D1 Database** - SQLite (Serverless)

### Tools & Services
- **Wrangler CLI** - Deployment Tool
- **Git** - Version Control
- **GitHub** - Repository Hosting
- **Cloudflare Dashboard** - Monitoring & Management

---

## 📝 KONFIGURATION

### Environment Variables

**wrangler.toml:**
```toml
[vars]
ENVIRONMENT = "development"
JWT_SECRET = "gcc-secret-key-change-in-production-2025"
```

**Production:**
- Via Cloudflare Dashboard
- Secrets Management
- Environment-specific Configs

---

## ✅ ARCHITEKTUR-PRINZIPIEN

1. **Serverless First** - Keine Server-Verwaltung
2. **Edge Computing** - Niedrige Latenz weltweit
3. **Microservices** - Modulare API-Struktur
4. **Scalable** - Automatische Skalierung
5. **Secure** - SSL/TLS, JWT, Rate Limiting
6. **Performant** - Edge Network, Optimiert

---

## 🎯 ZUKÜNFTIGE ERWEITERUNGEN

### Geplant

1. **MCP-Database Sync** - Automatische Synchronisation
2. **WebSocket Support** - Real-time Updates
3. **GraphQL API** - Alternative zu REST
4. **Multi-Region Deployment** - Region-spezifische Features
5. **Advanced Analytics** - Erweiterte Metriken

---

**Dokumentation erstellt:** 2025-11-26  
**Status:** ✅ Vollständig dokumentiert  
**Version:** 1.0.0



