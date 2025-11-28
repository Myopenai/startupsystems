/**
 * HTML Server for Startup Systems
 * Serves static HTML files directly from embedded content
 */

// Import HTML files as text (we'll embed them)
// For Cloudflare Workers, we need to import them or fetch them at runtime

export async function serveHTML(path: string): Promise<Response | null> {
  const htmlMap: Record<string, () => Promise<string>> = {
    '/': async () => {
      // Fetch from public/index.html - will be handled by static asset binding
      return getHTMLContent('public/index.html');
    },
    '/job': getJobHTML,
    '/job/': getJobHTML,
    '/investor': getInvestorHTML,
    '/investor/': getInvestorHTML,
    '/togethersystems': getTogetherSystemsHTML,
    '/togethersystems/': getTogetherSystemsHTML,
  };

  const handler = htmlMap[path];
  if (!handler) {
    return null;
  }

  try {
    const html = await handler();
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error(`Error serving HTML for ${path}:`, error);
    return null;
  }
}

async function getHTMLContent(filePath: string): Promise<string> {
  // In Cloudflare Workers, we can't read files directly
  // This will be replaced with actual content embedding or R2 fetch
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Startup Systems</title>
</head>
<body>
  <p>Loading ${filePath}...</p>
</body>
</html>`;
}

async function getJobHTML(): Promise<string> {
  // This will be replaced with actual embedded HTML
  // For now, return a placeholder that fetches from origin
  return await fetch('https://raw.githubusercontent.com/myOpenAI/startupsystems/main/public/job/index.html')
    .then(r => r.text())
    .catch(() => getJobHTMLFallback());
}

async function getInvestorHTML(): Promise<string> {
  return await fetch('https://raw.githubusercontent.com/myOpenAI/startupsystems/main/public/investor/index.html')
    .then(r => r.text())
    .catch(() => getInvestorHTMLFallback());
}

async function getTogetherSystemsHTML(): Promise<string> {
  return await fetch('https://raw.githubusercontent.com/myOpenAI/startupsystems/main/public/togethersystems/portal.html')
    .then(r => r.text())
    .catch(() => getTogetherSystemsHTMLFallback());
}

function getJobHTMLFallback(): string {
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>TTT Job Portal</title></head>
<body><h1>TTT Job Portal</h1><p>Loading...</p></body>
</html>`;
}

function getInvestorHTMLFallback(): string {
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>Investor Portal</title></head>
<body><h1>Investor Portal</h1><p>Loading...</p></body>
</html>`;
}

function getTogetherSystemsHTMLFallback(): string {
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>TogetherSystems</title></head>
<body><h1>TogetherSystems Portal</h1><p>Loading...</p></body>
</html>`;
}

