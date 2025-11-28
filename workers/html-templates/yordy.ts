/**
 * Auto-generated HTML template
 * Source: YORDY-SHOWCASE-SIMPLE.html
 * Generated: 2025-11-28T13:57:38.635Z
 */

export const yordyHTML = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YORDY - Artist Showcase | MicroLED Quality</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
            --microled-primary: #00ff88;
            --microled-secondary: #00d9ff;
            --dark-bg: #0a0a0f;
        }
        
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: var(--dark-bg);
            color: #fff;
            overflow-x: hidden;
        }
        
        /* MicroLED Grid */
        .grid-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.15;
            background-image: 
                linear-gradient(var(--microled-primary) 1px, transparent 1px),
                linear-gradient(90deg, var(--microled-primary) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridPulse 4s ease-in-out infinite;
        }
        
        @keyframes gridPulse {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.25; }
        }
        
        .container {
            position: relative;
            z-index: 10;
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .hero {
            text-align: center;
            padding: 60px 20px;
        }
        
        .hero h1 {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 900;
            background: linear-gradient(135deg, var(--microled-primary), var(--microled-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            filter: drop-shadow(0 0 30px var(--microled-primary));
            animation: titleGlow 3s ease-in-out infinite;
        }
        
        @keyframes titleGlow {
            0%, 100% { filter: drop-shadow(0 0 30px var(--microled-primary)); }
            50% { filter: drop-shadow(0 0 60px var(--microled-primary)); }
        }
        
        .artist-info {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 217, 255, 0.1));
            border: 2px solid var(--microled-primary);
            border-radius: 24px;
            padding: 40px;
            margin: 40px auto;
            max-width: 600px;
            backdrop-filter: blur(20px);
            box-shadow: 0 0 40px rgba(0, 255, 136, 0.3);
            animation: cardPulse 4s ease-in-out infinite;
        }
        
        @keyframes cardPulse {
            0%, 100% { box-shadow: 0 0 40px rgba(0, 255, 136, 0.3); }
            50% { box-shadow: 0 0 60px rgba(0, 255, 136, 0.5); }
        }
        
        .artist-name {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--microled-primary);
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        
        .artist-link {
            display: inline-block;
            color: var(--microled-secondary);
            text-decoration: none;
            padding: 12px 24px;
            border: 2px solid var(--microled-secondary);
            border-radius: 12px;
            margin-top: 20px;
            transition: all 0.3s;
        }
        
        .artist-link:hover {
            background: var(--microled-secondary);
            color: var(--dark-bg);
            box-shadow: 0 0 30px var(--microled-secondary);
            transform: translateY(-2px);
        }
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 60px 0;
        }
        
        .artwork {
            aspect-ratio: 1;
            border-radius: 20px;
            overflow: hidden;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all 0.4s;
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
        }
        
        .artwork:nth-child(1) { animation-delay: 0.1s; }
        .artwork:nth-child(2) { animation-delay: 0.2s; }
        .artwork:nth-child(3) { animation-delay: 0.3s; }
        
        @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
            from { opacity: 0; transform: translateY(30px); }
        }
        
        .artwork:hover {
            border-color: var(--microled-primary);
            transform: scale(1.05) translateY(-10px);
            box-shadow: 0 20px 60px rgba(0, 255, 136, 0.4);
        }
        
        .artwork img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s;
            filter: brightness(0.9);
        }
        
        .artwork:hover img {
            transform: scale(1.1);
            filter: brightness(1.1);
        }
        
        .quality-badge {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--microled-primary), var(--microled-secondary));
            color: var(--dark-bg);
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 700;
            text-transform: uppercase;
            box-shadow: 0 0 30px var(--microled-primary);
            z-index: 100;
        }
    </style>
</head>
<body>
    <div class="grid-bg"></div>
    
    <div class="container">
        <div class="hero">
            <h1>YORDY</h1>
            <p style="font-size: 1.5rem; color: var(--microled-secondary);">Artist Showcase · MicroLED Quality</p>
        </div>
        
        <div class="artist-info">
            <div class="artist-name">YORDY LOERMANS</div>
            <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
                Digital Artist & Creative Visionary
            </p>
            <a href="https://www.facebook.com/yordy.loermans" target="_blank" rel="noopener" class="artist-link">
                View on Facebook →
            </a>
        </div>
        
        <div class="gallery">
            <div class="artwork">
                <img src="./YORDY/587311299_33418853397713740_2912041276018949230_n.jpg" alt="YORDY Artwork 1" loading="lazy">
            </div>
            <div class="artwork">
                <img src="./YORDY/586570724_33456496463949433_5989595034627163865_n.jpg" alt="YORDY Artwork 2" loading="lazy">
            </div>
            <div class="artwork">
                <img src="./YORDY/589004660_33471790269086719_4363333161132047288_n.jpg" alt="YORDY Artwork 3" loading="lazy">
            </div>
        </div>
    </div>
    
    <div class="quality-badge">MicroLED Quality</div>
</body>
</html>

`;
