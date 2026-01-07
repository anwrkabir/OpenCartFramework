# Test info

- Name: 1.User login test @master @sanity  @regression
- Location: C:\OpenCartPlaywright\tests\Login.spec.ts:44:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at C:\OpenCartPlaywright\tests\Login.spec.ts:59:20
```

# Test source

```ts
   1 | /**
   2 |  * 1. Test Case: Login with Valid Credentials
   3 |  *
   4 |  * Tags: @master @sanity @regression
   5 |  *
   6 |  * steps:
   7 |  * 1) Navigate tot the application URL
   8 |  * 2) Navigate to Login Page via Home Page
   9 |  * 3) Enter valid credentials and login
  10 |  * 4) verify successful login by checking 'My Account' page presence
  11 |  *
  12 |  **/
  13 |
  14 | import { test, expect } from "@playwright/test";
  15 | import { HomePage } from "../pages/HomePage";
  16 | import { Login } from "../pages/Login";
  17 | import { MyAccountPage } from "../pages/MyAccountPage";
  18 | import { TestConfig } from "../test.config";
  19 |
  20 | let config: TestConfig;
  21 | let homePage: HomePage;
  22 | let loginPage: Login;
  23 | let myAccountPage: MyAccountPage;
  24 |
  25 | //declaration of hooks
  26 |
  27 | test.beforeEach(async ({ page }) => {
  28 |   //Loading config (test.config.ts url and navigate to base url)
  29 |   config = new TestConfig();
  30 |   await page.goto(config.appUrl);
  31 |
  32 |   //initialize page objects
  33 |   homePage = new HomePage(page);
  34 |   loginPage = new Login(page);
  35 |   myAccountPage = new MyAccountPage(page);
  36 | });
  37 |
  38 | //Optional cleanup after each test (hook)
  39 |
  40 | test.afterEach("", async ({ page }) => {
  41 |   await page.close(); // close browser tab
  42 | });
  43 |
  44 | test("1.User login test @master @sanity  @regression", async ({ page }) => {
  45 |   //Navigate to login page via Home Page
  46 |   await homePage.clickMyAccount();
  47 |   await homePage.clickLogin();
  48 |
  49 |   //Enter valid credentials and login
  50 |   await loginPage.setEmail(config.email);
  51 |   await loginPage.setPassword(config.password);
  52 |   await loginPage.clickLogin();
  53 |
  54 |   //Alternatively for login
  55 |   //await loginPage.login(config.email, config.password);
  56 |
  57 |   //verify successful login by checking 'My Account' page presence
  58 |   const isLogged = await myAccountPage.isMyAccountPageExists();
> 59 |   expect(isLogged).toBeTruthy();
     |                    ^ Error: expect(received).toBeTruthy()
  60 | });
  61 |
```