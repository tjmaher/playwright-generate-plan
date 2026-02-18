# Login Page Test Plan

## Application Overview

Test plan for the login functionality at https://the-internet.herokuapp.com/login, covering positive and negative scenarios including login, logout, and error handling.

## Test Scenarios

### 1. Login and Logout Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Positive Login and Logout Flow

**File:** `tests/login-positive.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/login
    - expect: The page loads successfully.
  2. Verify the visible heading is 'Login Page'
    - expect: The heading 'Login Page' is present.
  3. Enter 'tomsmith' in the Username field
    - expect: Username field contains 'tomsmith'.
  4. Enter 'SuperSecretPassword!' in the Password field
    - expect: Password field contains 'SuperSecretPassword!'.
  5. Click the Login button
    - expect: Redirected to the Secure Area page.
    - expect: A message 'You logged into a secure area!' is displayed.
  6. Click the Logout button
    - expect: Redirected back to the Login Page.
    - expect: A message 'You logged out of the secure area!' is displayed.

#### 1.2. Negative Login Scenarios

**File:** `tests/login-negative.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/login
    - expect: The page loads successfully.
  2. Enter invalid username 'wronguser' and invalid password 'wrongpass'
    - expect: An error message 'Your username is invalid!' is displayed.
  3. Leave both Username and Password fields blank and click Login
    - expect: An error message 'Your username is invalid!' is displayed.
