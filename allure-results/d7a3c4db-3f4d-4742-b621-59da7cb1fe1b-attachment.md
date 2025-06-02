# Test info

- Name: User registration test
- Location: C:\OpenCartPlaywright\tests\AccountReg_del.spec.ts:22:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: {Symbol(async_id_symbol): 5251, Symbol(trigger_async_id_symbol): 3963, Symbol(kResourceStore): undefined}
    at C:\OpenCartPlaywright\tests\AccountReg_del.spec.ts:41:58
```

# Page snapshot

```yaml
- navigation:
  - button "$ Currency ":
    - strong: $
    - text: Currency 
  - list:
    - listitem:
      - link "":
        - /url: http://localhost/opencart/upload/index.php?route=information/contact
      - text: "123456789"
    - listitem:
      - link " My Account":
        - /url: http://localhost/opencart/upload/index.php?route=account/account
    - listitem:
      - link " Wish List (0)":
        - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
    - listitem:
      - link " Shopping Cart":
        - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
    - listitem:
      - link " Checkout":
        - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
- banner:
  - link "Your Store":
    - /url: http://localhost/opencart/upload/index.php?route=common/home
    - img "Your Store"
  - textbox "Search"
  - button ""
  - button " 0 item(s) - $0.00"
- navigation:
  - list:
    - listitem:
      - link "Desktops":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
    - listitem:
      - link "Laptops & Notebooks":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
    - listitem:
      - link "Components":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
    - listitem:
      - link "Tablets":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
    - listitem:
      - link "Software":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
    - listitem:
      - link "Phones & PDAs":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
    - listitem:
      - link "Cameras":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
    - listitem:
      - link "MP3 Players":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
- list:
  - listitem:
    - link "":
      - /url: http://localhost/opencart/upload/index.php?route=common/home
  - listitem:
    - link "Account":
      - /url: http://localhost/opencart/upload/index.php?route=account/account
  - listitem:
    - link "Register":
      - /url: http://localhost/opencart/upload/index.php?route=account/register
- heading "Register Account" [level=1]
- paragraph:
  - text: If you already have an account with us, please login at the
  - link "login page":
    - /url: http://localhost/opencart/upload/index.php?route=account/login
  - text: .
- group "Your Personal Details":
  - text: Your Personal Details * First Name
  - textbox "* First Name"
  - text: "* Last Name"
  - textbox "* Last Name"
  - text: "* E-Mail"
  - textbox "* E-Mail"
  - text: "* Telephone"
  - textbox "* Telephone"
- group "Your Password":
  - text: Your Password * Password
  - textbox "* Password"
  - text: "* Password Confirm"
  - textbox "* Password Confirm"
- group "Newsletter":
  - text: Newsletter Subscribe
  - radio "Yes"
  - text: "Yes"
  - radio "No" [checked]
  - text: "No"
- text: I have read and agree to the
- link "Privacy Policy":
  - /url: http://localhost/opencart/upload/index.php?route=information/information/agree&information_id=3
