# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────┐
│         Cloudflare Edge Network         │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────────────┐  │
│  │      Cloudflare Workers          │  │
│  │  ┌────────────────────────────┐  │  │
│  │  │   Hono Framework (API)     │  │  │
│  │  └────────────────────────────┘  │  │
│  │  ┌────────────────────────────┐  │  │
│  │  │   Routes & Middleware      │  │  │
│  │  └────────────────────────────┘  │  │
│  └──────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

## Components

### Workers
- **Location**: `workers/`
- **Main Entry**: `workers/index.ts`
- **Framework**: Hono (lightweight web framework)

### API Routes
- **Location**: `workers/api/`
- **Centralized route definitions**

### Utilities
- **Location**: `src/utils/`
- **Shared utilities and helpers**

## Technology Stack

- **Runtime**: Cloudflare Workers (V8 isolates)
- **Framework**: Hono
- **Language**: TypeScript
- **Deployment**: Wrangler CLI
- **CI/CD**: GitHub Actions

## Features

- Edge computing at Cloudflare's global network
- Serverless architecture
- Auto-scaling
- Low latency
- High availability

