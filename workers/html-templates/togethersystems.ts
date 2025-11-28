/**
 * Auto-generated HTML template
 * Source: public/togethersystems/portal.html
 * Generated: 2025-11-28T13:41:19.923Z
 */

export const togetherSystemsHTML = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TogetherSystems Portal | TTT - Together Systems · Telbank · T-Systems GPA</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #0066CC;
            --secondary-color: #00AA44;
            --accent-color: #FF6600;
            --ttt-color: #8B5CF6;
            --dark-bg: #1a1a2e;
            --light-bg: #f5f5f5;
            --text-light: #ffffff;
            --text-dark: #333333;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, var(--dark-bg) 0%, #16213e 100%);
            color: var(--text-light);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header */
        .header {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            text-align: center;
        }

        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            background: linear-gradient(45deg, var(--ttt-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header .subtitle {
            font-size: 1.3em;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 20px;
        }

        .ttt-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--ttt-color) 0%, #6D28D9 100%);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: bold;
            margin: 5px;
        }

        /* Navigation */
        .nav {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .nav-btn {
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: var(--text-light);
            text-decoration: none;
            transition: all 0.3s;
            cursor: pointer;
        }

        .nav-btn:hover,
        .nav-btn.active {
            background: var(--ttt-color);
            border-color: var(--ttt-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }

        /* Section */
        .section {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            display: none;
        }

        .section.active {
            display: block;
            animation: fadeIn 0.5s;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .section h2 {
            color: var(--ttt-color);
            font-size: 2em;
            margin-bottom: 20px;
            border-bottom: 2px solid var(--ttt-color);
            padding-bottom: 10px;
        }

        /* Grid Layouts */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
            border-color: var(--ttt-color);
        }

        .card h3 {
            color: var(--secondary-color);
            margin-bottom: 10px;
        }

        .card p {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 15px;
        }

        /* Feature List */
        .feature-list {
            list-style: none;
            padding: 0;
        }

        .feature-list li {
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-list li:before {
            content: "✓ ";
            color: var(--secondary-color);
            font-weight: bold;
            margin-right: 10px;
        }

        /* Migration Status */
        .migration-status {
            background: rgba(255, 165, 0, 0.1);
            border-left: 4px solid var(--accent-color);
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }

        .migration-status h3 {
            color: var(--accent-color);
            margin-bottom: 10px;
        }

        /* Info Box */
        .info-box {
            background: rgba(0, 170, 68, 0.1);
            border-left: 4px solid var(--secondary-color);
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }

        .info-box h3 {
            color: var(--secondary-color);
            margin-bottom: 10px;
        }

        /* Code Block */
        .code-block {
            background: rgba(0, 0, 0, 0.3);
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            margin: 15px 0;
        }

        /* Links */
        .link {
            color: var(--secondary-color);
            text-decoration: none;
            border-bottom: 1px solid var(--secondary-color);
            transition: all 0.3s;
        }

        .link:hover {
            color: var(--ttt-color);
            border-color: var(--ttt-color);
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>TogetherSystems Portal</h1>
            <div class="subtitle">
                <span class="ttt-badge">TTT</span>
                <span class="ttt-badge">Together Systems</span>
                <span class="ttt-badge">Telbank</span>
                <span class="ttt-badge">T-Systems GPA</span>
            </div>
            <p style="margin-top: 20px; color: rgba(255, 255, 255, 0.7);">
                Zero-Einsatz-Kapital-Modell | Industrial Fabrication | Kooptimale Mitarbeiter:innen
            </p>
        </div>

        <!-- Navigation -->
        <div class="nav">
            <a href="#" class="nav-btn active" onclick="showSection('overview')">Überblick</a>
            <a href="#" class="nav-btn" onclick="showSection('tpga')">🔐 TPGA</a>
            <a href="#" class="nav-btn" onclick="showSection('architecture')">Systemarchitektur</a>
            <a href="#" class="nav-btn" onclick="showSection('new-features')">🆕 Neue Features</a>
            <a href="#" class="nav-btn" onclick="showSection('telbank')">💰 Telbank</a>
            <a href="#" class="nav-btn" onclick="showSection('migration')">Migration</a>
            <a href="#" class="nav-btn" onclick="showSection('github')">GitHub Integration</a>
        </div>

        <!-- Overview Section -->
        <div id="overview" class="section active">
            <h2>🌐 Überblick</h2>
            
            <div class="info-box">
                <h3>Was ist TogetherSystems?</h3>
                <p>
                    TogetherSystems ist das zentrale Portal für <strong>TTT (Three T)</strong> - ein System, das mehrere Ebenen in einem gemeinsamen Modell bündelt:
                </p>
            </div>

            <div class="grid">
                <div class="card">
                    <h3>💰 Finanzielle Ebene</h3>
                    <p>
                        Null-Einsatz-Kapital, aber Zugriff auf globale Kapitalströme (Brutto-Planeten-Produkt / BPP).
                    </p>
                    <ul class="feature-list">
                        <li>Zero-Risk Investment</li>
                        <li>100%+ Gewinn-Modell</li>
                        <li>Globaler BPP-Zugriff</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>🔧 Technische Ebene</h3>
                    <p>
                        Software-Kernel (Together Systems, Telbank, transferNetworkT), API-Layer, Notarisierung, KI-Auswertung.
                    </p>
                    <ul class="feature-list">
                        <li>Software-Kernel</li>
                        <li>API-Layer</li>
                        <li>Hash + Zeitstempel Notarisierung</li>
                        <li>KI-Auswertung</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>💰 TELBANK - Finanzsystem</h3>
                    <p>
                        MetaMask-Integration, Fiat & Crypto Transaktionen, Inflow/Outflow Management, TELBANK Pool für gemeinsame Liquidität.
                    </p>
                    <ul class="feature-list">
                        <li>💰 Telbank - Hauptsystem mit MetaMask</li>
                        <li>💰 TELBANK Pool - Gemeinsamer Liquiditäts-Pool</li>
                        <li>💎 TELADIA - Premium Banking Service</li>
                        <li>🔄 Inflow/Outflow Management</li>
                        <li>📊 Real-time Balance Tracking</li>
                        <li>🔐 Multi-Signature Wallets</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>🏭 Industrielle Ebene</h3>
                    <p>
                        "Industrial Fabrication" – Nutzergeräte als Mini-Fabriken, die Produkte durch Software herstellen.
                    </p>
                    <ul class="feature-list">
                        <li>Software-gesteuerte Produktion</li>
                        <li>Nutzergeräte als Fabriken</li>
                        <li>Automatisierte Herstellung</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>👥 Soziale Ebene</h3>
                    <p>
                        Kooptimale Mitarbeiter:innen, die über 100% Identifikation mit Vision, Moral, Ideologie, Kunst und Business verfügen.
                    </p>
                    <ul class="feature-list">
                        <li>100%+ Identifikation</li>
                        <li>Vision & Moral</li>
                        <li>Kunst & Business</li>
                    </ul>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px;">
                <h3>Kernversprechen</h3>
                <p style="font-size: 1.2em; font-style: italic;">
                    "Seal capital by no risk investment and 100% plus wins for no time investment in time."
                </p>
                <p style="margin-top: 15px;">
                    Lösungen werden programmiert, indem reale Alltagsprobleme sekündlich erkannt, notiert und später technisch gelöst werden. Das Problem selbst ist Kapital – wertvoller als Gold.
                </p>
            </div>
        </div>

        <!-- Architecture Section -->
        <div id="architecture" class="section">
            <h2>🏗️ Systemarchitektur</h2>

            <div class="grid">
                <div class="card">
                    <h3>Frontend Layer</h3>
                    <ul class="feature-list">
                        <li>Investor-Portal & Z-Kanvas</li>
                        <li>HTML/CSS/JS-Oberfläche</li>
                        <li>TTT-Branding</li>
                        <li>SVG-Stempel</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>Backend API-Layer</h3>
                    <ul class="feature-list">
                        <li>POST /api/notarize</li>
                        <li>GET /api/live-stats</li>
                        <li>POST /api/ai-scenario</li>
                        <li>Investor API Integration</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>Datenbank / Notarisierung</h3>
                    <ul class="feature-list">
                        <li>D1 Database (Cloudflare)</li>
                        <li>Event-Log (Audit-Trail)</li>
                        <li>Rate Limits</li>
                        <li>Investor Notary</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>KI-Layer</h3>
                    <ul class="feature-list">
                        <li>Meta-Analyst</li>
                        <li>Szenarien-Bewertung</li>
                        <li>Applied AI in Finance</li>
                        <li>Industrial Systems</li>
                    </ul>
                </div>
            </div>

            <div class="code-block" style="margin-top: 30px;">
                <strong>Architektur-Prinzipien:</strong><br>
                - Zero-Einsatz-Kapital-Modell<br>
                - Skalierbare Software-Kernel<br>
                - Notarisierte Verifizierung<br>
                - KI-gestützte Analyse<br>
                - Globale BPP-Integration
            </div>
        </div>

        <!-- TPGA Section -->
        <div id="tpga" class="section">
            <h2>🔐 TPGA - Three T Platform Global Architecture</h2>

            <div class="info-box">
                <h3>🌐 Überblick</h3>
                <p>
                    <strong>TPGA (Three T Platform Global Architecture)</strong> ist das fundamentale Architektur-System von 
                    <strong>TTT (Three T) - Together Systems · Telbank · T-Systems GPA</strong>. Es bildet die Grundlage 
                    für alle TTT-Services und ermöglicht nahtlose Integration zwischen allen Komponenten.
                </p>
                <p style="margin-top: 15px;">
                    TPGA ist eine <strong>unified Platform Architecture</strong>, die alle TTT-Services unter einem Dach vereint 
                    und durch einheitliche Authentifizierung, Datenverwaltung und Kommunikation verbindet.
                </p>
            </div>

            <div class="grid">
                <div class="card" style="border: 2px solid var(--ttt-color);">
                    <h3>🔑 Unified Account System</h3>
                    <ul class="feature-list">
                        <li>✅ Ein Account für alle TTT Services</li>
                        <li>✅ Single User Identity über alle Plattformen</li>
                        <li>✅ Zentrales Profil-Management</li>
                        <li>✅ Cross-Platform Daten-Synchronisation</li>
                        <li>✅ Einheitliche Berechtigungsverwaltung</li>
                        <li>✅ Unified Settings & Preferences</li>
                    </ul>
                    <p style="margin-top: 15px; font-size: 0.9em;">
                        <strong>Vorteile:</strong> Kein mehrfaches Anmelden, synchronisierte Daten, zentrale Einstellungen
                    </p>
                </div>

                <div class="card" style="border: 2px solid var(--secondary-color);">
                    <h3>🔐 Single Sign-On (SSO)</h3>
                    <ul class="feature-list">
                        <li>✅ Ein Login für alle TTT-Services</li>
                        <li>✅ Secure Token-System (JWT)</li>
                        <li>✅ Session-Management</li>
                        <li>✅ Multi-Device Support</li>
                        <li>✅ Automatic Re-authentication</li>
                        <li>✅ OAuth 2.0 kompatibel</li>
                    </ul>
                    <p style="margin-top: 15px; font-size: 0.9em;">
                        <strong>Implementierung:</strong> JWT-basierte Authentifizierung mit Token-Refresh-Mechanismen
                    </p>
                </div>

                <div class="card" style="border: 2px solid var(--primary-color);">
                    <h3>🔄 Cross-Platform Integration</h3>
                    <ul class="feature-list">
                        <li>✅ Together Systems ↔ Telbank ↔ T-Systems GPA</li>
                        <li>✅ Startup Systems ↔ Investor Portal ↔ Job Portal</li>
                        <li>✅ GCC API ↔ TogetherSystems ↔ TTT Services</li>
                        <li>✅ Alle Apps ↔ Zentrale Services</li>
                        <li>✅ Shared Database (Cloudflare D1)</li>
                        <li>✅ Unified REST API</li>
                    </ul>
                </div>

                <div class="card" style="border: 2px solid var(--accent-color);">
                    <h3>🌐 Global Platform Architecture</h3>
                    <ul class="feature-list">
                        <li>🌍 Cloudflare Edge Network (200+ Datenzentren)</li>
                        <li>⚡ Edge Computing</li>
                        <li>🔒 End-to-End Encryption</li>
                        <li>📊 Real-time Sync</li>
                        <li>🔄 Auto-Scaling</li>
                        <li>🚀 Sub-50ms Response Times</li>
                    </ul>
                </div>

                <div class="card" style="border: 2px solid #FFD700;">
                    <h3>🏗️ Three T (TTT) Kern-Systeme</h3>
                    <ul class="feature-list">
                        <li>🌐 <strong>Together Systems:</strong> Zentrale Plattform, User-Management, Manifest-System</li>
                        <li>💰 <strong>Telbank:</strong> Finanzsystem, MetaMask, Crypto/Fiat, TELBANK Pool</li>
                        <li>🔐 <strong>T-Systems GPA:</strong> System-Orchestrierung, API-Gateway, Global Network</li>
                    </ul>
                    <p style="margin-top: 15px; font-size: 0.9em;">
                        Alle drei Systeme sind vollständig integriert und über TPGA verbunden.
                    </p>
                </div>

                <div class="card" style="border: 2px solid #38bdf8;">
                    <h3>📊 Service-Integration</h3>
                    <ul class="feature-list">
                        <li>✅ Together Systems Portal</li>
                        <li>✅ Startup Systems</li>
                        <li>✅ Investor Portal</li>
                        <li>✅ Job Portal (C-E-O-C)</li>
                        <li>✅ GCC API</li>
                        <li>✅ YORDY Showcase</li>
                        <li>✅ Alle TTT Apps</li>
                    </ul>
                    <p style="margin-top: 15px; font-size: 0.9em;">
                        <strong>Status:</strong> Alle Services vollständig über TPGA integriert
                    </p>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(56, 189, 248, 0.1));">
                <h3>🎯 TPGA Use Cases</h3>
                <div style="margin-top: 20px;">
                    <div style="margin-bottom: 20px;">
                        <strong>1. User meldet sich an:</strong>
                        <ul style="margin-top: 8px; text-align: left;">
                            <li>User öffnet Together Systems Portal</li>
                            <li>Login über TPGA SSO</li>
                            <li>Automatischer Zugang zu: Telbank, Startup Systems, Investor Portal, Job Portal</li>
                        </ul>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <strong>2. Cross-Service Datenzugriff:</strong>
                        <ul style="margin-top: 8px; text-align: left;">
                            <li>User erstellt Startup in Together Systems</li>
                            <li>Automatisch verfügbar in Startup Systems Portal</li>
                            <li>Automatisch verlinkt mit Investor Portal</li>
                            <li>Finanzdaten synchronisiert mit Telbank</li>
                        </ul>
                    </div>
                    <div>
                        <strong>3. Service-Integration:</strong>
                        <ul style="margin-top: 8px; text-align: left;">
                            <li>Investor nutzt Investor Portal für Berechnungen</li>
                            <li>Ergebnisse automatisch in Telbank für Investment-Planung</li>
                            <li>Job-Portal zeigt C-E-O-C Status basierend auf Investor-Status</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px;">
                <h3>📚 Vollständige Dokumentation</h3>
                <p>
                    Für detaillierte technische Informationen siehe: <strong>TPGA-VOLLSTÄNDIGE-DOKUMENTATION.md</strong>
                </p>
                <p style="margin-top: 15px;">
                    <strong>Status:</strong> ✅ Kernfunktionen implementiert | 🚧 Erweiterte Features in Entwicklung
                </p>
            </div>
        </div>

        <!-- New Features Section -->
        <div id="new-features" class="section">
            <h2>🆕 Neue Features</h2>

            <div class="info-box" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2)); border: 2px solid var(--ttt-color);">
                <h3 style="color: var(--ttt-color);">🎁 OSTOSOS - Global Free Internet ⭐ NEU!</h3>
                <p><strong>International TTT Global Free Internet</strong></p>
                <p><strong>WAS DU WILLST | WO DU WILLST | WIE DU WILLST</strong></p>
                <ul style="margin-top: 15px; text-align: left;">
                    <li>✅ KEINE USER-BEZOGENEN DATEN</li>
                    <li>✅ ALLE DATEN BLEIBEN USER EIGENTUM</li>
                    <li>✅ EIGENTUMSBEWEIS NACHWEIS IM PAKET INKLUSIVE</li>
                    <li>✅ ANONYMIESIERTE VERIFIZIERUNG</li>
                    <li>⚡ SOLANGE DER VORRAT REICHT</li>
                </ul>
                <p style="margin-top: 15px;"><strong>OS VON OSTOSOS DREI TTT VON T,.</strong></p>
            </div>

            <div class="grid" style="margin-top: 30px;">
                <div class="card" style="border: 2px solid var(--ttt-color);">
                    <h3>🎬 OSTOS ∞ Branding Universe ⭐ NEU!</h3>
                    <p><strong>Special für Investoren & Sponsoren</strong></p>
                    <ul class="feature-list">
                        <li>✨ Branding Lab - Logo-Upload</li>
                        <li>💰 GoFundMe Integration</li>
                        <li>🏢 Sponsor-Integration</li>
                        <li>📈 Umsatz-Tracking</li>
                    </ul>
                    <p style="margin-top: 15px; font-size: 0.9em;">
                        <strong>Vorteile:</strong> Ohne Investition, nur durch Überzeugung. Finanzielle Mittel gehen nicht aus.
                    </p>
                </div>

                <div class="card" style="border: 2px solid var(--secondary-color);">
                    <h3>📧 Microsoft Account Erklärung ⭐ NEU!</h3>
                    <p><strong>Super Simpele Uitleg</strong></p>
                    <ul class="feature-list">
                        <li>📱 Android & Microsoft</li>
                        <li>🎨 Logo-Upload verfügbar</li>
                        <li>⚡ Vollständig offline</li>
                        <li>✅ Keine Installation erforderlich</li>
                    </ul>
                    <p style="margin-top: 15px; font-size: 0.9em;">
                        <strong>Gratis Microsoft-account</strong> - Schritt-für-Schritt Anleitung
                    </p>
                </div>

                <div class="card" style="border: 2px solid var(--accent-color);">
                    <h3>⚠️ Forum für Fehler & Probleme ⭐ NEU!</h3>
                    <p><strong>Zentrales Support-Forum</strong></p>
                    <ul class="feature-list">
                        <li>📝 Thread-Erstellung</li>
                        <li>📸 Medien-Upload (Screenshots, Videos)</li>
                        <li>🔄 Schritt-für-Schritt Reproduktion</li>
                        <li>🌐 Online: <a href="https://tel1.boards.net/" target="_blank" style="color: var(--accent-color);">tel1.boards.net</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Telbank Section -->
        <div id="telbank" class="section">
            <h2>💰 TELBANK - Vollständige Dokumentation</h2>

            <div class="info-box">
                <h3>🏦 TELBANK Komponenten</h3>
                <p>
                    TELBANK ist das Finanzsystem von <strong>TTT (Three T) - Together Systems · Telbank · T-Systems GPA</strong>.
                    Es kombiniert traditionelle Banking-Funktionen mit Blockchain-Technologie und MetaMask-Integration.
                </p>
            </div>

            <div class="grid">
                <div class="card" style="border: 2px solid #FFD700;">
                    <h3>💰 Telbank (Hauptsystem)</h3>
                    <ul class="feature-list">
                        <li>🔗 MetaMask Wallet-Integration</li>
                        <li>💶 Fiat & Crypto Transaktionen</li>
                        <li>📊 Inflow/Outflow Management</li>
                        <li>⚡ Real-time Balance Tracking</li>
                        <li>🔐 Multi-Signature Wallets</li>
                        <li>📈 Transaction History</li>
                    </ul>
                </div>

                <div class="card" style="border: 2px solid #38bdf8;">
                    <h3>💰 TELBANK Pool</h3>
                    <ul class="feature-list">
                        <li>💧 Gemeinsamer Liquiditäts-Pool</li>
                        <li>🤝 Risk-Sharing Mechanismen</li>
                        <li>📊 Kollektive Investitionen</li>
                        <li>💰 Profit-Sharing System</li>
                        <li>📈 Pool-Balance Tracking</li>
                        <li>🔄 Automatische Verteilung</li>
                    </ul>
                </div>

                <div class="card" style="border: 2px solid #a855f7;">
                    <h3>💎 TELADIA</h3>
                    <ul class="feature-list">
                        <li>⭐ Premium Banking Service</li>
                        <li>🏢 Erweiterte Business-Tools</li>
                        <li>📊 Advanced Analytics</li>
                        <li>📈 Enterprise-Features</li>
                        <li>🔐 Enhanced Security</li>
                        <li>🌐 Global Multi-Currency</li>
                    </ul>
                </div>

                <div class="card" style="border: 2px solid var(--secondary-color);">
                    <h3>🔧 Technische Features</h3>
                    <ul class="feature-list">
                        <li>🔗 MetaMask Connection</li>
                        <li>🌐 Multi-Chain Support (Ethereum, Polygon)</li>
                        <li>💱 Automatic Conversion (Crypto ↔ Fiat)</li>
                        <li>📱 Mobile Wallet Support</li>
                        <li>🔐 2FA Authentication</li>
                        <li>📜 Audit-Trail</li>
                    </ul>
                </div>

                <div class="card" style="border: 2px solid var(--primary-color);">
                    <h3>💼 Business-Features</h3>
                    <ul class="feature-list">
                        <li>📊 Investment-Portal</li>
                        <li>💼 Portfolio-Management</li>
                        <li>💰 Cash-Flow-Tracking</li>
                        <li>📈 Growth-Analytics</li>
                        <li>🏢 B2B-Integration</li>
                        <li>📄 Invoice-Management</li>
                    </ul>
                </div>

                <div class="card" style="border: 2px solid var(--accent-color);">
                    <h3>🌐 Integration</h3>
                    <ul class="feature-list">
                        <li>🔗 TogetherSystems Portal</li>
                        <li>🚀 Startup Systems</li>
                        <li>💰 Investor Portal</li>
                        <li>📊 Business-Admin</li>
                        <li>🔐 TPGA (Three T Platform Global Architecture)</li>
                        <li>🌐 One Network Integration</li>
                    </ul>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px; background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(139, 92, 246, 0.1));">
                <h3>📚 Vollständige Dokumentation</h3>
                <p>
                    Für detaillierte Informationen siehe: <strong>TELBANK-VOLLSTÄNDIGE-DOKUMENTATION.md</strong>
                </p>
                <p style="margin-top: 15px;">
                    <strong>Status:</strong> ✅ Grundfunktionen verfügbar | 🚧 Erweiterte Features in Entwicklung
                </p>
                <p style="margin-top: 10px;">
                    <strong>Portal:</strong> <a href="https://myopenai.github.io/togethersystems/index.html" target="_blank" style="color: #FFD700;">TogetherSystems Portal</a>
                </p>
            </div>
        </div>

        <!-- Migration Section -->
        <div id="migration" class="section">
            <h2>🚀 Migration</h2>

            <div class="migration-status">
                <h3>📋 Migrations-Status</h3>
                <p><strong>Status:</strong> 🚧 Vorbereitung</p>
                <p><strong>Geplant:</strong> Bei Eintreten der ersten Startups zur Beteiligung und Kooperation</p>
                <p><strong>Ziel:</strong> Vollständige Migration von TogetherSystems.com ins Startup Systems Portal</p>
            </div>

            <div class="grid">
                <div class="card">
                    <h3>Phase 1: Vorbereitung</h3>
                    <ul class="feature-list">
                        <li>✅ Ordner-Struktur erstellt</li>
                        <li>✅ Portal-Template vorbereitet</li>
                        <li>✅ Dokumentation erstellt</li>
                        <li>🚧 Integration geplant</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>Phase 2: Integration</h3>
                    <ul class="feature-list">
                        <li>🚧 Startup Systems Integration</li>
                        <li>🚧 Investor-Portal Verknüpfung</li>
                        <li>🚧 API-Integration</li>
                        <li>🚧 Database-Migration</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>Phase 3: Launch</h3>
                    <ul class="feature-list">
                        <li>📋 Erste Startups begrüßen</li>
                        <li>📋 Beteiligung aktivieren</li>
                        <li>📋 Kooperation starten</li>
                        <li>📋 Vollständige Migration</li>
                    </ul>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px;">
                <h3>Migrations-Ziele</h3>
                <ul class="feature-list">
                    <li>Alle beteiligten Personen präsentieren</li>
                    <li>Alle Investoren dokumentieren</li>
                    <li>Alle Visionen zusammenbringen</li>
                    <li>GitHub MyOpenAI Integration</li>
                </ul>
            </div>
        </div>

        <!-- GitHub Section -->
        <div id="github" class="section">
            <h2>🔗 GitHub Integration</h2>

            <div class="info-box">
                <h3>Repository</h3>
                <p>
                    <strong>URL:</strong> 
                    <a href="https://github.com/Myopenai/startupsystems" target="_blank" class="link">
                        https://github.com/Myopenai/startupsystems
                    </a>
                </p>
                <p><strong>Profil:</strong> MyOpenAI</p>
                <p><strong>Organisation:</strong> TogetherSystems</p>
            </div>

            <div class="grid">
                <div class="card">
                    <h3>Projekte</h3>
                    <ul class="feature-list">
                        <li>Startup Systems Portal</li>
                        <li>Investor Portal</li>
                        <li>GCC Integration</li>
                        <li>TogetherSystems Portal</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>Zukünftige Präsentation</h3>
                    <ul class="feature-list">
                        <li>Alle beteiligten Personen</li>
                        <li>Alle Investoren</li>
                        <li>Alle Visionen zusammen</li>
                        <li>Komplette Dokumentation</li>
                    </ul>
                </div>
            </div>

            <div class="code-block" style="margin-top: 30px;">
                <strong>GitHub Features:</strong><br>
                - Vollständige Code-Basis<br>
                - Dokumentation<br>
                - Issue-Tracking<br>
                - Versionierung<br>
                - Collaboration
            </div>
        </div>
    </div>

    <script>
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all nav buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Show selected section
            document.getElementById(sectionId).classList.add('active');

            // Add active class to clicked button
            event.target.classList.add('active');
        }
    </script>
</body>
</html>



`;
