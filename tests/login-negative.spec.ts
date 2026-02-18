// spec: specs/login.plan.md
// seed: tests/seed.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.describe('Login and Logout Functionality', () => {
  test('Negative Login Scenarios', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to https://the-internet.herokuapp.com/login
    await loginPage.goto();
    // 2. Enter invalid username 'wronguser' and invalid password 'wrongpass'
    await loginPage.login('wronguser', 'wrongpass');
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
    // 3. Leave both Username and Password fields blank and click Login
    await loginPage.usernameInput.fill('');
    await loginPage.passwordInput.fill('');
    await loginPage.loginButton.click();
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
  });
});
