#!/bin/bash
# Setup script for Startup Systems

echo "🚀 Setting up Startup Systems..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .dev.vars if it doesn't exist
if [ ! -f .dev.vars ]; then
  echo "📝 Creating .dev.vars from example..."
  cp .dev.vars.example .dev.vars
  echo "⚠️  Please edit .dev.vars with your Cloudflare credentials"
fi

# Create .env if it doesn't exist
if [ ! -f .env ]; then
  echo "📝 Creating .env from example..."
  cp .env.example .env
fi

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .dev.vars with your Cloudflare credentials"
echo "2. Run 'npm run dev' to start development server"
echo "3. Run 'npm run deploy' to deploy to Cloudflare Workers"

