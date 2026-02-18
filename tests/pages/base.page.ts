// BasePage: common elements and helpers for all pages
import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
  }

  async getFlashMessageText() {
    return this.flashMessage.textContent();
  }
}
