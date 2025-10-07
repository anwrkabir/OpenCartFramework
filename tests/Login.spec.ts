/**
 * 1. Test Case: Login with Valid Credentials
 *
 * Tags: @master @sanity @regression
 *
 * steps:
 * 1) Navigate tot the application URL
 * 2) Navigate to Login Page via Home Page
 * 3) Enter valid credentials and login
 * 4) verify successful login by checking 'My Account' page presence
 *
 **/

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { Login } from "../pages/Login";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from "../test.config";

let config: TestConfig;
let homePage: HomePage;
let loginPage: Login;
let myAccountPage: MyAccountPage;

//declaration of hooks

test.beforeEach(async ({ page }) => {
  //Loading config (test.config.ts url and navigate to base url)
  config = new TestConfig();
  await page.goto(config.appUrl);

  //initialize page objects
  homePage = new HomePage(page);
  loginPage = new Login(page);
  myAccountPage = new MyAccountPage(page);
});

//Optional cleanup after each test (hook)

test.afterEach("", async ({ page }) => {
  await page.close(); // close browser tab
});

test("1.User login test @master @sanity  @regression", async ({ page }) => {
  //Navigate to login page via Home Page
  await homePage.clickMyAccount();
  await homePage.clickLogin();

  //Enter valid credentials and login
  await loginPage.setEmail(config.email);
  await loginPage.setPassword(config.password);
  await loginPage.clickLogin();

  //Alternatively for login
  //await loginPage.login(config.email, config.password);

  //verify successful login by checking 'My Account' page presence
  const isLogged = await myAccountPage.isMyAccountPageExists();
  expect(isLogged).toBeTruthy();
});
