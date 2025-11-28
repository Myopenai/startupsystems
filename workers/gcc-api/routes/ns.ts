/**
 * NS (Nederlandse Spoorwegen) API Routes
 * Proxy for NS Train Information API
 */

import { Hono } from 'hono';
import { logAnalytics } from '../handlers/analytics';

const ns = new Hono();

// NS API Proxy - Departures
ns.get('/departures/:station', async (c) => {
  try {
    const stationCode = c.req.param('station');
    const apiKey = c.env.NS_API_KEY;

    if (!apiKey) {
      return c.json({ error: 'NS API key not configured' }, 500);
    }

    // Call NS API
    const response = await fetch(
      `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=${stationCode}`,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey
        }
      }
    );

    if (!response.ok) {
      throw new Error(`NS API error: ${response.status}`);
    }

    const data = await response.json();
    
    await logAnalytics(c.env, 'ns_api_call', {
      station: stationCode
    });

    return c.json(data);
  } catch (error: any) {
    console.error('NS API Error:', error);
    return c.json({ 
      error: 'Failed to fetch NS data',
      message: error.message
    }, 500);
  }
});

export const nsRoutes = ns;
export default ns;

