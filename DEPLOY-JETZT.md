# 🚀 DEPLOY ALL SERVERS - Schnellstart

## ✅ System ist bereit!

Alle Dateien sind bereit zum Deployment.

---

## 📋 SCHNELLDEPLOYMENT (3 Schritte)

### 1️⃣ GitHub Push

```powershell
git add .
git commit -m "Startup Systems Complete"
git push origin main
```

---

### 2️⃣ Cloudflare D1 Database

```bash
npx wrangler d1 create startupsystems-db
```

→ **ID kopieren und in `wrangler.toml` Zeile 21 eintragen!**

Dann:
```bash
npx wrangler d1 execute startupsystems-db --file=./d1-schema.sql
```

---

### 3️⃣ Cloudflare Workers Deploy

```bash
npm run deploy
```

**Fertig!** ✅

---

## ⚙️ Environment Variables (optional, für volle Funktionalität)

Im Cloudflare Dashboard setzen:
- `JWT_SECRET` (Secret)
- `NS_API_KEY` (Secret)
- `ENVIRONMENT` = production

---

## 📍 URLs nach Deployment:

- API: `https://startupsystems.workers.dev/api`
- GCC: `https://startupsystems.workers.dev/api/gcc`
- Health: `https://startupsystems.workers.dev/health`

---

**✅ Bereit zum Deployment!**

