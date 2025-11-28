/**
 * Authentication Routes
 * User registration, login, and profile management
 */

import { Hono } from 'hono';
import { createUser, getUserByEmail, getUserById } from '../handlers/database';
import { hashPassword, comparePassword } from '../handlers/crypto';
import { generateToken, verifyToken } from '../handlers/jwt';
import { logAnalytics } from '../handlers/analytics';

const auth = new Hono();

// User Registration
auth.post('/register', async (c) => {
  try {
    const { email, password, name, role } = await c.req.json();

    if (!email || !password || !name) {
      return c.json({ error: 'Email, password, and name are required' }, 400);
    }

    // Check if user exists
    const existingUser = await getUserByEmail(c.env, email);
    if (existingUser) {
      return c.json({ error: 'User already exists' }, 400);
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const userId = await createUser(c.env, {
      email,
      password: hashedPassword,
      name,
      role: role || 'user'
    });

    // Generate token
    const token = generateToken(c.env, {
      id: userId,
      email,
      name,
      role: role || 'user'
    });

    // Log analytics
    await logAnalytics(c.env, 'user_registered', {
      user_id: userId,
      email
    });

    return c.json({
      success: true,
      token,
      user: { id: userId, email, name, role: role || 'user' }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return c.json({ error: 'Registration failed' }, 500);
  }
});

// User Login
auth.post('/login', async (c) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400);
    }

    const user = await getUserByEmail(c.env, email);
    if (!user) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }

    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }

    // Generate token
    const token = generateToken(c.env, {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    });

    // Log analytics
    await logAnalytics(c.env, 'user_login', {
      user_id: user.id,
      email
    });

    return c.json({
      success: true,
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role }
    });
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: 'Login failed' }, 500);
  }
});

// Get Current User
auth.get('/me', async (c) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return c.json({ error: 'Access token required' }, 401);
  }

  try {
    const decoded = verifyToken(c.env, token);
    const user = await getUserById(c.env, decoded.id);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    return c.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        startup_id: user.startup_id
      }
    });
  } catch (error) {
    return c.json({ error: 'Invalid or expired token' }, 403);
  }
});

export const authRoutes = auth;
export default auth;

