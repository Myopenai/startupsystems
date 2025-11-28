import { test, expect } from '@playwright/test';

/**
 * Startup Systems - API Tests
 * Testet die REST API Endpoints direkt
 */

const API_BASE = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:8787';

test.describe('Startup Systems - API Endpoints', () => {
  test('GET /health - Health Check', async ({ request }) => {
    const response = await request.get(`${API_BASE}/health`);
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('status');
    expect(json.status).toBe('ok');
    expect(json).toHaveProperty('timestamp');
  });

  test('GET /api - API Info', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api`);
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('message');
    expect(json.message).toContain('Startup Systems');
  });

  test('GET /api/status - Service Status', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/status`);
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('service');
    expect(json.service).toBe('startupsystems');
    expect(json).toHaveProperty('status');
    expect(json.status).toBe('operational');
  });

  test('POST /api/investor/calculate/local - Lokale Kapitalberechnung', async ({ request }) => {
    const response = await request.post(`${API_BASE}/api/investor/calculate/local`, {
      data: {
        N: 10000,
        f: 5000,
        p: 0.1,
        I_avg: 10000,
        m: 0.2,
        u: 0.8,
        K_fix: 50000,
        N_employees: 10
      }
    });
    
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('success');
    expect(json.success).toBe(true);
    expect(json).toHaveProperty('result');
    expect(json.result).toHaveProperty('C_max_local');
    expect(json.result).toHaveProperty('C_year');
    expect(json.result).toHaveProperty('G');
  });

  test('POST /api/investor/calculate/global - Globale BPP-Berechnung', async ({ request }) => {
    const response = await request.post(`${API_BASE}/api/investor/calculate/global`, {
      data: {
        BPP_global: 100000000000000,
        F_free_rate: 0.05,
        alpha_0: 0.000001,
        N_employees: 10
      }
    });
    
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('success');
    expect(json.success).toBe(true);
    expect(json).toHaveProperty('result');
  });

  test('POST /api/investor/calculate/production - Produktionskosten', async ({ request }) => {
    const response = await request.post(`${API_BASE}/api/investor/calculate/production?time_cost_rate=50`, {
      data: {
        product_time_hours: 40,
        production_cost_base: 1000,
        mass_capital_factor: 1.5,
        productivity_rate: 0.9
      }
    });
    
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('success');
    expect(json.success).toBe(true);
    expect(json).toHaveProperty('result');
  });

  test('POST /api/investor/calculate/time-index - Zeitkosten-Leitzahl', async ({ request }) => {
    const response = await request.post(`${API_BASE}/api/investor/calculate/time-index`, {
      data: {
        total_time_invested_hours: 1000,
        productive_time_hours: 800,
        time_value_rate: 50
      }
    });
    
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('success');
    expect(json.success).toBe(true);
    expect(json).toHaveProperty('result');
    expect(json.result).toHaveProperty('time_cost_index');
  });

  test('GET /api/investor/health - Investor API Health', async ({ request }) => {
    const response = await request.get(`${API_BASE}/api/investor/health`);
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('status');
    expect(json.status).toBe('ok');
    expect(json).toHaveProperty('service');
    expect(json.service).toBe('investor-api');
  });

  test('POST /api/investor/calculate/complete - Kombinierte Berechnung', async ({ request }) => {
    const response = await request.post(`${API_BASE}/api/investor/calculate/complete`, {
      data: {
        local: {
          N: 10000,
          f: 5000,
          p: 0.1,
          I_avg: 10000,
          m: 0.2,
          u: 0.8,
          K_fix: 50000,
          N_employees: 10
        },
        global: {
          BPP_global: 100000000000000,
          F_free_rate: 0.05,
          alpha_0: 0.000001,
          N_employees: 10
        }
      }
    });
    
    expect(response.status()).toBe(200);
    
    const json = await response.json();
    expect(json).toHaveProperty('success');
    expect(json.success).toBe(true);
    expect(json).toHaveProperty('result');
  });
});



