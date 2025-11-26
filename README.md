# Startup Systems

Modern, scalable startup system infrastructure with Cloudflare Workers integration.

## Features

- 🚀 **Cloudflare Workers** - Edge computing and serverless functions
- 🔄 **Automated Deployment** - CI/CD ready
- 📦 **Modular Architecture** - Scalable and maintainable
- 🌐 **Multi-Environment** - Development, Staging, Production
- 🔒 **Security First** - Best practices built-in
- 🚂 **GCC Integration** - Global Central City Arrivals API (Startup Hub Portal)
- 🎨 **YORDY Artist Showcase** - MicroLED Quality Artist Presentation

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Cloudflare account
- Git

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Deployment

```bash
npm run deploy
```

## Project Structure

```
startupsystems/
├── workers/          # Cloudflare Workers
├── src/              # Source code
├── public/           # Static assets
├── docs/             # Documentation
├── tests/            # Test files
└── scripts/          # Utility scripts
```

## Cloudflare Workers

Workers are located in the `workers/` directory and automatically deployed via GitHub Actions.

### GCC (Global Central City Arrivals) Integration

The project includes a fully integrated **Global Central City Arrivals** API for Nijmegen Startup Hub:
- Startup Management
- Event System
- NS Train API Integration
- User Authentication
- Analytics

See `README-GCC-INTEGRATION.md` for setup instructions.

### YORDY Artist Showcase

The project includes a prominent **YORDY Artist Showcase** with MicroLED quality visualization:
- High-resolution artwork display
- Advanced animations and effects
- Reusable widget component
- Full showcase page

See `README-YORDY-INTEGRATION.md` for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

---

**Status**: 🟢 Active Development  
**Version**: 1.0.0  
**Cloudflare Workers**: ✅ Live Online  
**GCC Integration**: ✅ Fully Implemented

---

## 📚 Documentation

- [GCC Integration Guide](README-GCC-INTEGRATION.md)
- [Final Implementation Report](FINAL-IMPLEMENTATION-REPORT.md)
- [Setup Guide](docs/SETUP.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
