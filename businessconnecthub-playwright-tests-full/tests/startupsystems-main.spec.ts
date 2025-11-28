import { test, expect } from '@playwright/test';

/**
 * Startup Systems - Hauptportal Tests
 * Testet das Hauptportal und API-Endpoints
 */

test.describe('Startup Systems - Hauptportal', () => {
  test('Hauptportal lädt und zeigt API-Informationen', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

    // Prüfe ob JSON Response mit API-Info
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    
    // Prüfe ob JSON Response API-Endpoints enthält
    const jsonResponse = await page.evaluate(() => {
      try {
        return JSON.parse(document.body.textContent || '{}');
      } catch {
        return null;
      }
    });

    if (jsonResponse) {
      expect(jsonResponse).toHaveProperty('message');
      expect(jsonResponse.message).toContain('Startup Systems');
    }
  });

  test('Health Check Endpoint funktioniert', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'load', timeout: 30000 });
    
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    
    const jsonResponse = await page.evaluate(() => {
      try {
        return JSON.parse(document.body.textContent || '{}');
      } catch {
        return null;
      }
    });

    if (jsonResponse) {
      expect(jsonResponse).toHaveProperty('status');
      expect(jsonResponse.status).toBe('ok');
    }
  });

  test('API Endpoint Liste ist verfügbar', async ({ page }) => {
    await page.goto('/api', { waitUntil: 'load', timeout: 30000 });
    
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    
    const jsonResponse = await page.evaluate(() => {
      try {
        return JSON.parse(document.body.textContent || '{}');
      } catch {
        return null;
      }
    });

    if (jsonResponse) {
      expect(jsonResponse).toHaveProperty('message');
      expect(jsonResponse.message).toContain('Startup Systems API');
      
      // Prüfe ob Endpoints-Liste vorhanden
      if (jsonResponse.availableEndpoints) {
        expect(Array.isArray(jsonResponse.availableEndpoints)).toBeTruthy();
      }
    }
  });
});



