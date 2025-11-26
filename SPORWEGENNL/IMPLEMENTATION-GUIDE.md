# Global Central City Arrivals - Implementation Guide

## ✅ Vollständig implementierte Features

### 1. NS API Integration
- ✅ Echte NS Reisinformatie API Integration via Backend Proxy
- ✅ Fallback zu Mock-Daten wenn API nicht verfügbar
- ✅ Real-time Arrivals/Departures für 5 Stationen
- ✅ Delay-Anzeige und Platform-Informationen

### 2. Backend System
- ✅ Node.js/Express.js Backend Server
- ✅ SQLite Database für alle Daten
- ✅ RESTful API Endpoints
- ✅ JWT Authentication
- ✅ Startup Registrierung & Management
- ✅ Event Management & Anmeldungen
- ✅ NS API Proxy

### 3. User Account System
- ✅ User Registrierung & Login
- ✅ JWT Token Authentication
- ✅ User Profile Management
- ✅ Session Management
- ✅ Protected Routes

### 4. Analytics Tracking
- ✅ Automatisches Event Tracking
- ✅ User Interaction Tracking
- ✅ Page View Tracking
- ✅ Backend Analytics Storage
- ✅ Analytics Dashboard (Admin)

---

## 🚀 Quick Start

### Backend starten:

```bash
# 1. Dependencies installieren
npm install

# 2. Environment Variables setzen
# Erstelle .env Datei mit:
# PORT=3000
# JWT_SECRET=your-secret-key
# NS_API_KEY=your-ns-api-key

# 3. Server starten
npm start
```

Backend läuft auf: `http://localhost:3000`

### Frontend nutzen:

1. Öffne `global-central-city-arrivals-nijmegen.html` im Browser
2. Backend muss auf Port 3000 laufen
3. NS API Key muss in Backend `.env` gesetzt sein

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Neuen User registrieren
- `POST /api/auth/login` - User einloggen
- `GET /api/auth/me` - Aktueller User (mit Token)

### Startups
- `GET /api/startups` - Alle Startups
- `POST /api/startups` - Startup registrieren (authentifiziert)
- `PUT /api/startups/:id` - Startup aktualisieren

### Events
- `GET /api/events` - Alle Events
- `POST /api/events` - Event erstellen (Admin)
- `POST /api/events/:id/register` - Für Event anmelden

### NS API
- `GET /api/ns/departures/:station` - NS Abfahrtszeiten

### Analytics
- `GET /api/analytics` - Analytics Daten (Admin)
- `GET /api/analytics/summary` - Zusammenfassung (Admin)

---

## 🔑 NS API Key Setup

1. **Registrierung:**
   - Gehe zu https://apiportal.ns.nl/
   - Erstelle ein Konto
   - Melde dich für "Reisinformatie API" an

2. **API Key erhalten:**
   - Nach Registrierung erhältst du einen API Key
   - Kopiere den Key

3. **In Backend einfügen:**
   ```bash
   # In .env Datei:
   NS_API_KEY=dein-api-key-hier
   ```

4. **Server neu starten:**
   ```bash
   npm start
   ```

---

## 👤 User Account System

### Registrierung:
1. Klicke auf "👤 Inloggen" Badge (oben rechts)
2. Wähle "Registreren" Tab
3. Fülle Name, E-Mail und Passwort ein
4. Klicke "Registreren"

### Login:
1. Klicke auf "👤 Inloggen" Badge
2. Gib E-Mail und Passwort ein
3. Klicke "Inloggen"

### Nach Login:
- Badge zeigt deinen Namen
- Du kannst Startups registrieren
- Du kannst Events anmelden
- Dein Profil wird gespeichert

---

## 📊 Analytics

### Automatisch getrackt:
- `page_view` - Jede Seitenansicht
- `user_registered` - Neue Registrierung
- `user_login` - User Login
- `user_logout` - User Logout
- `startup_registered` - Startup-Registrierung
- `event_registered` - Event-Anmeldung
- `button_click` - Button-Klicks
- `ns_api_call` - NS API Aufrufe

### Analytics ansehen (Admin):
```bash
# API Call:
GET /api/analytics/summary
Authorization: Bearer <admin-token>
```

---

## 🗄️ Database Schema

### Users Table
- `id` - Primary Key
- `email` - Unique Email
- `password` - Hashed Password
- `name` - User Name
- `role` - user/admin
- `startup_id` - Linked Startup

### Startups Table
- `id` - Primary Key
- `name` - Startup Name
- `category` - Category
- `description` - Description
- `contact_email` - Contact
- `station_code` - Station Code
- `user_id` - Owner User ID
- `status` - pending/approved

### Events Table
- `id` - Primary Key
- `title` - Event Title
- `description` - Description
- `date` - Event Date
- `time` - Event Time
- `location` - Location
- `type` - Event Type
- `max_participants` - Max Participants

### Event Registrations Table
- `id` - Primary Key
- `event_id` - Event ID
- `user_id` - User ID
- `status` - registered/cancelled

### Analytics Table
- `id` - Primary Key
- `event_type` - Event Type
- `event_data` - JSON Data
- `user_id` - User ID (optional)
- `session_id` - Session ID
- `created_at` - Timestamp

---

## 🔧 Configuration

### Backend (.env):
```env
PORT=3000
JWT_SECRET=your-secret-key-change-in-production
NS_API_KEY=your-ns-api-key
```

### Frontend:
```javascript
// In global-central-city-arrivals-nijmegen.html
const BACKEND_URL = 'http://localhost:3000/api';
// Ändere zu deiner Backend-URL wenn deployed
```

---

## 🐛 Troubleshooting

### Backend startet nicht:
- Prüfe ob Port 3000 frei ist
- Prüfe ob alle Dependencies installiert sind: `npm install`
- Prüfe Node.js Version (mindestens v14)

### NS API funktioniert nicht:
- Prüfe ob NS_API_KEY in .env gesetzt ist
- Prüfe ob API Key gültig ist
- Prüfe Backend Logs für Fehlermeldungen

### User kann nicht einloggen:
- Prüfe ob Backend läuft
- Prüfe Browser Console für Fehler
- Prüfe ob Backend URL korrekt ist

### Analytics werden nicht gespeichert:
- Prüfe ob User eingeloggt ist (für user_id)
- Prüfe Backend Database
- Prüfe Backend Logs

---

## 📝 Next Steps

1. **Deployment:**
   - Backend auf Server deployen (Heroku, Railway, etc.)
   - Frontend auf Static Hosting (GitHub Pages, Netlify, etc.)
   - Environment Variables auf Server setzen

2. **Erweiterungen:**
   - Email-Bestätigung für Registrierung
   - Password Reset Funktionalität
   - Startup Profile Pages
   - Event Management Dashboard
   - Advanced Analytics Dashboard

3. **Security:**
   - HTTPS für Production
   - Rate Limiting
   - Input Validation
   - SQL Injection Protection (bereits implementiert)

---

## 📄 Files

- `global-central-city-arrivals-nijmegen.html` - Hauptportal (Frontend)
- `global-central-city-arrivals-nijmegen-investor.html` - Investor-Kopie
- `gcc-backend-server.js` - Backend Server
- `package.json` - Node.js Dependencies
- `README-BACKEND.md` - Backend Dokumentation
- `IMPLEMENTATION-GUIDE.md` - Diese Datei

---

**Status:** ✅ Alle Features implementiert und getestet  
**Version:** 1.0.0  
**Datum:** 2025-01-27

