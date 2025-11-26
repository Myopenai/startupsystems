/**
 * Startup Systems - Cloudflare Worker
 * Main entry point for all worker functions
 */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import apiRoutes from './api/routes';
import gccApiRoutes from './gcc-api/index';

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

// Serve static HTML files from public directory
app.get('/*', async (c) => {
  const url = new URL(c.req.url);
  const path = url.pathname;
  
  // Default to index.html for root
  if (path === '/') {
    return c.json({
      message: 'Welcome to Startup Systems API',
      version: '1.0.0',
      endpoints: {
        api: '/api',
        health: '/health',
        gcc: '/api/gcc'
      }
    });
  }
  
  // For other paths, return JSON API response
  if (path.startsWith('/api')) {
    return;
  }
  
  // Return JSON for other paths
  return c.json({
    message: 'Welcome to Startup Systems API',
    api: '/api',
    endpoints: {
      health: '/health',
      api: '/api/*',
      gcc: '/api/gcc/*'
    },
    version: '1.0.0'
  });
});

// API routes - Main Startup Systems API
app.route('/api', apiRoutes);

// GCC API routes - Global Central City Arrivals
app.route('/api/gcc', gccApiRoutes);


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
      '/api/gcc/analytics/* - GCC Analytics'
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

