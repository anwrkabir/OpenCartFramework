# Test info

- Name:  User Logout
- Location: C:\OpenCartPlaywright\tests\Logout.spec.ts:58:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: [Function isHomePageExist]
    at C:\OpenCartPlaywright\tests\Logout.spec.ts:85:48
```

# Test source

```ts
   1 |
   2 | /**
   3 |  * Test Case: User Logout
   4 |  * 
   5 |  * Tags: @master @regression
   6 |  * 
   7 |  * Steps:
   8 |  * 
   9 |  * 1) Navigate to the application 
  10 |  * 2)  Go to Login page from the Home Page
  11 |  * 3) Login with valid credentials 
  12 |  * 4) Verify "My Account" page
  13 |  * 5) Click on Logout link
  14 |  * 6) Click on  Continue button
  15 |  * 7) verify user is redirected to Home Page
  16 |  *  
  17 |  * **/
  18 |
  19 | import { TestConfig } from "../test.config";
  20 | import {test, expect} from "@playwright/test";
  21 | import { Login } from "../pages/Login";
  22 | import { HomePage } from "../pages/HomePage";
  23 | import { MyAccountPage } from "../pages/MyAccountPage";
  24 | import { LogOutPage } from "../pages/LogOutPage";
  25 | import { log } from "console";
  26 |
  27 |
  28 | //declare global variable
  29 |
  30 | let config: TestConfig;
  31 | let login: Login;
  32 | let homePage: HomePage;
  33 | let myAccountPage :MyAccountPage;
  34 | let logOut:LogOutPage;
  35 |
  36 |
  37 | // Creating hook:
  38 | test.beforeEach("",async({page})=>{
  39 |
  40 | // 1) Navigate to the application 
  41 | config = new TestConfig();
  42 | page.goto(config.appUrl);
  43 |
  44 | // Creating objects
  45 | login = new Login(page);
  46 | homePage = new HomePage(page);
  47 | myAccountPage = new MyAccountPage(page);
  48 | logOut = new LogOutPage(page);
  49 |
  50 |
  51 | } )
  52 |
  53 | test.afterEach("",async({page})=>{
  54 |     
  55 |     await page.close();
  56 | } )
  57 |
  58 | test(" User Logout", async ({page})=>{
  59 |     
  60 |     // 2)  Go to Login page from the Home Page
  61 |     await homePage.clickMyAccount();
  62 |     await homePage.clickLogin();
  63 |
  64 |
  65 |
  66 |      //3) Login with valid credentials 
  67 |     await login.setEmail(config.email);
  68 |     await login.setPassword(config.password);
  69 |     await login.clickLogin();
  70 |
  71 |  
  72 |     // 4) Verify "My Account" page
  73 |      const isAccountPageExist = await  myAccountPage.isMyAccountPageExists();
  74 |      expect(isAccountPageExist).toBe(true);
  75 |      
  76 |      
  77 |      // * 5) Click on Logout link
  78 |      await myAccountPage.clickLogOut();
  79 |
  80 |      //* 6) Click on  Continue button on logout page
  81 |      await logOut.clickContiue();
  82 |   
  83 |   
  84 |      //* 7) verify user is redirected to Home Page
> 85 |         expect(await homePage.isHomePageExist).toBe(true);
     |                                                ^ Error: expect(received).toBe(expected) // Object.is equality
  86 |
  87 |
  88 |         await page.waitForTimeout(3000);
  89 |    
  90 |     
  91 |
  92 | })
  93 |
  94 |
  95 |
```