# 📧 Resend API Key Setup - Schritt für Schritt

## 🔑 Schritt 1: Resend Account erstellen

1. Gehe zu: **https://resend.com**
2. Klicke auf **Sign Up** (kostenlos)
3. Erstelle Account mit deiner Email: `gentlyoverdone@outlook.com`

## 🔑 Schritt 2: API Key erstellen

1. Nach Login: Gehe zu **API Keys** (im Dashboard)
2. Klicke auf **Create API Key**
3. Gib einen Namen ein: z.B. `Startup Systems - Job Applications`
4. **Scope:** Wähle `Sending access`
5. **Create**
6. **WICHTIG:** Kopiere den API Key sofort (wird nur einmal angezeigt!)
   - Format: `re_xxxxxxxxxxxxxxxxxxxx`

## 🔑 Schritt 3: API Key in Cloudflare Workers setzen

**Führe diesen Befehl aus:**
```bash
npx wrangler secret put RESEND_API_KEY
```

**Dann:**
1. Der Befehl fragt: `Enter the secret value:`
2. Füge deinen Resend API Key ein (z.B. `re_xxxxx`)
3. Drücke Enter

**Fertig!** ✅

---

## ✅ Verifikation

Prüfe ob Secret gesetzt wurde:
```bash
npx wrangler secret list
```

Du solltest sehen:
```
RESEND_API_KEY (encrypted)
```

---

## 🚀 Alternative: Ohne Resend (Kostenlos)

Falls du keinen Resend Account erstellen möchtest:

### Option A: Mailgun (Auch kostenlos)
```bash
npx wrangler secret put MAILGUN_API_KEY
```

### Option B: SendGrid (Auch kostenlos)
```bash
npx wrangler secret put SENDGRID_API_KEY
```

### Option C: Cloudflare Email Workers (Beta)
- Benötigt spezielle Cloudflare Email Workers Zugang
- Kontaktiere Cloudflare Support

---

## 📧 Email wird dann automatisch gesendet

Nach dem Setzen des API Keys werden **ALLE Bewerbungen automatisch** an `gentlyoverdone@outlook.com` gesendet!

**Email-Inhalt:**
- Subject: `🚀 Neue Bewerbung: [Name] - [Typ]`
- Enthält: Alle Bewerbungsdetails

---

## ⚠️ Kosten

**Resend Free Tier:**
- 3,000 Emails/Monat **KOSTENLOS**
- Perfekt für Startup Systems

---

## 🔗 Links

- Resend: https://resend.com
- Resend API Docs: https://resend.com/docs
- Cloudflare Secrets: https://developers.cloudflare.com/workers/wrangler/commands/#secret

