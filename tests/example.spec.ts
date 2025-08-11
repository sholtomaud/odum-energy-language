import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Odum Diagram Tool/);
});

test('app-root is present', async ({ page }) => {
  await page.goto('/');

  // Check that the app-root custom element is present
  const appRoot = await page.locator('app-root');
  await expect(appRoot).toBeVisible();
});
