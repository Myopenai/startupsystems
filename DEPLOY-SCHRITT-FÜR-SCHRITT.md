# 🚀 DEPLOYMENT - Schritt für Schritt

## ✅ System ist bereit zum Deployment

---

## 📋 SCHRITT 1: GitHub Deployment

### PowerShell/Terminal öffnen und ausführen:

```powershell
cd D:\STARTUPSYSTEMS

# Alle Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Complete Startup Systems: GCC Integration, YORDY Showcase"

# Zu GitHub pushen
git push origin main
```

---

## ☁️ SCHRITT 2: Cloudflare Workers Deployment

### 2.1 D1 Database erstellen

```bash
npx wrangler d1 create startupsystems-db
```

**WICHTIG:** Die ausgegebene Database ID kopieren!

### 2.2 Database ID in `wrangler.toml` eintragen

Öffne `wrangler.toml` und setze:
```toml
[[d1_databases]]
binding = "DB"
database_name = "startupsystems-db"
database_id = "HIER-DIE-ID-EINTRAGEN"  # ← Von Schritt 2.1
```

### 2.3 Schema deployen

```bash
npx wrangler d1 execute startupsystems-db --file=./d1-schema.sql
```

### 2.4 Environment Variables setzen

1. Cloudflare Dashboard öffnen: https://dash.cloudflare.com
2. Workers & Pages → startupsystems
3. Settings → Variables → Add variable
4. Hinzufügen:
   - **Name:** `JWT_SECRET` | **Type:** Secret | **Value:** (zufälliger String)
   - **Name:** `NS_API_KEY` | **Type:** Secret | **Value:** (NS API Key)
   - **Name:** `ENVIRONMENT` | **Type:** Plain Text | **Value:** `production`

### 2.5 Deploy Worker

```bash
npm run deploy
```

---

## ✅ NACH DEPLOYMENT VERFÜGBAR:

- **Main API:** `https://startupsystems.workers.dev/api`
- **GCC API:** `https://startupsystems.workers.dev/api/gcc`
- **Health Check:** `https://startupsystems.workers.dev/health`
- **YORDY Showcase:** `YORDY-SHOWCASE-SIMPLE.html` (lokal oder via GitHub Pages)

---

## 📦 Was wird deployed:

✅ Cloudflare Workers (Backend API)  
✅ GCC API Routes  
✅ D1 Database Schema  
✅ Alle Dokumentationen  
✅ YORDY Showcase HTML  

---

**STATUS:** ✅ Bereit zum Deployment!

