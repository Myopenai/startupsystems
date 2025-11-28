# 📧 Email-Konfiguration für Bewerbungen

## ✅ Konfiguriert

**Admin Email:** `gentlyoverdone@outlook.com`

Alle Bewerbungen werden per Email an diese Adresse gesendet.

## 📋 Aktuelle Implementierung

### 1. Database Speicherung ✅
- Alle Bewerbungen werden in D1 Database gespeichert
- Tabelle: `job_applications`

### 2. Email-Versand (Implementiert)

Der Code versucht automatisch Emails zu versenden:

1. **Cloudflare Email Workers** (wenn `EMAIL_SENDER` Binding verfügbar)
2. **Resend API** (wenn `RESEND_API_KEY` konfiguriert)
3. **Fallback:** Logging für manuellen Versand

### 3. Email-Inhalt

Jede Email enthält:
- Bewerbungs-ID
- Name & Email des Bewerbers
- Typ (employee/startup/investor)
- Motivation
- Problem-Beispiel (falls vorhanden)
- C-E-O-C Status
- Timestamp

## 🔧 Email-Service aktivieren

### Option 1: Resend API (Empfohlen)

1. Account erstellen: https://resend.com
2. API Key erstellen
3. In Cloudflare Workers als Secret setzen:
   ```bash
   wrangler secret put RESEND_API_KEY
   ```
4. Enter: `re_xxxxx` (dein Resend API Key)

### Option 2: Cloudflare Email Workers

1. Email Worker erstellen
2. Binding in `wrangler.toml` hinzufügen:
   ```toml
   [[email_bindings]]
   binding = "EMAIL_SENDER"
   ```

### Option 3: Manuelle Email (Fallback)

Bewerbungen werden in Database gespeichert und können über `/api/jobs/applications` abgerufen werden.

## 📊 Bewerbungen abrufen

**API Endpoint:**
```
GET https://startupsystems.telcotelekom.workers.dev/api/jobs/applications
Headers:
  X-API-Key: [ADMIN_API_KEY]
```

## ✅ Status

- ✅ Email-Adresse konfiguriert: `gentlyoverdone@outlook.com`
- ✅ Email-Versand Code implementiert
- ✅ Database Speicherung aktiv
- ⚠️ Email Service benötigt Konfiguration (Resend API Key)

