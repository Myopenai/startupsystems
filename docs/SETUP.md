# Setup Guide

## Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/Myopenai/startupsystems.git
cd startupsystems
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment

**For Windows (PowerShell):**
```powershell
.\scripts\setup.ps1
```

**For Linux/Mac:**
```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

### 4. Edit Configuration Files

Edit `.dev.vars` with your Cloudflare credentials:
```
ENVIRONMENT=development
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

### 5. Login to Cloudflare

```bash
npx wrangler login
```

### 6. Start Development Server

```bash
npm run dev
```

### 7. Deploy to Production

```bash
npm run deploy
```

## Cloudflare Workers Setup

### Get Your API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Edit Cloudflare Workers" template
4. Copy the token

### Get Your Account ID

1. Go to https://dash.cloudflare.com/
2. Select your account
3. Copy Account ID from right sidebar

### GitHub Secrets (for CI/CD)

Add these secrets to your GitHub repository:

1. Go to Settings → Secrets and variables → Actions
2. Add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

## Verification

After deployment, check your worker:
- Development: http://localhost:8787
- Production: Your worker URL (shown after deployment)

Test endpoints:
- `/` - Root API info
- `/health` - Health check
- `/api/status` - Service status

## Troubleshooting

### Wrangler Not Found
```bash
npm install -g wrangler
```

### Build Errors
```bash
npm run lint
npm run build
```

### Authentication Issues
```bash
npx wrangler logout
npx wrangler login
```

