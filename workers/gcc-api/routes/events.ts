/**
 * Event Routes
 * Event management and registration
 */

import { Hono } from 'hono';
import { getAllEvents, getEventById, createEvent, registerForEvent } from '../handlers/database';
import { verifyToken } from '../handlers/jwt';
import { logAnalytics } from '../handlers/analytics';

const events = new Hono();

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

// Get All Events
events.get('/', async (c) => {
  try {
    const eventsList = await getAllEvents(c.env);
    return c.json({ events: eventsList });
  } catch (error) {
    console.error('Error fetching events:', error);
    return c.json({ error: 'Failed to fetch events' }, 500);
  }
});

// Get Single Event
events.get('/:id', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    const event = await getEventById(c.env, id);

    if (!event) {
      return c.json({ error: 'Event not found' }, 404);
    }

    return c.json({ event });
  } catch (error) {
    console.error('Error fetching event:', error);
    return c.json({ error: 'Failed to fetch event' }, 500);
  }
});

// Create Event (Admin only)
events.post('/', authenticate, async (c) => {
  try {
    const user = c.get('user');

    if (user.role !== 'admin') {
      return c.json({ error: 'Admin access required' }, 403);
    }

    const { title, description, date, time, location, type, max_participants } = await c.req.json();

    if (!title || !date || !time) {
      return c.json({ error: 'Title, date, and time are required' }, 400);
    }

    const eventId = await createEvent(c.env, {
      title,
      description,
      date,
      time,
      location,
      type,
      max_participants
    });

    await logAnalytics(c.env, 'event_created', {
      event_id: eventId,
      user_id: user.id
    });

    return c.json({
      success: true,
      event: { id: eventId, title, date, time }
    });
  } catch (error) {
    console.error('Error creating event:', error);
    return c.json({ error: 'Failed to create event' }, 500);
  }
});

// Register for Event
events.post('/:id/register', authenticate, async (c) => {
  try {
    const user = c.get('user');
    const eventId = parseInt(c.req.param('id'));

    const success = await registerForEvent(c.env, eventId, user.id);

    if (!success) {
      return c.json({ error: 'Registration failed - already registered or event full' }, 400);
    }

    await logAnalytics(c.env, 'event_registered', {
      event_id: eventId,
      user_id: user.id
    });

    return c.json({ success: true, message: 'Successfully registered for event' });
  } catch (error) {
    console.error('Error registering for event:', error);
    return c.json({ error: 'Failed to register for event' }, 500);
  }
});

export const eventRoutes = events;
export default events;

