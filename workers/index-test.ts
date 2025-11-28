/**
 * TEST VERSION - Minimal Hono Worker
 * To test if bundling works
 */

import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.json({ 
    message: 'Startup Systems API - Test',
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

export default app;



