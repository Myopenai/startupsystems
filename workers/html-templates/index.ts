/**
 * Auto-generated HTML template
 * Source: public/index.html
 * Generated: 2025-11-28T13:44:11.043Z
 */

export const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Startup Systems - Welcome</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background: linear-gradient(135deg, #0a0a0f 0%, #050508 100%);
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            width: 100%;
            text-align: center;
        }

        h1 {
            font-size: clamp(2rem, 6vw, 4rem);
            margin-bottom: 20px;
            background: linear-gradient(135deg, #00ff88, #00d9ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .subtitle {
            font-size: clamp(1rem, 2vw, 1.5rem);
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 60px;
        }

        .nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .nav-card {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 217, 255, 0.1));
            border: 2px solid rgba(0, 255, 136, 0.3);
            border-radius: 16px;
            padding: 30px;
            text-decoration: none;
            color: #ffffff;
            transition: all 0.3s ease;
            display: block;
        }

        .nav-card:hover {
            border-color: #00ff88;
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(0, 255, 136, 0.3);
        }

        .nav-card.featured {
            border-color: #38bdf8;
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(168, 85, 247, 0.2));
        }

        .nav-card.featured:hover {
            border-color: #38bdf8;
            box-shadow: 0 10px 40px rgba(56, 189, 248, 0.4);
        }

        .nav-card h2 {
            color: #00ff88;
            margin-bottom: 10px;
            font-size: 1.5rem;
        }

        .nav-card.featured h2 {
            color: #38bdf8;
        }

        .nav-card p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }

        .featured-badge {
            display: inline-block;
            background: linear-gradient(135deg, #00ff88, #00d9ff);
            color: #0a0a0f;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 20px;
        }

        .job-featured {
            grid-column: 1 / -1;
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(168, 85, 247, 0.15));
            border: 3px solid #38bdf8;
            box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
        }

        /* Welcome Modal */
        .welcome-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            z-index: 10000;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.5s ease-in;
        }

        .welcome-modal.active {
            display: flex;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .welcome-content {
            background: linear-gradient(135deg, #0a0a0f 0%, #050508 100%);
            border: 3px solid #00ff88;
            border-radius: 24px;
            padding: 40px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 255, 136, 0.3), 0 0 100px rgba(0, 255, 136, 0.2);
            animation: slideUp 0.6s ease-out;
            position: relative;
        }

        .welcome-content::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            background: linear-gradient(135deg, #00ff88, #00d9ff, #a855f7, #38bdf8);
            border-radius: 24px;
            z-index: -1;
            opacity: 0.5;
            animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .welcome-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .welcome-title {
            font-size: clamp(2rem, 5vw, 3.5rem);
            background: linear-gradient(135deg, #00ff88, #00d9ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .welcome-subtitle {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            color: rgba(255, 255, 255, 0.9);
            margin-top: 10px;
        }

        .welcome-family {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
            flex-wrap: wrap;
        }

        .family-badge {
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1.1rem;
        }

        .family-badge.startup {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 217, 255, 0.2));
            border: 2px solid #00ff88;
            color: #00ff88;
        }

        .family-badge.together {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(56, 189, 248, 0.2));
            border: 2px solid #a855f7;
            color: #a855f7;
        }

        .welcome-message {
            background: rgba(255, 255, 255, 0.05);
            border-left: 4px solid #00ff88;
            padding: 20px;
            border-radius: 12px;
            margin: 25px 0;
            line-height: 1.8;
            font-size: 1.05rem;
        }

        .welcome-message h3 {
            color: #00ff88;
            margin-bottom: 15px;
            font-size: 1.3rem;
        }

        .welcome-philosophy {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(168, 85, 247, 0.1));
            border: 2px solid rgba(0, 255, 136, 0.3);
            padding: 20px;
            border-radius: 12px;
            margin: 25px 0;
            font-style: italic;
            text-align: center;
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.95);
        }

        .welcome-choices {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 30px 0;
        }

        .welcome-choice-btn {
            padding: 18px 24px;
            border-radius: 12px;
            border: 2px solid;
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }

        .welcome-choice-btn.startup {
            border-color: #00ff88;
        }

        .welcome-choice-btn.startup:hover {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 217, 255, 0.2));
            border-color: #00ff88;
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        }

        .welcome-choice-btn.together {
            border-color: #a855f7;
        }

        .welcome-choice-btn.together:hover {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(56, 189, 248, 0.2));
            border-color: #a855f7;
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
        }

        .welcome-choice-btn.both {
            border-color: #38bdf8;
            grid-column: 1 / -1;
        }

        .welcome-choice-btn.both:hover {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(168, 85, 247, 0.2), rgba(56, 189, 248, 0.2));
            border-color: #38bdf8;
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);
        }

        .welcome-signature {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
        }

        .ceoc-explanation {
            background: rgba(0, 255, 136, 0.05);
            border: 2px solid rgba(0, 255, 136, 0.3);
            padding: 15px;
            border-radius: 10px;
            margin: 15px 0;
            font-size: 0.95rem;
        }

        .ceoc-explanation strong {
            color: #00ff88;
        }

        /* TPGA Core Banner Styles */
        .tpga-core-banner {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(56, 189, 248, 0.15));
            border: 3px solid #8b5cf6;
            border-radius: 20px;
            padding: 30px;
            margin: 40px 0;
            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(56, 189, 248, 0.2);
            position: relative;
            overflow: hidden;
        }

        .tpga-core-banner::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            background: linear-gradient(135deg, #8b5cf6, #38bdf8, #a855f7, #00ff88);
            border-radius: 20px;
            z-index: -1;
            opacity: 0.4;
            animation: rotate 8s linear infinite;
        }

        .tpga-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .tpga-header h2 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            background: linear-gradient(135deg, #8b5cf6, #38bdf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
        }

        .tpga-badge {
            background: linear-gradient(135deg, #8b5cf6, #38bdf8);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }

        .tpga-content {
            position: relative;
            z-index: 1;
        }

        .tpga-intro {
            font-size: 1.1rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 25px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-left: 4px solid #8b5cf6;
            border-radius: 10px;
        }

        .tpga-intro strong {
            color: #8b5cf6;
        }

        .tpga-features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }

        .tpga-feature-card {
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(139, 92, 246, 0.3);
            border-radius: 12px;
            padding: 20px;
            transition: all 0.3s ease;
        }

        .tpga-feature-card:hover {
            border-color: #8b5cf6;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        }

        .tpga-feature-card h3 {
            color: #8b5cf6;
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .tpga-feature-card p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .tpga-ttt-systems {
            margin-top: 30px;
            padding: 20px;
            background: rgba(0, 255, 136, 0.05);
            border: 2px solid rgba(0, 255, 136, 0.3);
            border-radius: 12px;
        }

        .tpga-ttt-systems h3 {
            color: #00ff88;
            margin-bottom: 15px;
            font-size: 1.3rem;
        }

        .ttt-systems-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .ttt-system-item {
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
        }

        .ttt-system-item strong {
            color: #00ff88;
        }

        .tpga-docs-link {
            margin-top: 25px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            text-align: center;
        }

        .tpga-docs-link p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
        }

        .tpga-link {
            color: #38bdf8;
            text-decoration: underline;
            transition: color 0.3s ease;
        }

        .tpga-link:hover {
            color: #00ff88;
        }

        .tpga-details-section {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(56, 189, 248, 0.1));
            border: 2px solid rgba(139, 92, 246, 0.3);
            border-radius: 16px;
            padding: 30px;
            margin: 30px 0;
            animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .tpga-details-section h3 {
            color: #8b5cf6;
            margin-bottom: 20px;
            font-size: 1.5rem;
        }

        .tpga-details-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .tpga-detail-card {
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(139, 92, 246, 0.2);
            border-radius: 12px;
            padding: 20px;
        }

        .tpga-detail-card h4 {
            color: #38bdf8;
            margin-bottom: 15px;
            font-size: 1.2rem;
        }

        .tpga-detail-card ul, .tpga-detail-card ol {
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.8;
            padding-left: 20px;
        }

        .tpga-detail-card li {
            margin-bottom: 8px;
        }

        .tpga-detail-card strong {
            color: #8b5cf6;
        }

        .tpga-toggle-btn {
            background: linear-gradient(135deg, #8b5cf6, #38bdf8);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: block;
            margin: 20px auto 0;
        }

        .tpga-toggle-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        }
    </style>
</head>
<body>
    <!-- Welcome Modal -->
    <div id="welcomeModal" class="welcome-modal active">
        <div class="welcome-content">
            <div class="welcome-header">
                <h1 class="welcome-title">Willkommen</h1>
                <div class="welcome-family">
                    <span class="family-badge startup">🚀 Startup Systems</span>
                    <span class="family-badge together">🌐 Together Systems</span>
                </div>
                <p class="welcome-subtitle">Eine Familie zusammen</p>
            </div>

            <div class="welcome-message">
                <h3>🎯 Unser Zielkern</h3>
                <p>
                    Unser Betriebsunternehmen hat ein klares Ziel: <strong>Probleme zu erkennen</strong>, 
                    daraufhin <strong>Formeln zu erstellen</strong> und mit diesen Formeln <strong>AI zu bedienen</strong>, 
                    um <strong>Programme zu erstellen</strong>, die diese Probleme lösen.
                </p>
                <p style="margin-top: 15px;">
                    <strong>Einfache Probleme, alltägliche Probleme</strong> – überall umgeben sie uns. 
                    Viele denken nicht darüber nach. Aber wir tun es.
                </p>
            </div>

            <div class="ceoc-explanation">
                <strong>C-E-O-C: Center Edge of Circle</strong> sind Problemerkenner. 
                Sie können aus einfachen, alltäglichen Problemen leichte Formulierungen erstellen, 
                die als <strong>Formel</strong> dienen können, um AI zu bedienen, durch Programme 
                die Probleme zu lösen. <strong>Einfache Ideen</strong> kommen zusammen in der 
                Findung von Lösungen für alltäglich uns umgebende Probleme.
            </div>

            <div class="welcome-philosophy">
                <p>
                    <strong>"AI ist der Mensch, der bessere Antworten gibt, als jede AI in Zukunft geben kann."</strong>
                </p>
                <p style="margin-top: 15px; font-size: 0.95rem;">
                    Darum sind die Problemfinder, Problemlöser, die Menschen, die Formeln entwickeln, 
                    auf der einfachsten Weise – <strong>mit Zahlen oder mit Worten</strong>. 
                    Wir spielen am liebsten mit Worten, daraus ergeben sich Zahlen, 
                    in dem man bedenken kann, wie viele Buchstaben jedes Wort gehabt hat, 
                    in dem ganzen Sinn. So geht man vor – <strong>logisch, in der Programmierung durch AI zu befüttern mit Problemen</strong>.
                </p>
            </div>

            <div class="welcome-message">
                <h3>🎯 Wofür interessierst du dich?</h3>
                <p>Wähle eine Option oder beide – du entscheidest:</p>
            </div>

            <div class="welcome-choices">
                <button class="welcome-choice-btn startup" onclick="selectChoice('startup')">
                    🚀 Startup Systems
                </button>
                <button class="welcome-choice-btn together" onclick="selectChoice('together')">
                    🌐 Together Systems
                </button>
                <button class="welcome-choice-btn both" onclick="selectChoice('both')">
                    🚀🌐 Beide – Eine Familie zusammen
                </button>
            </div>

            <div class="welcome-signature">
                <p>
                    <strong>An Interessierte ein herzliches Willkommen</strong><br>
                    vom Inventor des myOpenAI Systems
                </p>
                <p style="margin-top: 10px; font-size: 0.85rem; opacity: 0.7;">
                    Vielen Dank für dein Interesse! ✨
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <h1>Startup Systems</h1>
        <p class="subtitle">Modern infrastructure for startups and innovation</p>

        <!-- TPGA Core Info Banner - PROMINENT -->
        <div class="tpga-core-banner">
            <div class="tpga-header">
                <h2>🔐 TPGA - Der Kern unserer Architektur</h2>
                <span class="tpga-badge">CORE & KERNEL</span>
            </div>
            <div class="tpga-content">
                <div class="tpga-main-info">
                    <p class="tpga-intro">
                        <strong>TPGA (Three T Platform Global Architecture)</strong> ist das fundamentale Architektur-System 
                        von <strong>TTT (Three T)</strong> - Together Systems · Telbank · T-Systems GPA. 
                        Es bildet die <strong>Grundlage für alle TTT-Services</strong> und ermöglicht nahtlose Integration 
                        zwischen allen Komponenten.
                    </p>
                    
                    <div class="tpga-features-grid">
                        <div class="tpga-feature-card">
                            <h3>🔑 Unified Account System</h3>
                            <p>Ein Account für alle TTT Services • Single User Identity • Zentrales Profil-Management • Cross-Platform Sync</p>
                        </div>
                        <div class="tpga-feature-card">
                            <h3>🔐 Single Sign-On (SSO)</h3>
                            <p>Ein Login für alle TTT-Services • JWT-basiert • OAuth 2.0 • Multi-Device Support</p>
                        </div>
                        <div class="tpga-feature-card">
                            <h3>🔄 Cross-Platform Integration</h3>
                            <p>Together Systems ↔ Telbank ↔ T-Systems GPA • Shared Database • Unified REST API • Real-time Sync</p>
                        </div>
                        <div class="tpga-feature-card">
                            <h3>🌐 Global Platform Architecture</h3>
                            <p>Cloudflare Edge Network (200+ Datenzentren) • Edge Computing • Auto-Scaling • Sub-50ms Response Times</p>
                        </div>
                    </div>

                    <div class="tpga-ttt-systems">
                        <h3>🏗️ Three T (TTT) Kern-Systeme über TPGA:</h3>
                        <div class="ttt-systems-list">
                            <div class="ttt-system-item">
                                <strong>🌐 Together Systems:</strong> Zentrale Plattform, User-Management, Manifest-System
                            </div>
                            <div class="ttt-system-item">
                                <strong>💰 Telbank:</strong> Finanzsystem, MetaMask, Crypto/Fiat, TELBANK Pool
                            </div>
                            <div class="ttt-system-item">
                                <strong>🔐 T-Systems GPA:</strong> System-Orchestrierung, API-Gateway, Global Network
                            </div>
                        </div>
                    </div>

                    <div class="tpga-docs-link">
                        <p>
                            📚 <strong>Vollständige Dokumentation:</strong> 
                            <a href="#tpga-details" onclick="showTPGADetails()" class="tpga-link">TPGA-Details anzeigen</a> | 
                            <a href="/togethersystems/#tpga" class="tpga-link">Im TogetherSystems Portal</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- TPGA Details Section (expandable) -->
        <div id="tpga-details" class="tpga-details-section" style="display: none;">
            <h3>📖 Vollständige TPGA-Informationen</h3>
            <div class="tpga-details-content">
                <div class="tpga-detail-card">
                    <h4>🎯 Use Cases</h4>
                    <ul>
                        <li><strong>User meldet sich an:</strong> Ein Login über TPGA SSO → Automatischer Zugang zu Telbank, Startup Systems, Investor Portal, Job Portal</li>
                        <li><strong>Cross-Service Datenzugriff:</strong> Startup in Together Systems erstellen → Automatisch verfügbar in Startup Systems Portal → Verlinkt mit Investor Portal → Finanzdaten synchronisiert mit Telbank</li>
                        <li><strong>Service-Integration:</strong> Investor nutzt Investor Portal → Ergebnisse automatisch in Telbank → Job-Portal zeigt C-E-O-C Status</li>
                    </ul>
                </div>
                
                <div class="tpga-detail-card">
                    <h4>🔧 Technische Architektur</h4>
                    <p><strong>Layer-Struktur:</strong></p>
                    <ol>
                        <li><strong>User Interface Layer:</strong> HTML/CSS/JS Frontend</li>
                        <li><strong>Application Layer:</strong> Portale (Together Systems, Startup Systems, Investor, Job, Telbank)</li>
                        <li><strong>TPGA Core Layer:</strong> SSO Authentication, Unified Account System, Cross-Platform Communication</li>
                        <li><strong>API Gateway Layer:</strong> Hono Framework, Route Management, Middleware</li>
                        <li><strong>Service Layer:</strong> Together Systems API, Telbank API, Investor API, Jobs API, GCC API</li>
                        <li><strong>Data Layer:</strong> Cloudflare D1 (SQLite), Unified Schema, Real-time Sync</li>
                    </ol>
                </div>

                <div class="tpga-detail-card">
                    <h4>📊 Service-Integration Status</h4>
                    <ul>
                        <li>✅ Together Systems Portal</li>
                        <li>✅ Startup Systems</li>
                        <li>✅ Investor Portal</li>
                        <li>✅ Job Portal (C-E-O-C)</li>
                        <li>✅ GCC API</li>
                        <li>✅ YORDY Showcase</li>
                        <li>✅ Alle TTT Apps</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>Status:</strong> Alle Services vollständig über TPGA integriert</p>
                </div>

                <div class="tpga-detail-card">
                    <h4>🔐 Sicherheit</h4>
                    <ul>
                        <li>JWT-basierte SSO Authentifizierung</li>
                        <li>Multi-Factor Authentication (MFA)</li>
                        <li>Role-Based Access Control (RBAC)</li>
                        <li>End-to-End Encryption</li>
                        <li>Secure Data Transmission (TLS 1.3)</li>
                        <li>DDoS Protection (automatisch durch Cloudflare)</li>
                    </ul>
                </div>
            </div>
            <button onclick="hideTPGADetails()" class="tpga-toggle-btn">Details ausblenden</button>
        </div>

        <!-- Navigation Grid -->
        <div class="nav-grid">
            <!-- PROMINENT: TTT Job Portal -->
            <a href="/job/" class="nav-card featured job-featured">
                <h2>💼 TTT Job Portal</h2>
                <p><strong>Global Universal Space License • C-E-O-C</strong></p>
                <p style="margin-top: 8px; font-size: 0.85rem; color: rgba(255, 255, 255, 0.8);">
                    Aus Problemen werden Formeln. Aus Formeln wird Eigentum.<br>
                    Center Edge of Circle - Bestimmend über alle Prozesse, Produkte, Kapazität.
                </p>
                <p style="margin-top: 12px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #38bdf8;">
                    🔴 AKTIVE KAMPAGNE • GLOBAL & KULTURÜBERGREIFEND
                </p>
            </a>

            <a href="/investor/" class="nav-card">
                <h2>💰 Investor Portal</h2>
                <p>Z-Canvas Kapitalformeln & Berechnungen</p>
            </a>

            <a href="/api" class="nav-card">
                <h2>🔌 API</h2>
                <p>Startup Systems API Endpoints</p>
            </a>

            <a href="/api/gcc" class="nav-card">
                <h2>🚂 GCC Portal</h2>
                <p>Global Central City Arrivals</p>
            </a>

            <a href="/togethersystems/" class="nav-card">
                <h2>🌐 TogetherSystems</h2>
                <p>TTT Portal & Migration</p>
            </a>

            <a href="/YORDY-SHOWCASE-SIMPLE.html" class="nav-card">
                <h2>🎨 YORDY Showcase</h2>
                <p>MicroLED Quality Artist Presentation</p>
            </a>
        </div>
    </div>

    <script>
        // Welcome Modal Logic
        function selectChoice(choice) {
            // Save choice in localStorage
            localStorage.setItem('startupSystemsChoice', choice);
            
            // Track choice (optional analytics)
            console.log('User selected:', choice);
            
            // Close modal with animation
            const modal = document.getElementById('welcomeModal');
            modal.style.animation = 'fadeOut 0.3s ease-out';
            
            setTimeout(() => {
                modal.classList.remove('active');
                
                // Optional: Highlight selected choice on page
                if (choice === 'startup') {
                    // Focus on Startup Systems content
                    document.querySelector('.container')?.scrollIntoView({ behavior: 'smooth' });
                } else if (choice === 'together') {
                    // Navigate to TogetherSystems or highlight
                    const togetherLink = document.querySelector('a[href="/togethersystems/"]');
                    if (togetherLink) {
                        togetherLink.style.animation = 'pulse 1s ease-in-out 3';
                    }
                } else if (choice === 'both') {
                    // Show all content normally
                }
            }, 300);
        }

        // Check if user already made a choice
        window.addEventListener('DOMContentLoaded', () => {
            const savedChoice = localStorage.getItem('startupSystemsChoice');
            if (savedChoice) {
                // Don't show modal again if user already chose
                const modal = document.getElementById('welcomeModal');
                modal.classList.remove('active');
            }
        });

        // Close modal on outside click
        document.getElementById('welcomeModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'welcomeModal') {
                selectChoice('both'); // Default to both if clicked outside
            }
        });

        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); }
            }
        \`;
        document.head.appendChild(style);

        // TPGA Details Toggle Functions
        function showTPGADetails() {
            const detailsSection = document.getElementById('tpga-details');
            if (detailsSection) {
                detailsSection.style.display = 'block';
                detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function hideTPGADetails() {
            const detailsSection = document.getElementById('tpga-details');
            if (detailsSection) {
                detailsSection.style.display = 'none';
            }
        }

        // Smooth scroll to anchor if hash present
        window.addEventListener('DOMContentLoaded', () => {
            if (window.location.hash === '#tpga-details') {
                setTimeout(() => {
                    showTPGADetails();
                }, 500);
            }
        });
    </script>
</body>
</html>
`;
