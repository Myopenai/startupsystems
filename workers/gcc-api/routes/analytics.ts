/**
 * Analytics Routes
 * Analytics data retrieval (Admin only)
 */

import { Hono } from 'hono';
import { verifyToken } from '../handlers/jwt';
import { getAnalytics, getAnalyticsSummary } from '../handlers/analytics';

const analytics = new Hono();

// Authentication middleware (Admin only)
const authenticateAdmin = async (c: any, next: any) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return c.json({ error: 'Access token required' }, 401);
  }

  try {
    const decoded = verifyToken(c.env, token);
    
    if (decoded.role !== 'admin') {
      return c.json({ error: 'Admin access required' }, 403);
    }

    c.set('user', decoded);
    await next();
  } catch (error) {
    return c.json({ error: 'Invalid or expired token' }, 403);
  }
};

// Get Analytics
analytics.get('/', authenticateAdmin, async (c) => {
  try {
    const { startDate, endDate, eventType } = c.req.query();
    
    const analyticsData = await getAnalytics(c.env, {
      startDate: startDate || undefined,
      endDate: endDate || undefined,
      eventType: eventType || undefined
    });

    return c.json({ analytics: analyticsData });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return c.json({ error: 'Failed to fetch analytics' }, 500);
  }
});

// Get Analytics Summary
analytics.get('/summary', authenticateAdmin, async (c) => {
  try {
    const summary = await getAnalyticsSummary(c.env);
    return c.json({ summary });
  } catch (error) {
    console.error('Error fetching analytics summary:', error);
    return c.json({ error: 'Failed to fetch analytics summary' }, 500);
  }
});

export const analyticsRoutes = analytics;
export default analytics;

