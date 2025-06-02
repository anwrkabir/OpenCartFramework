# Test info

- Name:  User Logout
- Location: C:\OpenCartPlaywright\tests\Logout.spec.ts:57:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input-email')
    - waiting for" http://localhost/opencart/upload/" navigation to finish...
    - navigated to "http://localhost/opencart/upload/"

    at Login.setEmail (C:\OpenCartPlaywright\pages\Login.ts:29:34)
    at C:\OpenCartPlaywright\tests\Logout.spec.ts:62:11
```

# Test source

```ts
   1 | import { Page, Locator } from "@playwright/test";
   2 |
   3 | export class Login {
   4 |   private readonly page: Page;
   5 |
   6 |   //locator
   7 |
   8 |   private readonly inputEmailAddress: Locator;
   9 |   private readonly inputPasswrod: Locator;
  10 |   private readonly buttonLogin: Locator;
  11 |   private readonly errorMessageForLoginFailure: Locator;
  12 |
  13 |   //constructor
  14 |
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.inputEmailAddress = page.locator("#input-email");
  18 |     this.inputPasswrod = page.locator("#input-password");
  19 |     this.buttonLogin = page.locator("input[value='Login']"); //"Warning: No match for E-Mail Address and/or Password."
  20 |     this.errorMessageForLoginFailure = page.locator("div.alert");
  21 |   }
  22 |   //method
  23 |   /***
  24 |    * sets the email address in the Recurring Customer Log in field
  25 |    * @param email (registered email) enter
  26 |    * return: void (Promise<void>)
  27 |    */
  28 |   async setEmail(email: string): Promise<void> {
> 29 |     await this.inputEmailAddress.fill(email);
     |                                  ^ Error: locator.fill: Target page, context or browser has been closed
  30 |   }
  31 |
  32 |   /***
  33 |    * sets the password in the Recurring Customer login field
  34 |    * @param password( registered password) to enter
  35 |    * return: void (Promise<void>)
  36 |    */
  37 |   async setPassword(password: string): Promise<void> {
  38 |     await this.inputPasswrod.fill(password);
  39 |   }
  40 |
  41 |   /***
  42 |    * click on the login in the Recurring Customer login field
  43 |    * @param :null
  44 |    * return: void (Promise<void>)
  45 |    */
  46 |   async clickLogin(): Promise<void> {
  47 |     await this.buttonLogin.click();
  48 |   }
  49 |
  50 |   /***
  51 |    * Perform complete login in the Recurring Customer login field
  52 |    * @param email (registered email) enter
  53 |    * @param password( registered password) to enter
  54 |    * return: void (Promise<void>)
  55 |    */
  56 |   async login(email: string, password: string): Promise<void> {
  57 |     await this.setEmail(email);
  58 |     await this.setPassword(password);
  59 |     await this.clickLogin();
  60 |   }
  61 |
  62 |   /***
  63 |    * Error message for login failure
  64 |    * For negative testing validation
  65 |    */
  66 |   async getloginErrorMessage(): Promise<null | string> {
  67 |     return this.errorMessageForLoginFailure.textContent();
  68 |   }
  69 | }
  70 |
```