# Setup script for Startup Systems (PowerShell)

Write-Host "🚀 Setting up Startup Systems..." -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm install

# Create .dev.vars if it doesn't exist
if (-not (Test-Path .dev.vars)) {
    Write-Host "📝 Creating .dev.vars from example..." -ForegroundColor Cyan
    Copy-Item .dev.vars.example .dev.vars
    Write-Host "⚠️  Please edit .dev.vars with your Cloudflare credentials" -ForegroundColor Yellow
}

# Create .env if it doesn't exist
if (-not (Test-Path .env)) {
    Write-Host "📝 Creating .env from example..." -ForegroundColor Cyan
    Copy-Item .env.example .env
}

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Edit .dev.vars with your Cloudflare credentials"
Write-Host "2. Run 'npm run dev' to start development server"
Write-Host "3. Run 'npm run deploy' to deploy to Cloudflare Workers"

