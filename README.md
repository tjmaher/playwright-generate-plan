# Playwright Login Test Automation

## Overview

This project uses **Playwright** and **TypeScript** to automate end-to-end tests for the login functionality at [the-internet.herokuapp.com/login](https://the-internet.herokuapp.com/login). Tests are generated and managed using the **playwright-test-generator** and follow best practices with page objects and a base page for common elements.

## Features

- Positive and negative login scenarios
- Page Object Model: `BasePage`, `LoginPage`, `SecureAreaPage`
- Automatic screenshots and video recording for all tests
- Tests for login, logout, and error handling
- Seed file for consistent test setup



## Official Documentation Links

- [Playwright Overview](https://playwright.dev/docs/intro)
- [Playwright Test Runner](https://playwright.dev/docs/test-intro)
- [Playwright Configuration](https://playwright.dev/docs/test-configuration)
- [Page Object Model](https://playwright.dev/docs/test-pom)
- [Screenshots](https://playwright.dev/docs/test-artifacts#screenshots)
- [Video Recording](https://playwright.dev/docs/test-artifacts#videos)
- [HTML Reporter](https://playwright.dev/docs/test-reporters#html-reporter)
- [Trace Viewer](https://playwright.dev/docs/trace-viewer)
- [Playwright with TypeScript](https://playwright.dev/docs/typescript)
- [Playwright Test Generator (Codegen)](https://playwright.dev/docs/codegen)


## Structure

- base.page.ts: Common elements and helpers
- login.page.ts: Login form actions and assertions
- secure-area.page.ts: Secure area actions and assertions
- login-positive.spec.ts: Positive login/logout flow
- login-negative.spec.ts: Negative login scenarios
- seed.spec.ts: Seed test for logged-in user
- playwright.config.ts: Playwright configuration (screenshots, video, etc.)
- login.plan.md: Test plan

## Running Tests

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run all tests:**
   ```bash
   npx playwright test
   ```

3. **View HTML report:**
   ```bash
   npx playwright show-report
   ```

## Configuration

- Screenshots are captured for every test (`screenshot: 'on'`)
- Video is recorded for every test (`video: 'on'`)
- All configuration is in playwright.config.ts

## Customization

- Update page objects in pages for new elements or flows
- Add new test scenarios in login.plan.md and generate tests

---

## Prompts Used

### Initial Test Plan Prompt


"Using Playwright and playwright-test-planner, outline positive and negative test cases for https://the-internet.herokuapp.com/login
* "Go to https://the-internet.herokuapp.com/login and check that the title is "Login Page".
* "Login as tomsmith / SuperSecretPassword!
* "Once on Secure Area, select the Logout button and make sure that when back on the Login Page, that "You logged out of the secure area!" appears".


### Test Generation Prompt

"Using Playwright + TypeScript and playwright-test-generator, generate the tests for specs/login.plan.md. Refactor locators into page objects, and common elements into a base page".


### Additional Prompts

- Run tests
- Can you do screenshots at the end whether it passed or failed?
- Can we turn on video when debugging?
- Turn video on all the time
- Change this.heading = page.getByRole('heading', { name: 'Secure Area' }); to "h2".
- Generate a README based on the prompts mentioned
- Add in the prompts used to the README

