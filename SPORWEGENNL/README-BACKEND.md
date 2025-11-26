# Global Central City Arrivals - Backend Server

Backend-Server für Startup-Registrierung, Event-Management, User Accounts und Analytics.

## 🚀 Installation

```bash
# Dependencies installieren
npm install

# Environment Variables setzen
cp .env.example .env
# Bearbeite .env und füge deinen NS API Key ein
```

## 🔑 NS API Key erhalten

1. Besuche [NS API Portal](https://apiportal.ns.nl/)
2. Registriere dich für ein Konto
3. Erstelle einen API-Schlüssel für "Reisinformatie API"
4. Füge den Key in `.env` ein: `NS_API_KEY=dein-key-hier`

## ▶️ Starten

```bash
# Development Mode (mit Auto-Reload)
npm run dev

# Production Mode
npm start
```

Server läuft auf: `http://localhost:3000`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registrieren
- `POST /api/auth/login` - User einloggen
- `GET /api/auth/me` - Aktueller User (authentifiziert)

### Startups
- `GET /api/startups` - Alle Startups
- `GET /api/startups/:id` - Einzelnes Startup
- `POST /api/startups` - Startup registrieren (authentifiziert)
- `PUT /api/startups/:id` - Startup aktualisieren (authentifiziert)

### Events
- `GET /api/events` - Alle Events
- `GET /api/events/:id` - Einzelnes Event
- `POST /api/events` - Event erstellen (Admin)
- `POST /api/events/:id/register` - Für Event anmelden (authentifiziert)
- `GET /api/users/events` - User's Event-Anmeldungen (authentifiziert)

### NS API Proxy
- `GET /api/ns/departures/:station` - NS Abfahrtszeiten (z.B. `/api/ns/departures/NMG`)

### Analytics
- `GET /api/analytics` - Analytics Daten (Admin)
- `GET /api/analytics/summary` - Analytics Zusammenfassung (Admin)

### Health Check
- `GET /api/health` - Server Status

## 🔐 Authentication

Alle authentifizierten Endpoints benötigen einen JWT Token im Header:

```
Authorization: Bearer <token>
```

Token wird bei Login/Register zurückgegeben und ist 7 Tage gültig.

## 💾 Database

SQLite Database wird automatisch erstellt bei erstem Start:
- `gcc-database.db` - SQLite Database Datei

Tabellen:
- `users` - User Accounts
- `startups` - Startup Registrierungen
- `events` - Community Events
- `event_registrations` - Event-Anmeldungen
- `analytics` - Analytics Tracking

## 📊 Analytics Events

Automatisch getrackt:
- `user_registered` - Neue User-Registrierung
- `user_login` - User Login
- `startup_registered` - Neue Startup-Registrierung
- `startup_updated` - Startup Update
- `event_created` - Neues Event
- `event_registered` - Event-Anmeldung
- `ns_api_call` - NS API Aufruf

## 🔒 Security

- Passwörter werden mit bcrypt gehasht
- JWT Tokens für Authentication
- SQL Injection Protection durch Parameterized Queries
- CORS aktiviert für Frontend-Integration

## 🌐 Frontend Integration

Frontend kann die API wie folgt nutzen:

```javascript
// Login
const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'user@example.com', password: 'password' })
});
const { token, user } = await response.json();

// Authenticated Request
const data = await fetch('http://localhost:3000/api/startups', {
    headers: { 'Authorization': `Bearer ${token}` }
});
```

## 📝 Environment Variables

- `PORT` - Server Port (default: 3000)
- `JWT_SECRET` - Secret für JWT Tokens
- `NS_API_KEY` - NS Reisinformatie API Key

## 🐛 Troubleshooting

**NS API Fehler:**
- Prüfe ob NS_API_KEY in .env gesetzt ist
- Prüfe ob API Key gültig ist auf apiportal.ns.nl

**Database Fehler:**
- Prüfe ob Schreibrechte für gcc-database.db vorhanden sind
- Lösche gcc-database.db für Neustart

**Port bereits belegt:**
- Ändere PORT in .env
- Oder beende anderen Prozess auf Port 3000

## 📄 License

MIT License - Teil von Global Central City Arrivals Projekt

