//7. End to End Test

/**
 * 7. End to End Test
 * 
 * tag: @end-to-end
 * 
 * purpose: This test will simulates a complete user flow on an e-commerce site.
 * 
 * steps:
 * 1) Register a new account
 * 2) Logout after registration
 * 3) Login with the same account
 * 4) Search for a product and add it to the shopping cart
 * 5) Verify cart contents
 * 6) Attempt checkout ( disabled since feature isnt available on demo site)
**/


//import necessary classes
import{test,expect,Page} from "@playwright/test";
import { TestConfig } from "../test.config";
import { randomDataGenerator } from "../utils/randomDataGenerator";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { LogOutPage } from "../pages/LogOutPage";
import { Login } from "../pages/Login";
import { SearchResultPage } from "../pages/SearchResultsPage";
import { ProductPage } from "../pages/ProductPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";


test("End to End Test @end-to-end @master", async({page})=>{
    
    //navigate to the homePage in the test apllication
    const config = new TestConfig();
    await page.goto(config.appUrl);

    //1) Register a new account and capture the genearted email
    let registeredEmail = await performRegistration(page);
    console.log(`✅Registration is completed:  ${registeredEmail}`);

    console.log("✅ Product added to the cart!");

   
 //2) Logout after registration:
    await performLogout(page);
    console.log(" ✅ Logout is completed after registration")
 //3) Login with the same account

   await performLogin( page, registeredEmail);
   console.log("✅ Login with registered email is completed")

    await performLogout(page);
    console.log("✅ Logout is completed after relogin")

 // 4) Search for a product and add it to the shopping cart

  await addProductToCart(page);
  console.log("🛒 Product added to the cart")


 //5) Verify cart contents
  await verifyShoppingCart(page)
  console.log("🚀shopping cart verification completed")
 //6) Attempt checkout ( disabled since feature isnt available on demo site)


})





   // created a function to create a registration 
    async function performRegistration(page:Page):Promise<string>{
         const homePage = new HomePage( page);
        await  homePage.clickMyAccount();
        await  homePage.clickRegister();

        const registrationPage = new RegistrationPage(page);
        //Fill in registration deatils with random data
       
         await registrationPage.setFirstName(randomDataGenerator.getFistName());
         await registrationPage.setLastName(randomDataGenerator.getLastName());

         let email = randomDataGenerator.getemail()
         await registrationPage.setEmail(email);
         await registrationPage.setTelNum(randomDataGenerator.getPhoneNumber());
    
         //const password = randomDataGenerator.getPassword();
         const password = "test123"; // this password will be used in the login
         
         await registrationPage.setPassword(password);
         await registrationPage.setConfirmPassword(password);
    
         await registrationPage.chkPrivacyPolicyCheckbox();
         await registrationPage.clickContunue();
    
         //validate confirmation message
         const confirmationMessage = await registrationPage.getConfirmationMessage();
         await expect(confirmationMessage).toContain("Your Account Has Been Created!")
         return email ;// this email will be used in the login

    }
  
    // created a function to create a login
    async function performLogin(page:Page,email:string){
         const homePage = new HomePage( page);

         await homePage.clickMyAccount();
         await homePage.clickLogin();
      
        //Enter valid credentials and login
        const loginPage = new Login(page);
        await loginPage.setEmail(email);
        await loginPage.setPassword("test123");
        await loginPage.clickLogin();
      
        //Alternatively for login
        //await loginPage.login(config.email, config.password);
        const myAccountPage = new MyAccountPage(page);
        //verify successful login by checking 'My Account' page presence
        const isLogged = await myAccountPage.isMyAccountPageExists();
        expect(isLogged).toBeTruthy();

    }
    

    // created a function to create a logout
    async function performLogout(page: Page): Promise<void> {
      const myAccountPage = new MyAccountPage(page);
      // 4) Verify "My Account" page
      /*    const isAccountPageExist = await  myAccountPage.isMyAccountPageExists();
     expect( await isAccountPageExist).toBeTruthy();
         */
      const logOut: LogOutPage = await myAccountPage.clickLogOut();
      expect(await logOut.isContunueButtonVisible).toBeTruthy();

      const homePage = await logOut.clickContiue();

      //* 7) verify user is redirected to Home Page
      expect(await homePage.isHomePageExist).toBeTruthy();

    // await page.waitForTimeout(3000);
    }

    // created a function to add product to cart
    async function addProductToCart(page: Page) {
      // 2) Enter the existing product name in the search box( using the config parameter)
      const homePage = new HomePage(page);
      const config = new TestConfig();
      const searchResultPage = new SearchResultPage(page);

      homePage.enterProductName(config.productName);
      // 3) Clck the search button
      homePage.clickSearchButton();

     // page.waitForTimeout(2000);
      //  4) Verify the product appears in the search results
      expect(
        await searchResultPage.isProductExistInSearchedList(config.productName)
      ).toBeTruthy();

      //  5) Select the product in the searchProduct Page
      //If selectProduct may legitimately fail to find a product, and null is an expected outcome
      //Handled that null option
      let productPage: ProductPage | null =
        await searchResultPage.selectProduct(config.productName);

      // Checking if the productPage is not null, then execute the following code
      if (!productPage) {
        console.log("Product not found seach results");
        return null;
      }
      //  6) Set the quantity
      await productPage.setProductQuantity(config.productQuantity);

      //  7) Add the product to the Cart
      await productPage.addProductToCart();

      //  8) Verify the success message
      expect(await productPage.isSuccessconfirmation).toBeTruthy();
    }


 // created a function to validate the product at shopping cart
   async function verifyShoppingCart(page: Page) {
    // creating productPage object
     const productPage = new ProductPage(page);

     //Click on the blackbox cart field after product added to cart
     await productPage.clickBlackBoxCartField();

     //On the "prodcut added to cart " small window click on the "View Cart" icon and create instance of the 'shoppingCartPage'
     const shoppingCartPage = await productPage.clickOnViewCartLink();
     console.log("you are in Shopping Cart Page");

     const config = new TestConfig();
     const totalPrice = await shoppingCartPage.getTotalPrice();
     expect(totalPrice).toBe(config.totalPrice);
     console.log(totalPrice);
   }
