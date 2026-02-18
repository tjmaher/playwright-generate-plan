import { test, expect } from '@playwright/test';

test('seed: logged in user', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Standard Playwright login steps
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify login succeeded before the agent takes over
  await expect(page.getByText('Secure Area')).toBeVisible();
});
