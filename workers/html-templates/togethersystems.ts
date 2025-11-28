/**
 * Auto-generated HTML template
 * Source: public/togethersystems/portal.html
 * Generated: 2025-11-28T13:08:43.692Z
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
            <a href="#" class="nav-btn" onclick="showSection('architecture')">Systemarchitektur</a>
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
