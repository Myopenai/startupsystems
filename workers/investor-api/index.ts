/**
 * Investor API - Startup Systems
 * Z-Canvas Kapitalformeln, Produktionskosten-Berechnung, Investor-Szenarien
 */

import { Hono } from 'hono';
import { calculateComplete, calculateLocalCapital, calculateGlobalBPP, calculateProductionCosts, calculateTimeCostIndex } from './formulas/z-canvas-engine';
import type { LocalCapitalParams, GlobalBPPParams, ProductionCostParams } from './formulas/z-canvas-engine';

const investorApi = new Hono();

// Health Check
investorApi.get('/health', (c) => {
  return c.json({
    status: 'ok',
    service: 'investor-api',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Z-Canvas Lokale Kapitalberechnung
investorApi.post('/calculate/local', async (c) => {
  try {
    const params: LocalCapitalParams = await c.req.json();
    
    // Validierung
    if (!params.N || !params.f || params.p === undefined || !params.I_avg) {
      return c.json({ error: 'Missing required parameters (N, f, p, I_avg)' }, 400);
    }
    
    const result = calculateLocalCapital(params);
    
    return c.json({
      success: true,
      calculation: 'local-capital',
      params,
      result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Calculation failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Z-Canvas Globale BPP-Berechnung
investorApi.post('/calculate/global', async (c) => {
  try {
    const params: GlobalBPPParams = await c.req.json();
    
    // Standardwerte
    const fullParams: GlobalBPPParams = {
      BPP_global: params.BPP_global || 1e14, // 100 Billionen € Standard
      F_free_rate: params.F_free_rate ?? 0.05, // 5%
      alpha_0: params.alpha_0 ?? 1e-6, // 0.0001%
      N_employees: params.N_employees || 0
    };
    
    const result = calculateGlobalBPP(fullParams);
    
    return c.json({
      success: true,
      calculation: 'global-bpp',
      params: fullParams,
      result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Calculation failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Produktionskosten-Berechnung
investorApi.post('/calculate/production', async (c) => {
  try {
    const params: ProductionCostParams = await c.req.json();
    const time_cost_rate = parseInt(c.req.query('time_cost_rate') || '50');
    
    if (!params.product_time_hours || !params.production_cost_base) {
      return c.json({ error: 'Missing required parameters (product_time_hours, production_cost_base)' }, 400);
    }
    
    const result = calculateProductionCosts(params, time_cost_rate);
    
    return c.json({
      success: true,
      calculation: 'production-costs',
      params,
      time_cost_rate,
      result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Calculation failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Zeitkosten-Leitzahl
investorApi.post('/calculate/time-index', async (c) => {
  try {
    const body = await c.req.json();
    const { total_time_invested_hours, productive_time_hours, time_value_rate } = body;
    
    if (!total_time_invested_hours || productive_time_hours === undefined) {
      return c.json({ error: 'Missing required parameters (total_time_invested_hours, productive_time_hours)' }, 400);
    }
    
    const time_index = calculateTimeCostIndex(
      total_time_invested_hours,
      productive_time_hours,
      time_value_rate || 50
    );
    
    return c.json({
      success: true,
      calculation: 'time-cost-index',
      params: body,
      result: {
        time_cost_index: time_index,
        efficiency_rate: productive_time_hours / total_time_invested_hours,
        total_time_hours: total_time_invested_hours,
        productive_time_hours
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Calculation failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Kombinierte Berechnung (Lokal + Global + Produktion)
investorApi.post('/calculate/complete', async (c) => {
  try {
    const body = await c.req.json();
    const { local, global, production } = body;
    
    if (!local) {
      return c.json({ error: 'Missing required parameter: local' }, 400);
    }
    
    const result = calculateComplete(
      local as LocalCapitalParams,
      global as GlobalBPPParams | undefined,
      production as ProductionCostParams | undefined
    );
    
    return c.json({
      success: true,
      calculation: 'complete',
      params: body,
      result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Calculation failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Investor-Szenarien-Rechner
investorApi.post('/scenarios', async (c) => {
  try {
    const body = await c.req.json();
    const { scenarios } = body; // Array von Szenarien
    
    if (!Array.isArray(scenarios) || scenarios.length === 0) {
      return c.json({ error: 'Missing or invalid scenarios array' }, 400);
    }
    
    const results = scenarios.map((scenario: any, index: number) => {
      try {
        const { local, global, production } = scenario;
        const result = calculateComplete(
          local as LocalCapitalParams,
          global as GlobalBPPParams | undefined,
          production as ProductionCostParams | undefined
        );
        
        return {
          scenario_index: index,
          scenario_name: scenario.name || `Scenario ${index + 1}`,
          success: true,
          result
        };
      } catch (error) {
        return {
          scenario_index: index,
          scenario_name: scenario.name || `Scenario ${index + 1}`,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
    });
    
    return c.json({
      success: true,
      calculation: 'scenarios',
      total_scenarios: scenarios.length,
      results,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Scenario calculation failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// API Info
investorApi.get('/', (c) => {
  return c.json({
    service: 'investor-api',
    version: '1.0.0',
    description: 'Z-Canvas Kapitalformeln, Produktionskosten-Berechnung, Investor-Szenarien',
    endpoints: {
      health: 'GET /health',
      'calculate-local': 'POST /calculate/local',
      'calculate-global': 'POST /calculate/global',
      'calculate-production': 'POST /calculate/production',
      'calculate-time-index': 'POST /calculate/time-index',
      'calculate-complete': 'POST /calculate/complete',
      scenarios: 'POST /scenarios'
    },
    documentation: '/docs/investor-api'
  });
});

export default investorApi;



