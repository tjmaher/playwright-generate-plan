// LoginPage: login form and actions
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly heading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Login Page' });
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: /login/i });
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertHeadingVisible() {
    await expect(this.heading).toBeVisible();
  }

  async assertUsernameValue(value: string) {
    await expect(this.usernameInput).toHaveValue(value);
  }

  async assertPasswordValue(value: string) {
    await expect(this.passwordInput).toHaveValue(value);
  }
}
