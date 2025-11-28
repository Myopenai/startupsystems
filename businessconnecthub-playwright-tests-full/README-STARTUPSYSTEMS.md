# Startup Systems - Playwright Test Suite

Diese Testsuite testet das **Startup Systems Portal** auf `http://localhost:8787/` (lokal) oder auf Cloudflare Workers.

## Getestete Bereiche

- ✅ **Hauptportal** (`/`)
  - API-Informationen
  - Health Check
  - Endpoint-Liste

- ✅ **Investor Portal** (`/investor/`)
  - Z-Canvas Kapitalformeln
  - Lokale Kapitalberechnung
  - Globale BPP-Berechnung
  - Produktionskosten-Berechnung
  - Zeitkosten-Leitzahl
  - Kombinierte Berechnungen

- ✅ **API Endpoints** (`/api/*`)
  - Health Check
  - API Info
  - Service Status
  - Investor API Berechnungen

## Voraussetzungen

1. **Node.js** (empfohlen >= 18) installiert
2. **Startup Systems** läuft auf `http://localhost:8787/` (via `npm run dev`) oder auf Cloudflare Workers

## Installation

```bash
cd businessconnecthub-playwright-tests-full
npm install
npx playwright install --with-deps chromium
```

## Tests ausführen

### Alle Tests:
```bash
npm test
```

### Nur Investor Portal:
```bash
npm run test:investor
```

### Nur API Tests:
```bash
npm run test:api
```

### Nur Hauptportal:
```bash
npm run test:main
```

### Mit UI (headed mode):
```bash
npm run test:ui
```

### HTML-Report:
```bash
npm run test:report
```

### Mit anderer Base URL:
```bash
$env:PLAYWRIGHT_BASE_URL="https://startupsystems.telcotelekom.workers.dev"; npm test
```

## Konfiguration

Die Base URL ist in `playwright.config.ts` definiert:
- **Default:** `http://localhost:8787/` (lokaler Development Server)
- **Überschreibbar:** via Umgebungsvariable `PLAYWRIGHT_BASE_URL`

## Test-Struktur

```
tests/
├── startupsystems-main.spec.ts      # Hauptportal Tests
├── startupsystems-investor.spec.ts  # Investor Portal Tests
└── startupsystems-api.spec.ts       # API Endpoint Tests
```

## Bekannte Tests

### Hauptportal
- Hauptportal lädt und zeigt API-Informationen
- Health Check Endpoint funktioniert
- API Endpoint Liste ist verfügbar

### Investor Portal
- Investor Portal lädt
- Berechnungs-Karten sind vorhanden
- Formulare für alle Berechnungsarten
- API Calls funktionieren

### API Tests
- GET /health
- GET /api
- GET /api/status
- POST /api/investor/calculate/local
- POST /api/investor/calculate/global
- POST /api/investor/calculate/production
- POST /api/investor/calculate/time-index
- POST /api/investor/calculate/complete

## Fehlerbehebung

### Tests schlagen fehl
- Prüfe ob Startup Systems läuft (`npm run dev` im Hauptprojekt)
- Prüfe Base URL in `playwright.config.ts`
- Prüfe Logs für API-Fehler

### Timeouts
- Erhöhe Timeout in `playwright.config.ts`
- Prüfe Netzwerk-Verbindung
- Prüfe ob Server erreichbar ist

### API-Fehler
- Prüfe ob Investor API korrekt deployed ist
- Prüfe D1 Database Schema
- Prüfe Environment Variables

## Legacy Tests

Alte Tests für BusinessConnectHub/TELCOMPETIOION sind noch vorhanden aber werden nicht mehr ausgeführt (siehe `testMatch` in `playwright.config.ts`).



