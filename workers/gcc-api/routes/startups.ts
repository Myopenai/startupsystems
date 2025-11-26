/**
 * Startup Routes
 * Startup management and registration
 */

import { Hono } from 'hono';
import { getAllStartups, getStartupById, createStartup } from '../handlers/database';
import { verifyToken } from '../handlers/jwt';
import { logAnalytics } from '../handlers/analytics';

const startups = new Hono();

// Authentication middleware
const authenticate = async (c: any, next: any) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return c.json({ error: 'Access token required' }, 401);
  }

  try {
    const decoded = verifyToken(c.env, token);
    c.set('user', decoded);
    await next();
  } catch (error) {
    return c.json({ error: 'Invalid or expired token' }, 403);
  }
};

// Get All Startups
startups.get('/', async (c) => {
  try {
    const startupsList = await getAllStartups(c.env);
    return c.json({ startups: startupsList });
  } catch (error) {
    console.error('Error fetching startups:', error);
    return c.json({ error: 'Failed to fetch startups' }, 500);
  }
});

// Get Single Startup
startups.get('/:id', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    const startup = await getStartupById(c.env, id);

    if (!startup) {
      return c.json({ error: 'Startup not found' }, 404);
    }

    return c.json({ startup });
  } catch (error) {
    console.error('Error fetching startup:', error);
    return c.json({ error: 'Failed to fetch startup' }, 500);
  }
});

// Register New Startup
startups.post('/', authenticate, async (c) => {
  try {
    const user = c.get('user');
    const { name, category, description, contact_email, contact_phone, website, station_code } = await c.req.json();

    if (!name || !description) {
      return c.json({ error: 'Name and description are required' }, 400);
    }

    const startupId = await createStartup(c.env, {
      name,
      category,
      description,
      contact_email,
      contact_phone,
      website,
      station_code,
      user_id: user.id
    });

    await logAnalytics(c.env, 'startup_registered', {
      startup_id: startupId,
      user_id: user.id
    });

    return c.json({
      success: true,
      startup: { id: startupId, name, category, description, status: 'pending' }
    });
  } catch (error) {
    console.error('Error creating startup:', error);
    return c.json({ error: 'Failed to create startup' }, 500);
  }
});

export { startupRoutes };
export default startups;

