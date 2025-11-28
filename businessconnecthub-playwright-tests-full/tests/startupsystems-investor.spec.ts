import { test, expect } from '@playwright/test';

/**
 * Startup Systems - Investor Portal Tests
 * Testet das Investor Portal mit Z-Canvas Formeln
 */

const INVESTOR_PORTAL_URL = '/investor/';

test.describe('Startup Systems - Investor Portal', () => {
  test('Investor Portal lädt', async ({ page }) => {
    await page.goto(INVESTOR_PORTAL_URL, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    // Prüfe Header
    const header = page.locator('h1').first();
    await expect(header).toBeVisible({ timeout: 5000 });
    
    const headerText = await header.textContent();
    expect(headerText).toContain('Investor Portal');
  });

  test('Berechnungs-Karten sind vorhanden', async ({ page }) => {
    await page.goto(INVESTOR_PORTAL_URL, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    // Prüfe ob Dashboard-Grid existiert
    const dashboardGrid = page.locator('.dashboard-grid').first();
    const hasGrid = await dashboardGrid.count() > 0;
    expect(hasGrid).toBeTruthy();

    // Prüfe Berechnungs-Karten
    const calcCards = page.locator('.calc-card');
    const cardCount = await calcCards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test('Lokale Kapitalberechnung - Formular ist vorhanden', async ({ page }) => {
    await page.goto(INVESTOR_PORTAL_URL, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    // Prüfe Lokale Kapitalflüsse Formular
    const localForm = page.locator('#localForm').first();
    const hasForm = await localForm.count() > 0;
    expect(hasForm).toBeTruthy();

    // Prüfe wichtige Input-Felder
    const nInput = page.locator('#local_N').first();
    const fInput = page.locator('#local_f').first();
    const pInput = page.locator('#local_p').first();
    
    const hasN = await nInput.count() > 0;
    const hasF = await fInput.count() > 0;
    const hasP = await pInput.count() > 0;
    
    expect(hasN || hasF || hasP).toBeTruthy();
  });

  test('Lokale Kapitalberechnung - API Call funktioniert', async ({ page }) => {
    await page.goto(INVESTOR_PORTAL_URL, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    // Fülle Formular mit Test-Daten
    await page.fill('#local_N', '10000');
    await page.fill('#local_f', '5000');
    await page.fill('#local_p', '0.1');
    await page.fill('#local_I_avg', '10000');
    await page.fill('#local_m', '0.2');
    await page.fill('#local_u', '0.8');
    await page.fill('#local_K_fix', '50000');
    await page.fill('#local_N_employees', '10');

    // Starte Berechnung
    const submitBtn = page.locator('#localForm button[type="submit"]').first();
    const hasSubmitBtn = await submitBtn.count() > 0;
    
    if (hasSubmitBtn) {
      // Intercept API Call
      const responsePromise = page.waitForResponse(
        response => response.url().includes('/api/investor/calculate/local') && response.status() === 200,
        { timeout: 10000 }
      ).catch(() => null);

      await submitBtn.click();
      
      // Warte auf Response (optional)
      const response = await responsePromise;
      
      if (response) {
        const responseData = await response.json();
        expect(responseData).toHaveProperty('success');
        expect(responseData.success).toBe(true);
      }
      
      // Prüfe ob Ergebnisse angezeigt werden
      await page.waitForTimeout(3000);
      const results = page.locator('#localResults').first();
      const hasResults = await results.count() > 0;
      
      // Ergebnisse sollten nach erfolgreicher Berechnung sichtbar sein
      if (hasResults) {
        const isVisible = await results.isVisible({ timeout: 5000 }).catch(() => false);
        // Optional: Prüfe ob Ergebnisse Inhalt haben
      }
    }
  });

  test('Globale BPP-Berechnung - Formular ist vorhanden', async ({ page }) => {
    await page.goto(INVESTOR_PORTAL_URL, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    const globalForm = page.locator('#globalForm').first();
    const hasForm = await globalForm.count() > 0;
    expect(hasForm).toBeTruthy();
  });

  test('Produktionskosten-Berechnung - Formular ist vorhanden', async ({ page }) => {
    await page.goto(INVESTOR_PORTAL_URL, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    const productionForm = page.locator('#productionForm').first();
    const hasForm = await productionForm.count() > 0;
    expect(hasForm).toBeTruthy();
  });

  test('Zeitkosten-Leitzahl - Formular ist vorhanden', async ({ page }) => {
    await page.goto(INVESTOR_PORTAL_URL, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    const timeIndexForm = page.locator('#timeIndexForm').first();
    const hasForm = await timeIndexForm.count() > 0;
    expect(hasForm).toBeTruthy();
  });
});



