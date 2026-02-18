// spec: specs/login.plan.md
// seed: tests/seed.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { SecureAreaPage } from './pages/secure-area.page';

test.describe('Login and Logout Functionality', () => {
  test('Positive Login and Logout Flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const secureArea = new SecureAreaPage(page);

    // 1. Navigate to https://the-internet.herokuapp.com/login
    await loginPage.goto();
    // 2. Verify the visible heading is 'Login Page'
    await loginPage.assertHeadingVisible();
    // 3. Enter 'tomsmith' in the Username field
    await loginPage.usernameInput.fill('tomsmith');
    await loginPage.assertUsernameValue('tomsmith');
    // 4. Enter 'SuperSecretPassword!' in the Password field
    await loginPage.passwordInput.fill('SuperSecretPassword!');
    await loginPage.assertPasswordValue('SuperSecretPassword!');
    // 5. Click the Login button
    await loginPage.loginButton.click();
    await secureArea.assertHeadingVisible();
    await expect(secureArea.flashMessage).toContainText('You logged into a secure area!');
    // 6. Click the Logout button
    await secureArea.logout();
    await loginPage.assertHeadingVisible();
    await expect(loginPage.flashMessage).toContainText('You logged out of the secure area!');
  });
});
