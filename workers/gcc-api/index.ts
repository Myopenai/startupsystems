/**
 * Global Central City Arrivals - Cloudflare Workers API
 * Migrated from Express.js to Hono Framework for Cloudflare Workers
 */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { jwt } from 'hono/jwt';
import { authRoutes } from './routes/auth';
import { startupRoutes } from './routes/startups';
import { eventRoutes } from './routes/events';
import { nsRoutes } from './routes/ns';
import { analyticsRoutes } from './routes/analytics';

const app = new Hono();

// CORS Middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Health check
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'gcc-api'
  });
});

// API Routes
app.route('/auth', authRoutes);
app.route('/startups', startupRoutes);
app.route('/events', eventRoutes);
app.route('/ns', nsRoutes);
app.route('/analytics', analyticsRoutes);

// Error handling
app.notFound((c) => {
  return c.json({ error: 'Not Found' }, 404);
});

app.onError((err, c) => {
  console.error('API Error:', err);
  return c.json({ error: 'Internal Server Error' }, 500);
});

export default app;

