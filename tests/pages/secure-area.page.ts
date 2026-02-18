// SecureAreaPage: secure area and logout
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class SecureAreaPage extends BasePage {
  readonly heading: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h2');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async assertHeadingVisible() {
    await expect(this.heading).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
