# Test info

- Name: End to End Test
- Location: C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:32:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

    at C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:36:16
```

# Test source

```ts
   1 | //7. End to End Test
   2 |
   3 | /**
   4 |  * 7. End to End Test
   5 |  * 
   6 |  * purpose: This test will simulates a complete user flow on an e-commerce site.
   7 |  * 
   8 |  * steps:
   9 |  * 1) Register a new account
   10 |  * 2) Logout after registration
   11 |  * 3) Login with the same account
   12 |  * 4) Search for a product and add it to the shopping cart
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
>  36 |     await page.goto(config.appUrl);
      |                ^ Error: page.goto: Target page, context or browser has been closed
   37 |
   38 |     //1) Register a new account and capture the genearted email
   39 |     let registeredEmail = await performRegistration(page);
   40 |     console.log(`Registration is completed:  ${registeredEmail}`);
   41 |
   42 |    
   43 |  //2) Logout after registration:
   44 |     await performLogout(page);
   45 |     console.log(" Logout is completed after registration")
   46 |  //3) Login with the same account
   47 |
   48 |    await performLogin( page, registeredEmail);
   49 |    console.log(" Login with registered email is completed")
   50 |
   51 |     await performLogout(page);
   52 |     console.log(" Logout is completed after relogin")
   53 |
   54 |  // 4) Search for a product and add it to the shopping cart
   55 |
   56 |   await addProductToCart(page);
   57 |   console.log("Product added to the cart")
   58 |
   59 |   
   60 |  //5) Verify cart contents
   61 |   await verifyShoppingCart(page)
   62 |   console.log("shopping cart verification completed")
   63 |  //6) Attempt checkout ( disabled since feature isnt available on demo site)
   64 |
   65 |
   66 | })
   67 |
   68 |
   69 |
   70 |
   71 |
   72 |    // created a function to create a registration 
   73 |     async function performRegistration(page:Page):Promise<string>{
   74 |          const homePage = new HomePage( page);
   75 |         await  homePage.clickMyAccount();
   76 |         await  homePage.clickRegister();
   77 |
   78 |         const registrationPage = new RegistrationPage(page);
   79 |         //Fill in registration deatils with random data
   80 |        
   81 |          await registrationPage.setFirstName(randomDataGenerator.getFistName());
   82 |          await registrationPage.setLastName(randomDataGenerator.getLastName());
   83 |
   84 |          let email = randomDataGenerator.getemail()
   85 |          await registrationPage.setEmail(email);
   86 |          await registrationPage.setTelNum(randomDataGenerator.getPhoneNumber());
   87 |     
   88 |          //const password = randomDataGenerator.getPassword();
   89 |          const password = "test123"; // this password will be used in the login
   90 |          
   91 |          await registrationPage.setPassword(password);
   92 |          await registrationPage.setConfirmPassword(password);
   93 |     
   94 |          await registrationPage.chkPrivacyPolicyCheckbox();
   95 |          await registrationPage.clickContunue();
   96 |     
   97 |          //validate confirmation message
   98 |          const confirmationMessage = await registrationPage.getConfirmationMessage();
   99 |          await expect(confirmationMessage).toContain("Your Account Has Been Created!")
  100 |          return email ;// this email will be used in the login
  101 |
  102 |     }
  103 |   
  104 |     // created a function to create a login
  105 |     async function performLogin(page:Page,email:string){
  106 |          const homePage = new HomePage( page);
  107 |
  108 |          await homePage.clickMyAccount();
  109 |          await homePage.clickLogin();
  110 |       
  111 |         //Enter valid credentials and login
  112 |         const loginPage = new Login(page);
  113 |         await loginPage.setEmail(email);
  114 |         await loginPage.setPassword("test123");
  115 |         await loginPage.clickLogin();
  116 |       
  117 |         //Alternatively for login
  118 |         //await loginPage.login(config.email, config.password);
  119 |         const myAccountPage = new MyAccountPage(page);
  120 |         //verify successful login by checking 'My Account' page presence
  121 |         const isLogged = await myAccountPage.isMyAccountPageExists();
  122 |         expect(isLogged).toBeTruthy();
  123 |
  124 |     }
  125 |     
  126 |
  127 |     // created a function to create a logout
  128 |     async function performLogout(page:Page):Promise<void>{
  129 |
  130 |     const myAccountPage  = new MyAccountPage(page);
  131 |     // 4) Verify "My Account" page
  132 |   /*    const isAccountPageExist = await  myAccountPage.isMyAccountPageExists();
  133 |      expect( await isAccountPageExist).toBeTruthy();
  134 |          */  
  135 |     const  logOut:LogOutPage =await myAccountPage.clickLogOut();
  136 |      expect( await logOut.isContunueButtonVisible).toBeTruthy()
```