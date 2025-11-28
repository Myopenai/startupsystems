/**
 * Auto-generated HTML template
 * Source: public/job/index.html
 * Generated: 2025-11-28T13:28:21.804Z
 */

export const jobHTML = `<!DOCTYPE html>
<!-- TTT Global Universal Space License Job Portal - Integriert in Startup Systems -->
<html lang="de">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>TTT – Global Universal Space License | Startup Systems Job Portal</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --bg: #020617;
      --bg-soft: rgba(15, 23, 42, 0.85);
      --accent: #38bdf8;
      --accent-2: #a855f7;
      --accent-3: #f97316;
      --text: #e5e7eb;
      --muted: #9ca3af;
      --border: rgba(148, 163, 184, 0.4);
      --card-radius: 22px;
      --shadow-soft: 0 20px 60px rgba(15, 23, 42, 0.85);
      --startup-systems-color: #00ff88;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
      background: radial-gradient(circle at top, #1d263b 0, #020617 45%, #000000 100%);
      color: var(--text);
      overflow-x: hidden;
    }

    /* Background micro-LED grid */
    .microgrid {
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image: radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.12) 1px, transparent 0);
      background-size: 24px 24px;
      opacity: 0.38;
      mix-blend-mode: screen;
      z-index: -3;
    }

    /* Moving light beams */
    .beams {
      position: fixed;
      inset: -20%;
      pointer-events: none;
      background:
        conic-gradient(from 210deg at 10% 0%, rgba(56, 189, 248, 0.16), transparent 45%, rgba(168, 85, 247, 0.2), transparent),
        conic-gradient(from 40deg at 90% 100%, rgba(249, 115, 22, 0.2), transparent 50%, rgba(0, 255, 136, 0.16), transparent);
      filter: blur(40px);
      opacity: 0.7;
      animation: beamsMove 26s linear infinite alternate;
      z-index: -2;
    }

    @keyframes beamsMove {
      0% { transform: translate3d(-3%, 3%, 0) scale(1.1); }
      50% { transform: translate3d(3%, -2%, 0) scale(1.05); }
      100% { transform: translate3d(-1%, 2%, 0) scale(1.15); }
    }

    /* Floating particles */
    .particles {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: -1;
      opacity: 0.7;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 999px;
      background: radial-gradient(circle, #fff, rgba(255, 255, 255, 0));
      box-shadow: 0 0 18px rgba(248, 250, 252, 0.9);
      animation: float 18s linear infinite;
    }

    @keyframes float {
      0% { transform: translate3d(-10vw, 110vh, 0); opacity: 0; }
      15% { opacity: 1; }
      100% { transform: translate3d(110vw, -10vh, 0); opacity: 0; }
    }

    .page {
      position: relative;
      min-height: 100vh;
      padding: 32px 16px 80px;
    }

    @media (min-width: 768px) {
      .page { padding: 40px 40px 96px; }
    }

    @media (min-width: 1200px) {
      .page { padding: 48px 72px 104px; }
    }

    .shell {
      max-width: 1120px;
      margin: 0 auto;
      backdrop-filter: blur(26px);
    }

    /* Top nav */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      gap: 16px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-mark {
      width: 32px;
      height: 32px;
      border-radius: 14px;
      background: conic-gradient(from 210deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent));
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 18px rgba(56, 189, 248, 0.6), 0 0 36px rgba(168, 85, 247, 0.3);
    }

    .logo-text-main {
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text);
    }

    .logo-text-sub {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--muted);
    }

    .nav-links {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .nav-link {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid transparent;
      transition: all 0.25s ease;
      backdrop-filter: blur(20px);
    }

    .nav-link:hover {
      color: var(--text);
      border-color: rgba(148, 163, 184, 0.6);
      background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 60%);
    }

    /* Startup Systems Integration Badge */
    .startup-systems-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      border-radius: 999px;
      background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 217, 255, 0.2));
      border: 1px solid var(--startup-systems-color);
      color: var(--startup-systems-color);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      margin-left: 12px;
    }

    /* Hero */
    .hero {
      margin-top: 18px;
      margin-bottom: 40px;
      display: grid;
      gap: 24px;
    }

    @media (min-width: 900px) {
      .hero {
        grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
        align-items: center;
        gap: 40px;
      }
    }

    .hero-main {
      padding: 26px 24px;
      border-radius: 26px;
      border: 1px solid rgba(148, 163, 184, 0.55);
      background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 58%),
                  radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.22), transparent 60%),
                  radial-gradient(circle at center, rgba(0, 255, 136, 0.1), transparent 70%),
                  rgba(15, 23, 42, 0.88);
      box-shadow: var(--shadow-soft);
      position: relative;
      overflow: hidden;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      background: linear-gradient(120deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7));
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--muted);
      position: relative;
      z-index: 1;
    }

    .pill-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: radial-gradient(circle, var(--accent), transparent 70%);
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.7);
    }

    .hero-title {
      font-size: clamp(2.1rem, 3.2vw + 1.4rem, 3.4rem);
      line-height: 1.08;
      margin-top: 18px;
      margin-bottom: 12px;
      background: conic-gradient(from 200deg, #e5e7eb, #e5e7eb, #bae6fd, #c4b5fd, #fed7aa, #e5e7eb);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hero-subtitle {
      font-size: 0.98rem;
      color: var(--muted);
      max-width: 36rem;
      margin-bottom: 18px;
      position: relative;
      z-index: 1;
    }

    .hero-subtitle strong {
      color: #e5e7eb;
      font-weight: 600;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
      position: relative;
      z-index: 1;
    }

    .btn-primary,
    .btn-ghost {
      border-radius: 999px;
      padding: 10px 18px;
      font-size: 0.85rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      border: 1px solid transparent;
      cursor: pointer;
      background: none;
      color: var(--text);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.25s ease;
      text-decoration: none;
    }

    .btn-primary {
      background: linear-gradient(120deg, var(--accent), var(--accent-2), var(--accent-3));
      border-color: rgba(248, 250, 252, 0.5);
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.65), 0 0 40px rgba(15, 23, 42, 0.9);
      color: #020617;
      font-weight: 600;
    }

    .btn-primary:hover {
      transform: translateY(-1px) scale(1.01);
      box-shadow: 0 0 26px rgba(59, 130, 246, 0.75), 0 0 52px rgba(15, 23, 42, 1);
    }

    .btn-ghost {
      border-color: rgba(148, 163, 184, 0.7);
      color: var(--muted);
      background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7));
    }

    .btn-ghost:hover {
      color: var(--text);
      border-color: rgba(148, 163, 184, 0.9);
    }

    /* C-E-O-C Section - NEW */
    .ceoc-section {
      background: radial-gradient(circle at top left, rgba(0, 255, 136, 0.2), transparent 60%),
                  radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.22), transparent 60%),
                  rgba(15, 23, 42, 0.95);
      border: 2px solid var(--startup-systems-color);
      border-radius: var(--card-radius);
      padding: 24px;
      margin: 24px 0;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.3), var(--shadow-soft);
      position: relative;
      overflow: hidden;
    }

    .ceoc-section::before {
      content: "";
      position: absolute;
      inset: -50%;
      background: conic-gradient(from 0deg, transparent, rgba(0, 255, 136, 0.1), transparent, rgba(0, 255, 136, 0.1));
      animation: rotate 20s linear infinite;
      z-index: 0;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .ceoc-title {
      font-size: clamp(1.5rem, 2.5vw + 1rem, 2rem);
      background: linear-gradient(135deg, var(--startup-systems-color), #00d9ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 16px;
      position: relative;
      z-index: 1;
    }

    .ceoc-content {
      position: relative;
      z-index: 1;
    }

    .ceoc-diagram {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 24px 0;
      flex-wrap: wrap;
    }

    .ceoc-circle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 3px solid var(--startup-systems-color);
      background: radial-gradient(circle, rgba(0, 255, 136, 0.1), transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.4);
    }

    .ceoc-center {
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--startup-systems-color);
    }

    .ceoc-edge {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--startup-systems-color);
      box-shadow: 0 0 15px rgba(0, 255, 136, 0.8);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.8; }
    }

    .ceoc-edge:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
    .ceoc-edge:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); }
    .ceoc-edge:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
    .ceoc-edge:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); }

    /* Sections - Original Styles */
    .sections {
      display: flex;
      flex-direction: column;
      gap: 26px;
      margin-top: 18px;
    }

    .section {
      border-radius: var(--card-radius);
      border: 1px solid var(--border);
      background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.16), transparent 60%),
                  radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.22), transparent 60%),
                  rgba(15, 23, 42, 0.92);
      padding: 20px 18px 18px;
      box-shadow: var(--shadow-soft);
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.6s ease, transform 0.6s ease;
      position: relative;
      overflow: hidden;
    }

    .section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .section-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 0.96rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--muted);
    }

    .section-main {
      font-size: 0.92rem;
      color: var(--text);
      position: relative;
      z-index: 1;
    }

    .section-main p + p {
      margin-top: 8px;
    }

    .section-main strong {
      font-weight: 600;
      color: var(--startup-systems-color);
    }

    /* Startup Systems Integration Box */
    .startup-systems-integration {
      background: linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 217, 255, 0.15));
      border: 2px solid var(--startup-systems-color);
      border-radius: 18px;
      padding: 20px;
      margin: 24px 0;
    }

    .startup-systems-integration h3 {
      color: var(--startup-systems-color);
      margin-bottom: 12px;
      font-size: 1.2rem;
    }

    /* Application Form */
    .application-form {
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid var(--border);
      border-radius: var(--card-radius);
      padding: 24px;
      margin-top: 24px;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      margin-bottom: 6px;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--muted);
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: rgba(15, 23, 42, 0.9);
      color: var(--text);
      font-size: 0.9rem;
      font-family: inherit;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      outline: none;
      border-color: var(--startup-systems-color);
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
    }

    .form-group textarea {
      min-height: 120px;
      resize: vertical;
    }

    .checkbox-group {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-top: 8px;
    }

    .checkbox-group input[type="checkbox"] {
      width: auto;
      margin-top: 4px;
    }

    .btn-submit {
      background: linear-gradient(120deg, var(--startup-systems-color), #00d9ff);
      border: none;
      border-radius: 999px;
      padding: 12px 24px;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #020617;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
    }

    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.6);
    }

    .footer {
      margin-top: 24px;
      font-size: 0.78rem;
      color: var(--muted);
      text-align: center;
    }

    .footer span {
      color: var(--startup-systems-color);
    }
  </style>
</head>
<body>
  <div class="microgrid"></div>
  <div class="beams"></div>
  <div class="particles">
    <div class="particle" style="left:5%;  animation-delay:-2s;"></div>
    <div class="particle" style="left:20%; animation-delay:-8s;"></div>
    <div class="particle" style="left:45%; animation-delay:-4s;"></div>
    <div class="particle" style="left:65%; animation-delay:-11s;"></div>
    <div class="particle" style="left:80%; animation-delay:-6s;"></div>
    <div class="particle" style="left:92%; animation-delay:-14s;"></div>
  </div>

  <div class="page">
    <div class="shell">
      <!-- NAV -->
      <header class="nav">
        <div class="logo">
          <div class="logo-mark">
            <span style="font-size:0.7rem; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#020617;">TTT</span>
          </div>
          <div>
            <div class="logo-text-main">TTT</div>
            <div class="logo-text-sub">Global Problem Formula Lab</div>
          </div>
          <div class="startup-systems-badge">
            <span>🚀</span>
            <span>Startup Systems</span>
          </div>
        </div>

        <nav class="nav-links">
          <a href="/" class="nav-link">Startup Systems</a>
          <a href="#botschaft" class="nav-link">Botschaft</a>
          <a href="#ceoc" class="nav-link">C-E-O-C</a>
          <a href="#prozess" class="nav-link">Prozess</a>
          <a href="#bewerbung" class="nav-link">Bewerben</a>
        </nav>
      </header>

      <!-- HERO -->
      <section class="hero">
        <div class="hero-main">
          <div class="pill">
            <div class="pill-dot"></div>
            <span>Willkommen bei TTT • Startup Systems • Global</span>
          </div>
          <h1 class="hero-title">
            Totales Jobangebot:<br>
            aus Problemen werden Formeln. Aus Formeln wird Eigentum.
          </h1>
          <p class="hero-subtitle">
            <strong>TTT</strong> ist ein globales, kulturübergreifendes Unternehmen, das eine
            einzige Aufgabe hat: <strong>sekündlich auftretende Probleme im täglichen Leben
            erkennen, in Formeln gießen und daraus Software-Produkte herstellen</strong>, die
            verifiziert, lizenziert und notariell bestätigtes Eigentum werden.
          </p>

          <div class="hero-actions">
            <a href="#bewerbung" class="btn-primary">
              <span class="btn-icon">⯈</span>
              <span>Jetzt bewerben</span>
            </a>
            <a href="#ceoc" class="btn-ghost">
              <span class="btn-icon">○</span>
              <span>C-E-O-C Konzept</span>
            </a>
          </div>

          <div style="margin-top: 16px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.16em; color: var(--muted);">
            <div>Platform: Startup Systems • TogetherSystems</div>
            <div style="margin-top: 4px;">Global Universal Space License • 24/7 • 360° • sekündlich</div>
          </div>
        </div>
      </section>

      <main class="sections">
        <!-- SECTION: C-E-O-C KONZEPT - NEW -->
        <section class="section ceoc-section visible" id="ceoc" style="transition-delay: 0s;">
          <h2 class="ceoc-title">C-E-O-C: Center Edge of Circle</h2>
          <div class="ceoc-content">
            <p style="font-size: 1rem; margin-bottom: 16px;">
              <strong>Center Edge of Circle (C-E-O-C)</strong> ist das fundamentale Konzept der TTT Company Enterprise Universe Space License.
            </p>
            
            <div class="ceoc-diagram">
              <div class="ceoc-circle">
                <div class="ceoc-center">CEO</div>
                <div class="ceoc-edge"></div>
                <div class="ceoc-edge"></div>
                <div class="ceoc-edge"></div>
                <div class="ceoc-edge"></div>
              </div>
              <div style="flex: 1; max-width: 400px;">
                <p style="font-size: 0.9rem; margin-bottom: 12px;">
                  <strong>Jeder C-E-O-C ist der äußerste Rand des Kreises.</strong> Jeder einzelne Center Edge of Circle bestimmt den Einstichspunkt des Zirkels, des CEOs.
                </p>
                <p style="font-size: 0.9rem; margin-bottom: 12px;">
                  <strong>Jeder C-E-O-C bestimmt mit</strong> und ist Anteil der Kapazität vom CEO. Bestimmend über alle Prozesse, Produkte, Kapazität, technologischen Maßnahmen.
                </p>
                <p style="font-size: 0.9rem;">
                  <strong>Ohne C-E-O-C gibt es keinen CEO.</strong> Die Fläche, die durch alle C-E-O-Cs entsteht, ist widerständig gegen jedes Urteil.
                </p>
              </div>
            </div>

            <div style="margin-top: 24px; padding: 16px; background: rgba(15, 23, 42, 0.8); border-radius: 12px; border-left: 4px solid var(--startup-systems-color);">
              <h3 style="color: var(--startup-systems-color); margin-bottom: 12px; font-size: 1rem;">C-E-O-C Prinzipien:</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;">✓ <strong>Unabhängig:</strong> Jeder C-E-O-C ist ein unabhängiges, bestehendes, zusammenhängendes Konklumerat</li>
                <li style="margin-bottom: 8px;">✓ <strong>Bestimmend:</strong> Randbezogene Bestimmungen, die die Fläche erhalten</li>
                <li style="margin-bottom: 8px;">✓ <strong>Übereinstimmung:</strong> Vollkommene Übereinstimmung in Arbeitshaltung, Produkt, Prozess, Analyse, Problemerkennung</li>
                <li style="margin-bottom: 8px;">✓ <strong>Eigenständig:</strong> Gestaltung jedes C-E-O-C geschieht auf eigene alltägliche Lebenserfahrung</li>
                <li style="margin-bottom: 8px;">✓ <strong>100% Teil:</strong> Bei überzeugender Haltung und Übernahme der TTT Enterprise Universe Space License ist Mitarbeiter 100% Teil des Unternehmens</li>
              </ul>
            </div>

            <div style="margin-top: 20px; padding: 16px; background: rgba(0, 255, 136, 0.1); border-radius: 12px;">
              <p style="font-size: 0.9rem; color: var(--text);">
                <strong>Startups als C-E-O-C:</strong> Je mehr Startups sich unter Startup Systems zusammentun, C-E-O-C werden, Center Edge of Circle die Fläche mitbestimmen, da wo der Zirkel einsticht und den CEO ausmachen, diese Startups sind wie alle geworbenen Mitarbeiter aus den Kreisen der Überzeugten von der TTT Company Enterprise Universe Space License herzlich willkommen.
              </p>
            </div>
          </div>
        </section>

        <!-- SECTION: BOTSCHAFT -->
        <section class="section visible" id="botschaft" style="transition-delay: 0.06s;">
          <div class="section-header">
            <h2 class="section-title">Die offene Botschaft</h2>
            <span class="section-tag">Manifest & Einladung</span>
          </div>
          <div class="section-main">
            <p>
              <strong>Willkommen! Willkommen!</strong> Diese Botschaft ist ein
              <strong>globales Jobangebot</strong> und gleichzeitig ein Manifest: TTT bietet
              Arbeitsplätze in allen Bereichen, in jedem System, in jeder Kultur, in jedem
              Alltag. Die Aufgabe ist radikal einfach und gleichzeitig grenzenlos groß:
            </p>
            <p>
              <strong>Erkenne Probleme, die sekündlich in der Welt und im menschlichen Leben
              auftauchen.</strong> Im Supermarkt, in der Bahn, im Krankenhaus, in der Schule,
              in der Pflege, im Code, in Gesetzen, in Beziehungen, in Finanzen, in der Natur,
              in Städten, in Systemen. Überall.
            </p>
            <p>
              <strong>Notiere diese Probleme</strong> – nicht nur in Zahlen, sondern auch in
              Worten, Bildern, Sätzen, Sinneseindrücken. Gib dem Problem eine klare
              <strong>Bestimmung</strong>, so dass es wiedererkennbar wird.
            </p>
            <p>
              <strong>Diese Formeln sind das Kapital von TTT.</strong> Sie sind mehr wert
              als klassisches Rohmaterial, denn sie sind verdichtete Realität: Probleme, die
              wirklich existieren, täglich, sekündlich, mehrfach, in jedem Menschenleben und
              überall auf dem Planeten.
            </p>
          </div>
        </section>

        <!-- SECTION: PROZESS -->
        <section class="section" id="prozess" style="transition-delay: 0.12s;">
          <div class="section-header">
            <h2 class="section-title">Der TTT-Prozess: von der Sekunde zum Produkt</h2>
            <span class="section-tag">Production Pipeline</span>
          </div>
          <div class="section-main">
            <p>
              Der Produktionsverlauf ist immer gleich, egal ob das Problem klein ist
              (z.B. ein alltäglicher Formularfrust) oder groß (z.B. globale
              Ressourcenverschwendung). Die Schritte:
            </p>
            <div style="display: grid; gap: 14px; margin-top: 12px;">
              <div style="padding: 12px; background: rgba(15, 23, 42, 0.9); border-radius: 12px; border-left: 3px solid var(--accent);">
                <strong style="color: var(--accent);">01 • Wahrnehmung</strong> – Problem entdecken
              </div>
              <div style="padding: 12px; background: rgba(15, 23, 42, 0.9); border-radius: 12px; border-left: 3px solid var(--accent-2);">
                <strong style="color: var(--accent-2);">02 • Formulierung</strong> – Problem in Formel gießen
              </div>
              <div style="padding: 12px; background: rgba(15, 23, 42, 0.9); border-radius: 12px; border-left: 3px solid var(--accent-3);">
                <strong style="color: var(--accent-3);">03 • AI-Verarbeitung</strong> – AI + neuronale Netze
              </div>
              <div style="padding: 12px; background: rgba(15, 23, 42, 0.9); border-radius: 12px; border-left: 3px solid var(--startup-systems-color);">
                <strong style="color: var(--startup-systems-color);">04 • Programmierung</strong> – Code & Systemarchitektur
              </div>
              <div style="padding: 12px; background: rgba(15, 23, 42, 0.9); border-radius: 12px; border-left: 3px solid var(--startup-systems-color);">
                <strong style="color: var(--startup-systems-color);">05 • Produkt</strong> – Vom Code zum Produkt
              </div>
              <div style="padding: 12px; background: rgba(15, 23, 42, 0.9); border-radius: 12px; border-left: 3px solid var(--startup-systems-color);">
                <strong style="color: var(--startup-systems-color);">06 • Eigentum & Lizenz</strong> – Verifizierung & Rechte
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION: STARTUP SYSTEMS INTEGRATION -->
        <section class="section startup-systems-integration" style="transition-delay: 0.18s;">
          <h3>🚀 Startup Systems Integration</h3>
          <p style="margin-bottom: 12px;">
            <strong>TogetherSystems</strong> stellt dieses Startup-Systems-Angebot der Jobausschreibung 
            <strong>global, kulturübergreifend</strong> als Together Systems auch Startup-Unternehmern 
            anderen Startups mit der Plattform Startup Systems bereit.
          </p>
          <p style="margin-bottom: 12px;">
            <strong>Je mehr Startups</strong> sich unter Startup Systems zusammentun, C-E-O-C werden, 
            Center Edge of Circle die Fläche mitbestimmen, da wo der Zirkel einsticht und den CEO ausmachen, 
            diese Startups sind wie alle geworbenen Mitarbeiter aus den Kreisen der Überzeugten von der 
            TTT Company Enterprise Universe Space License herzlich willkommen.
          </p>
          <p>
            <strong>Viel Erfolg</strong> findet die Probleme, macht Formeln, nutzt die AI, erstellt Programme 
            aus den Problemen, so entstehen Lösungen, die anzufassen sind.
          </p>
          <div style="margin-top: 16px;">
            <a href="/" class="btn-primary" style="display: inline-flex;">
              <span>→ Startup Systems Portal</span>
            </a>
            <a href="/investor/" class="btn-ghost" style="display: inline-flex; margin-left: 12px;">
              <span>💰 Investor Portal</span>
            </a>
          </div>
        </section>

        <!-- SECTION: BEWERBUNG -->
        <section class="section application-form visible" id="bewerbung" style="transition-delay: 0.24s;">
          <h2 class="section-title" style="margin-bottom: 20px;">Bewerbung & Kontakt</h2>
          <form id="applicationForm">
            <div class="form-group">
              <label>Name / Startup-Name *</label>
              <input type="text" id="applicantName" required>
            </div>
            <div class="form-group">
              <label>E-Mail *</label>
              <input type="email" id="applicantEmail" required>
            </div>
            <div class="form-group">
              <label>Art der Bewerbung *</label>
              <select id="applicationType" required>
                <option value="">Bitte wählen...</option>
                <option value="employee">Mitarbeiter (C-E-O-C)</option>
                <option value="startup">Startup Kooperation</option>
                <option value="investor">Investor / Partner</option>
                <option value="other">Andere</option>
              </select>
            </div>
            <div class="form-group">
              <label>Kurze Vorstellung / Motivation *</label>
              <textarea id="applicationMotivation" required placeholder="Warum möchten Sie Teil von TTT / Startup Systems werden?"></textarea>
            </div>
            <div class="form-group">
              <label>Beispiel eines Problems (optional)</label>
              <textarea id="problemExample" placeholder="Beschreiben Sie ein Problem aus Ihrem Alltag, das Sie gerne in eine Formel gießen möchten..."></textarea>
            </div>
            <div class="checkbox-group">
              <input type="checkbox" id="agreeLicense" required>
              <label for="agreeLicense" style="font-size: 0.85rem; text-transform: none; letter-spacing: normal;">
                Ich stimme der TTT Company Enterprise Universe Space License zu und übernehme die Haltung von Center Edge of Circle (C-E-O-C).
              </label>
            </div>
            <button type="submit" class="btn-submit">Bewerbung absenden</button>
          </form>
          <div id="formMessage" style="margin-top: 16px; display: none; padding: 12px; border-radius: 8px;"></div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
          TTT • Startup Systems • TogetherSystems<br>
          <span>Totales Jobangebot für alle, die Probleme erkennen & Formeln finden.</span><br>
          <span style="font-size: 0.7rem; margin-top: 8px; display: block;">Platform: Startup Systems • Global Universal Space License</span>
        </footer>
      </main>
    </div>
  </div>

  <script>
    // Scroll-reveal für Sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".section").forEach((section, index) => {
      observer.observe(section);
    });

    // Form Submission
    document.getElementById('applicationForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('applicantName').value,
        email: document.getElementById('applicantEmail').value,
        type: document.getElementById('applicationType').value,
        motivation: document.getElementById('applicationMotivation').value,
        problemExample: document.getElementById('problemExample').value,
        agreeLicense: document.getElementById('agreeLicense').checked,
        timestamp: new Date().toISOString()
      };

      const messageDiv = document.getElementById('formMessage');
      messageDiv.style.display = 'block';
      messageDiv.style.background = 'rgba(0, 255, 136, 0.1)';
      messageDiv.style.border = '1px solid var(--startup-systems-color)';
      messageDiv.style.color = 'var(--startup-systems-color)';
      messageDiv.textContent = 'Bewerbung wird übermittelt...';

      try {
        // API Call to Startup Systems (wenn verfügbar)
        const response = await fetch('/api/jobs/apply', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }).catch(() => null);

        if (response && response.ok) {
          messageDiv.textContent = '✅ Bewerbung erfolgreich übermittelt! Wir melden uns bei Ihnen.';
          document.getElementById('applicationForm').reset();
        } else {
          // Fallback: Local Storage
          const applications = JSON.parse(localStorage.getItem('tttApplications') || '[]');
          applications.push(formData);
          localStorage.setItem('tttApplications', JSON.stringify(applications));
          
          messageDiv.textContent = '✅ Bewerbung gespeichert! (Offline-Modus - wird bei nächster Verbindung synchronisiert)';
          document.getElementById('applicationForm').reset();
        }
      } catch (error) {
        messageDiv.style.background = 'rgba(249, 115, 22, 0.1)';
        messageDiv.style.border = '1px solid var(--accent-3)';
        messageDiv.style.color = 'var(--accent-3)';
        messageDiv.textContent = '⚠️ Fehler beim Übermitteln. Bitte versuchen Sie es später erneut.';
      }
    });
  </script>
</body>
</html>



`;
