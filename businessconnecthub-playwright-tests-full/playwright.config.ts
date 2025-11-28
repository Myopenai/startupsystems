import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30_000, // 30 Sekunden Timeout
  retries: 1,
  use: {
    // Startup Systems auf lokalem Server oder Cloudflare Workers
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:8787/',
    headless: true,
    // Wartezeiten für API-Calls
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    // Screenshots bei Fehlern
    screenshot: 'only-on-failure',
    // Video bei Fehlern
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-report/results.json' }]
  ],
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
  // Global Setup für Startup Systems
  globalSetup: undefined,
  // Test Match Pattern - nur Startup Systems relevante Tests
  testMatch: /tests\/startupsystems.*\.spec\.ts/,
});
