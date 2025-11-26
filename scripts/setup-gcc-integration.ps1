# Setup Script for GCC (Global Central City Arrivals) Integration
# Automatisches Kopieren und Anpassen der HTML-Dateien

Write-Host "🚀 Starting GCC Integration Setup..." -ForegroundColor Green
Write-Host ""

# Create directories
Write-Host "📁 Creating directory structure..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path public\gcc-nijmegen | Out-Null
New-Item -ItemType Directory -Force -Path public\togethersystems | Out-Null
New-Item -ItemType Directory -Force -Path public\assets\logos | Out-Null
New-Item -ItemType Directory -Force -Path public\assets\images | Out-Null
Write-Host "✅ Directories created" -ForegroundColor Green

# Copy HTML files
Write-Host ""
Write-Host "📄 Copying HTML files..." -ForegroundColor Cyan

if (Test-Path "SPORWEGENNL\global-central-city-arrivals-nijmegen.html") {
    Copy-Item "SPORWEGENNL\global-central-city-arrivals-nijmegen.html" "public\gcc-nijmegen\index.html" -Force
    Write-Host "✅ Copied main portal" -ForegroundColor Green
} else {
    Write-Host "⚠️  Main portal HTML not found" -ForegroundColor Yellow
}

if (Test-Path "SPORWEGENNL\global-central-city-arrivals-nijmegen-investor.html") {
    Copy-Item "SPORWEGENNL\global-central-city-arrivals-nijmegen-investor.html" "public\gcc-nijmegen\investor.html" -Force
    Write-Host "✅ Copied investor version" -ForegroundColor Green
} else {
    Write-Host "⚠️  Investor HTML not found" -ForegroundColor Yellow
}

if (Test-Path "SPORWEGENNL\togethersystems-enterprise-upload-portal.html") {
    Copy-Item "SPORWEGENNL\togethersystems-enterprise-upload-portal.html" "public\togethersystems\upload-portal.html" -Force
    Write-Host "✅ Copied upload portal" -ForegroundColor Green
} else {
    Write-Host "⚠️  Upload portal HTML not found" -ForegroundColor Yellow
}

# Copy assets
Write-Host ""
Write-Host "🎨 Copying assets..." -ForegroundColor Cyan

if (Test-Path "SPORWEGENNL\TTT_final.svg") {
    Copy-Item "SPORWEGENNL\TTT_final.svg" "public\assets\logos\" -Force
    Write-Host "✅ Copied TTT logo" -ForegroundColor Green
}

if (Test-Path "SPORWEGENNL\A_photograph_captures_a_meal_replacement_beverage_.svg") {
    Copy-Item "SPORWEGENNL\A_photograph_captures_a_meal_replacement_beverage_.svg" "public\assets\images\" -Force
    Write-Host "✅ Copied SVG image" -ForegroundColor Green
}

# Update BACKEND_URL in HTML files
Write-Host ""
Write-Host "🔧 Updating BACKEND_URL in HTML files..." -ForegroundColor Cyan

$htmlFiles = @(
    "public\gcc-nijmegen\index.html",
    "public\gcc-nijmegen\investor.html"
)

$oldUrl = "const BACKEND_URL = 'http://localhost:3000/api';"
$newUrl = @"
// Auto-detect backend URL for Cloudflare Workers
const BACKEND_URL = (() => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:8787/api/gcc';  // Wrangler dev server
    }
    return '/api/gcc';  // Production - relative path to worker
})();
"@

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        if ($content -match [regex]::Escape($oldUrl)) {
            $content = $content -replace [regex]::Escape($oldUrl), $newUrl
            Set-Content $file -Value $content -Encoding UTF8 -NoNewline
            Write-Host "✅ Updated BACKEND_URL in $(Split-Path $file -Leaf)" -ForegroundColor Green
        } else {
            Write-Host "⚠️  BACKEND_URL not found in $(Split-Path $file -Leaf) - may need manual update" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "✅ GCC Integration Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Set up Cloudflare D1 Database (see FINAL-IMPLEMENTATION-REPORT.md)" -ForegroundColor White
Write-Host "2. Configure Environment Variables (JWT_SECRET, NS_API_KEY)" -ForegroundColor White
Write-Host "3. Run: npm run dev" -ForegroundColor White
Write-Host "4. Test: http://localhost:8787/api/gcc/health" -ForegroundColor White
Write-Host ""

