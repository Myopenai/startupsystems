# Deployment Guide

## Cloudflare Workers Deployment

### Prerequisites

1. Cloudflare account
2. Wrangler CLI installed: `npm install -g wrangler`
3. Cloudflare API token

### Setup

1. Login to Cloudflare:
```bash
wrangler login
```

2. Configure your account ID in `wrangler.toml`

3. Set up environment variables:
```bash
wrangler secret put CLOUDFLARE_API_TOKEN
```

### Deployment Commands

#### Development
```bash
npm run dev
```

#### Production
```bash
npm run deploy
```

### GitHub Actions

Automatic deployment via GitHub Actions is configured in `.github/workflows/deploy.yml`.

Required secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Environment Variables

Create `.dev.vars` for local development:
```
ENVIRONMENT=development
CLOUDFLARE_API_TOKEN=your_token_here
```

## Monitoring

Check worker status:
```bash
wrangler tail
```

View logs in Cloudflare Dashboard:
https://dash.cloudflare.com/

