# Test info

- Name: End to End Test
- Location: C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:32:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at performLogout (C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:113:40)
    at C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:44:5
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
    - link "Success":
      - /url: http://localhost/opencart/upload/index.php?route=account/success
- heading "Your Account Has Been Created!" [level=1]
- paragraph: Congratulations! Your new account has been successfully created!
- paragraph: You can now take advantage of member privileges to enhance your online shopping experience with us.
- paragraph: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
- paragraph:
  - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
  - link "contact us":
    - /url: http://localhost/opencart/upload/index.php?route=information/contact
  - text: .
- link "Continue":
  - /url: http://localhost/opencart/upload/index.php?route=account/account
- complementary:
  - link "My Account":
    - /url: http://localhost/opencart/upload/index.php?route=account/account
  - link "Edit Account":
    - /url: http://localhost/opencart/upload/index.php?route=account/edit
  - link "Password":
    - /url: http://localhost/opencart/upload/index.php?route=account/password
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
  - link "Logout":
    - /url: http://localhost/opencart/upload/index.php?route=account/logout
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
   13 |  * 5) Verify cart contents
   14 |  * 6) Attempt checkout ( disabled since feature isnt available on demo site)
   15 | **/
   16 |
   17 |
   18 | //import necessary classes
   19 | import{test,expect,Page} from "@playwright/test";
   20 | import { TestConfig } from "../test.config";
   21 | import { randomDataGenerator } from "../utils/randomDataGenerator";
   22 | import { HomePage } from "../pages/HomePage";
   23 | import { RegistrationPage } from "../pages/RegistrationPage";
   24 | import { MyAccountPage } from "../pages/MyAccountPage";
   25 | import { LogOutPage } from "../pages/LogOutPage";
   26 | import { Login } from "../pages/Login";
   27 | import { SearchResultPage } from "../pages/SearchResultsPage";
   28 | import { ProductPage } from "../pages/ProductPage";
   29 | import { ShoppingCartPage } from "../pages/ShoppingCartPage";
   30 |
   31 |
   32 | test("End to End Test", async({page})=>{
   33 |     
   34 |     //navigate to the homePage in the test apllication
   35 |     const config = new TestConfig();
   36 |     await page.goto(config.appUrl);
   37 |
   38 |     //1) Register a new account and capture the genearted email
   39 |     let registeredEmail = await performRegistration(page);
   40 |     console.log(`Registration is completed:  ${registeredEmail}`);
   41 |
   42 |    
   43 |  //2) Logout after registration:
   44 |     await performLogout(page);
   45 |  //3) Login with the same account
   46 |  // 4) Search for a product and add it to the shopping cart
   47 |  //5) Verify cart contents
   48 |  //6) Attempt checkout ( disabled since feature isnt available on demo site)
   49 |
   50 |
   51 | })
   52 |
   53 |
   54 |
   55 |
   56 |
   57 |    // created a function to create a registration 
   58 |     async function performRegistration(page:Page):Promise<string>{
   59 |          const homePage = new HomePage( page);
   60 |         await  homePage.clickMyAccount();
   61 |         await  homePage.clickRegister();
   62 |
   63 |         const registrationPage = new RegistrationPage(page);
   64 |         //Fill in registration deatils with random data
   65 |        
   66 |          await registrationPage.setFirstName(randomDataGenerator.getFistName());
   67 |          await registrationPage.setLastName(randomDataGenerator.getLastName());
   68 |
   69 |          let email = randomDataGenerator.getemail()
   70 |          await registrationPage.setEmail(email);
   71 |          await registrationPage.setTelNum(randomDataGenerator.getPhoneNumber());
   72 |     
   73 |          //const password = randomDataGenerator.getPassword();
   74 |          const password = "test123"; // this password will be used in the login
   75 |          
   76 |          await registrationPage.setPassword(password);
   77 |          await registrationPage.setConfirmPassword(password);
   78 |     
   79 |          await registrationPage.chkPrivacyPolicyCheckbox();
   80 |          await registrationPage.clickContunue();
   81 |     
   82 |          //validate confirmation message
   83 |          const confirmationMessage = await registrationPage.getConfirmationMessage();
   84 |          await expect(confirmationMessage).toContain("Your Account Has Been Created!")
   85 |          return email ;// this email will be used in the login
   86 |
   87 |     }
   88 |   
   89 |     async function performLogin(page:Page,email:string){
   90 |          const homePage = new HomePage( page);
   91 |         await homePage.clickLogin();
   92 |       
   93 |         //Enter valid credentials and login
   94 |         const loginPage = new Login(page);
   95 |         await loginPage.setEmail(email);
   96 |         await loginPage.setPassword("test123");
   97 |         await loginPage.clickLogin();
   98 |       
   99 |         //Alternatively for login
  100 |         //await loginPage.login(config.email, config.password);
  101 |         const myAccountPage = new MyAccountPage(page);
  102 |         //verify successful login by checking 'My Account' page presence
  103 |         const isLogged = await myAccountPage.isMyAccountPageExists();
  104 |         expect(isLogged).toBeTruthy();
  105 |
  106 |     }
  107 |     
  108 |     async function performLogout(page:Page){
  109 |
  110 |     const myAccountPage  = new MyAccountPage(page);
  111 |     // 4) Verify "My Account" page
  112 |      const isAccountPageExist = await  myAccountPage.isMyAccountPageExists();
> 113 |      expect( await isAccountPageExist).toBeTruthy();
      |                                        ^ Error: expect(received).toBeTruthy()
  114 |      
  115 |      
  116 |      // * 5) Click on Logout link and it will return logOut page
  117 |      // storing the object to use logOut page methods.
  118 |          // this is called chaining concept
  119 |      
  120 |     const  logOut =await myAccountPage.clickLogOut();
  121 |      expect( await logOut.isContunueButtonVisible).toBeTruthy()
  122 |
  123 |      //* 6) Click on  Continue button on logout page and it will return homePage
  124 |      // storing the homePage object to use HomePage page methods.
  125 |      // this is called chaining concept
  126 |      const homePage = await logOut.clickContiue();
  127 |   
  128 |   
  129 |      //* 7) verify user is redirected to Home Page
  130 |         expect(await homePage.isHomePageExist).toBeTruthy();
  131 |
  132 |
  133 |         await page.waitForTimeout(3000);
  134 |
  135 |     }
  136 |
  137 |
```