/**
 * Axe accessibility regression test.
 *
 * Run from this folder:
 *   npx playwright install chromium      # one-time
 *   npx http-server -p 4173 -c-1 . &     # serve static files
 *   npx playwright test                  # run the test
 *
 * Or wire into CI. Requires:
 *   @playwright/test  ^1.40
 *   @axe-core/playwright ^4.8
 */
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE = process.env.BASE_URL ?? 'http://localhost:4173';

const ROUTES = [
  '/index.html',
  '/contact.html',
  '/equipe.html',
  '/createurs.html',
  '/materiaux.html',
  '/un-certain-regard.html',
];

for (const route of ROUTES) {
  test(`a11y: ${route}`, async ({ page }) => {
    await page.goto(BASE + route);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect.soft(results.violations, JSON.stringify(results.violations, null, 2))
      .toEqual([]);
  });
}
