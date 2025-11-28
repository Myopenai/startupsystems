# Legacy Tests - Nicht mehr verwendet

Die folgenden Test-Dateien sind für das alte BusinessConnectHub/TELCOMPETIOION System und werden nicht mehr für Startup Systems verwendet.

Diese Tests wurden in den `tests/legacy/` Ordner verschoben.

## Legacy Test-Dateien

- `admin-monitoring.spec.ts` - Admin Monitoring Tests
- `balanced-exchange.spec.ts` - Balanced Exchange Tests
- `business-admin.spec.ts` - Business Admin Tests
- `honeycomb.spec.ts` - Honeycomb Tests
- `legal-hub.spec.ts` - Legal Hub Tests
- `messages-system.spec.ts` - Messages System Tests
- `neural-network-console.spec.ts` - Neural Network Console Tests
- `offline-forum.spec.ts` - Offline Forum Tests
- `pool-entry.spec.ts` - Pool Entry Tests
- `portal.spec.ts` - Portal Tests (altes Manifest-Portal)
- `production-dashboard.spec.ts` - Production Dashboard Tests
- `start.spec.ts` - Start Tests (alte Startseite)
- `telbank.spec.ts` - Telbank Tests

## Neue Startup Systems Tests

- ✅ `startupsystems-main.spec.ts` - Hauptportal Tests
- ✅ `startupsystems-investor.spec.ts` - Investor Portal Tests
- ✅ `startupsystems-api.spec.ts` - API Endpoint Tests

## Migration

Die Playwright Config (`playwright.config.ts`) nutzt jetzt `testMatch: /tests\/startupsystems.*\.spec\.ts/` um nur die neuen Startup Systems Tests auszuführen.

Legacy Tests sind weiterhin verfügbar für Referenz, werden aber nicht mehr automatisch ausgeführt.



