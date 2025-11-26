/**
 * API Routes Module
 * Centralized route definitions for the API
 */

import { Hono } from 'hono';

const api = new Hono();

// Example API endpoints
api.get('/users', async (c) => {
  return c.json({
    users: [],
    message: 'Users endpoint - to be implemented'
  });
});

api.get('/services', async (c) => {
  return c.json({
    services: [
      {
        name: 'Cloudflare Workers',
        status: 'active',
        version: '1.0.0'
      }
    ]
  });
});

export default api;

