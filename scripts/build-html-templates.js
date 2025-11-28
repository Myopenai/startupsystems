/**
 * Build script to convert HTML files to TypeScript template exports
 * This embeds HTML files directly into the Worker bundle
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const htmlFiles = [
  { src: 'public/index.html', dest: 'workers/html-templates/index.ts', name: 'indexHTML' },
  { src: 'public/job/index.html', dest: 'workers/html-templates/job.ts', name: 'jobHTML' },
  { src: 'public/investor/index.html', dest: 'workers/html-templates/investor.ts', name: 'investorHTML' },
  { src: 'public/togethersystems/portal.html', dest: 'workers/html-templates/togethersystems.ts', name: 'togetherSystemsHTML' },
];

// Ensure output directory exists
mkdirSync(join(rootDir, 'workers/html-templates'), { recursive: true });

htmlFiles.forEach(({ src, dest, name }) => {
  const srcPath = join(rootDir, src);
  const destPath = join(rootDir, dest);
  
  try {
    const htmlContent = readFileSync(srcPath, 'utf-8');
    
    // Escape backticks and ${} in HTML for template literals
    const escapedContent = htmlContent
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\${/g, '\\${');
    
    const tsContent = `/**
 * Auto-generated HTML template
 * Source: ${src}
 * Generated: ${new Date().toISOString()}
 */

export const ${name} = \`${escapedContent}\`;
`;

    writeFileSync(destPath, tsContent, 'utf-8');
    console.log(`✅ Generated: ${dest}`);
  } catch (error) {
    console.error(`❌ Error processing ${src}:`, error.message);
  }
});

console.log('\n✅ All HTML templates generated!');

