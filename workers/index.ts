/**
 * Startup Systems - Cloudflare Worker
 * Main entry point for all worker functions
 */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import apiRoutes from './api/routes';
import gccApiRoutes from './gcc-api/index';
import investorApiRoutes from './investor-api/index';
import jobsApiRoutes from './jobs-api/index';
import { indexHTML } from './html-templates/index';
import { jobHTML } from './html-templates/job';
import { investorHTML } from './html-templates/investor';
import { togetherSystemsHTML } from './html-templates/togethersystems';
import { yordyHTML } from './html-templates/yordy';

// Initialize Hono app
const app = new Hono();

// Middleware
app.use('*', logger());
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: c.env?.ENVIRONMENT || 'production',
    version: '1.0.0'
  });
});

// API routes - MUST be defined BEFORE catch-all route
// API routes - Main Startup Systems API
app.route('/api', apiRoutes);

// GCC API routes - Global Central City Arrivals
app.route('/api/gcc', gccApiRoutes);

// Investor API routes - Z-Canvas Formeln, Produktionskosten, Investor-Szenarien
app.route('/api/investor', investorApiRoutes);

// Jobs API routes - TTT Job Portal, C-E-O-C Management
app.route('/api/jobs', jobsApiRoutes);

// API root endpoint
app.get('/api', (c) => {
  return c.json({
    message: 'Startup Systems API',
    availableEndpoints: [
      '/api/status',
      '/api/health',
      '/api/users',
      '/api/services',
      '/api/gcc/health - GCC API Health',
      '/api/gcc/auth/* - GCC Authentication',
      '/api/gcc/startups/* - GCC Startups',
      '/api/gcc/events/* - GCC Events',
      '/api/gcc/ns/* - NS Train API',
      '/api/gcc/analytics/* - GCC Analytics',
      '/api/investor/health - Investor API Health',
      '/api/investor/calculate/local - Z-Canvas Lokale Kapitalberechnung',
      '/api/investor/calculate/global - Z-Canvas Globale BPP-Berechnung',
      '/api/investor/calculate/production - Produktionskosten-Berechnung',
      '/api/investor/calculate/time-index - Zeitkosten-Leitzahl',
      '/api/investor/calculate/complete - Kombinierte Berechnung',
      '/api/investor/scenarios - Investor-Szenarien-Rechner',
      '/api/jobs/health - Jobs API Health',
      '/api/jobs/apply - Job Application Submit',
      '/api/jobs/applications - Get Applications (Admin)',
      '/api/jobs/ceoc/active - Get Active C-E-O-C Members',
      '/api/jobs/stats - Job Statistics'
    ]
  });
});

app.get('/api/status', (c) => {
  return c.json({
    service: 'startupsystems',
    status: 'operational',
    timestamp: new Date().toISOString(),
    environment: c.env?.ENVIRONMENT || 'production'
  });
});

// Serve static HTML files from public directory
// For Cloudflare Workers, HTML files can be served via:
// 1. Direct embedding (current approach - fetch from origin)
// 2. R2 Storage binding (recommended for production)
// 3. Workers Sites (legacy)

app.get('/*', async (c) => {
  const url = new URL(c.req.url);
  const path = url.pathname;
  
  // Serve embedded HTML templates
  const htmlTemplates: Record<string, string> = {
    '/': indexHTML,
    '/index.html': indexHTML,
    '/job': jobHTML,
    '/job/': jobHTML,
    '/job/index.html': jobHTML,
    '/investor': investorHTML,
    '/investor/': investorHTML,
    '/investor/index.html': investorHTML,
    '/togethersystems': togetherSystemsHTML,
    '/togethersystems/': togetherSystemsHTML,
    '/togethersystems/portal.html': togetherSystemsHTML,
    '/YORDY-SHOWCASE-SIMPLE.html': yordyHTML,
  };
  
  // Handle YORDY showcase
  if (path === '/YORDY-SHOWCASE-SIMPLE.html' || path === '/yordy' || path === '/yordy-showcase') {
    return c.html(yordyHTML);
  }
  
  const htmlContent = htmlTemplates[path];
  if (htmlContent) {
    return c.html(htmlContent);
  }
  
  // Try Workers Sites Assets as fallback (if available)
  if (c.env?.ASSETS) {
    try {
      const assetRequest = new Request(c.req.raw);
      const assetResponse = await c.env.ASSETS.fetch(assetRequest);
      if (assetResponse && assetResponse.ok) {
        return assetResponse;
      }
    } catch (e) {
      // Ignore asset errors
    }
  }
  
  // Fallback: API info for root path
  if (path === '/') {
    return c.json({
      message: 'Welcome to Startup Systems API',
      version: '1.0.0',
      portals: {
        main: '/',
        job: '/job/',
        investor: '/investor/',
        togethersystems: '/togethersystems/',
      },
      endpoints: {
        api: '/api',
        health: '/health',
        gcc: '/api/gcc',
        investor: '/api/investor',
        jobs: '/api/jobs'
      }
    });
  }
  
  // 404 for unknown paths
  return c.json({ error: 'Not Found', path }, 404);
});

// Error handling
app.notFound((c) => {
  return c.json({ error: 'Not Found' }, 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ error: 'Internal Server Error' }, 500);
});

// Export default handler for Cloudflare Workers
export default app;