- checkbox
- button "Continue"
- complementary:
  - link "Login":
    - /url: http://localhost/opencart/upload/index.php?route=account/login
  - link "Register":
    - /url: http://localhost/opencart/upload/index.php?route=account/register
  - link "Forgotten Password":
    - /url: http://localhost/opencart/upload/index.php?route=account/forgotten
  - link "My Account":
    - /url: http://localhost/opencart/upload/index.php?route=account/account
  - link "Address Book":
    - /url: http://localhost/opencart/upload/index.php?route=account/address
  - link "Wish List":
    - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
  - link "Order History":
    - /url: http://localhost/opencart/upload/index.php?route=account/order
  - link "Downloads":
    - /url: http://localhost/opencart/upload/index.php?route=account/download
  - link "Recurring payments":
    - /url: http://localhost/opencart/upload/index.php?route=account/recurring
  - link "Reward Points":
    - /url: http://localhost/opencart/upload/index.php?route=account/reward
  - link "Returns":
    - /url: http://localhost/opencart/upload/index.php?route=account/return
  - link "Transactions":
    - /url: http://localhost/opencart/upload/index.php?route=account/transaction
  - link "Newsletter":
    - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
    - listitem:
      - link "Delivery Information":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
    - listitem:
      - link "Privacy Policy":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
    - listitem:
      - link "Terms & Conditions":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: http://localhost/opencart/upload/index.php?route=information/contact
    - listitem:
      - link "Returns":
        - /url: http://localhost/opencart/upload/index.php?route=account/return/add
    - listitem:
      - link "Site Map":
        - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
    - listitem:
      - link "Gift Certificates":
        - /url: http://localhost/opencart/upload/index.php?route=account/voucher
    - listitem:
      - link "Affiliate":
        - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
    - listitem:
      - link "Specials":
        - /url: http://localhost/opencart/upload/index.php?route=product/special
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: http://localhost/opencart/upload/index.php?route=account/account
    - listitem:
      - link "Order History":
        - /url: http://localhost/opencart/upload/index.php?route=account/order
    - listitem:
      - link "Wish List":
        - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
    - listitem:
      - link "Newsletter":
        - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: http://www.opencart.com
    - text: Your Store © 2025
```

# Test source

```ts
   1 | /****
   2 |  * Test Case: Account Registration
   3 |  * 
   4 |  * Tags: @master @sanity @regression
   5 |  * 
   6 |  * Steps:
   7 |  * 1) Navigate to application url
   8 |  * 2) Go to 'My Account' and Click 'Register'
   9 |  * 3) Fill in registration details and submit the form
  10 |  * 5) Validate the confirmation message
  11 |  * 
  12 | */
  13 |
  14 |
  15 | import {test, expect} from "@playwright/test"
  16 | import { HomePage } from "../pages/HomePage"
  17 | import { RegistrationPage } from "../pages/RegistrationPage" ;
  18 | import { dataProvider } from "../utils/dataProvider";
  19 | import { randomDataGenerator } from "../utils/randomDataGenerator"; 
  20 | import { TestConfig } from "../test.config";
  21 |
  22 | test("User registration test",async ({page})=>{
  23 |
  24 |     //Launch the config file and create object from the relevant page class    
  25 |     //create object to access to the test.config.ts
  26 |     const config = new TestConfig();
  27 |     await page.goto (config.appUrl);
  28 |
  29 |     //create object to access to the account page
  30 |     const homePage = new HomePage(page);
  31 |     expect(await homePage.isHomePageExist()).toBe(true);
  32 |     await homePage.clickMyAccount();
  33 |     await homePage.clickRegister();
  34 |     
  35 |     //create object to access to the Registration page
  36 |     const registrationPage = new RegistrationPage(page);
  37 |     
  38 |
  39 |     //using the object of the page to perform expected test action
  40 |
> 41 |     expect(registrationPage.isFirstNameElementVisible()).toBe(true);
     |                                                          ^ Error: expect(received).toBe(expected) // Object.is equality
  42 |
  43 |     await registrationPage.setFirstName(randomDataGenerator.getFistName());
  44 |     
  45 |     await registrationPage.setLastName(randomDataGenerator.getLastName());
  46 |     await registrationPage.setEmail(randomDataGenerator.getemail());
  47 |     await registrationPage.setTelNum(randomDataGenerator.getPhoneNumber());
  48 |
  49 |     const passwrod = await randomDataGenerator.getPassword();
  50 |     await registrationPage.setPassword(passwrod);
  51 |     await registrationPage.setConfirmPassword(passwrod);
  52 |
  53 |     await  registrationPage.chkPrivacyPolicyCheckbox();
  54 |
  55 |     await page.waitForTimeout(3000);
  56 |     await  registrationPage.clickContunue();
  57 |
  58 |     await page.waitForTimeout(3000);
  59 |     const confirmationMessage =  await registrationPage.getConfirmationMessage();
  60 |     expect(confirmationMessage).toContain("Your Account Has Been Created!");
  61 |    
  62 |     
  63 |
  64 |
  65 | })
  66 |
```