/**
 * Static File Server for Startup Systems
 * Serves HTML, CSS, JS files from public directory
 */

export async function serveStaticFile(path: string): Promise<Response | null> {
  // Map public directory paths
  const publicPaths: Record<string, string> = {
    '/': 'public/index.html',
    '/index.html': 'public/index.html',
    '/job': 'public/job/index.html',
    '/job/': 'public/job/index.html',
    '/job/index.html': 'public/job/index.html',
    '/investor': 'public/investor/index.html',
    '/investor/': 'public/investor/index.html',
    '/investor/index.html': 'public/investor/index.html',
    '/togethersystems': 'public/togethersystems/portal.html',
    '/togethersystems/': 'public/togethersystems/portal.html',
    '/togethersystems/portal.html': 'public/togethersystems/portal.html',
    '/gcc-nijmegen': 'public/gcc-nijmegen/index.html',
    '/gcc-nijmegen/': 'public/gcc-nijmegen/index.html',
    '/YORDY-SHOWCASE-SIMPLE.html': 'YORDY-SHOWCASE-SIMPLE.html'
  };

  const filePath = publicPaths[path] || path.replace(/^\//, 'public/');
  
  // In Cloudflare Workers können wir nicht direkt auf das Dateisystem zugreifen
  // HTML-Dateien müssen als Assets oder über KV/Workers Sites serviert werden
  // Für jetzt: Return null, damit der Worker die API-Route behandelt
  return null;
}

/**
 * Check if path should serve HTML
 */
export function isStaticPath(path: string): boolean {
  return path.endsWith('.html') || 
         path === '/' || 
         path === '/job' || 
         path === '/job/' ||
         path === '/investor' ||
         path === '/investor/' ||
         path === '/togethersystems' ||
         path === '/togethersystems/';
}



