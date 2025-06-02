//4.Test Case: User Logout

/**
 * 4.Test Case: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 
 * 1) Navigate to the application 
 * 2)  Go to Login page from the Home Page
 * 3) Login with valid credentials 
 * 4) Verify "My Account" page
 * 5) Click on Logout link
 * 6) Click on  Continue button
 * 7) verify user is redirected to Home Page
 *  
 * **/

import { TestConfig } from "../test.config";
import {test, expect} from "@playwright/test";
import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { LogOutPage } from "../pages/LogOutPage";
import { log } from "console";


//declare global variable

let config: TestConfig;
let login: Login;
let homePage: HomePage;
let myAccountPage :MyAccountPage;
let logOut:LogOutPage;


// Creating hook:
test.beforeEach("",async({page})=>{

// 1) Navigate to the application 
config = new TestConfig();
page.goto(config.appUrl);

// Creating objects
login = new Login(page);
homePage = new HomePage(page);
myAccountPage = new MyAccountPage(page);
//logOut = new LogOutPage(page);


} )

test.afterEach("",async({page})=>{
    
    await page.close();
} )

test(" User Logout @master", async ({page})=>{
    
    // 2)  Go to Login page from the Home Page
    await homePage.clickMyAccount();
    await homePage.clickLogin();



     //3) Login with valid credentials 
    await login.setEmail(config.email);
    await login.setPassword(config.password);
    await login.clickLogin();

 
    // 4) Verify "My Account" page
     const isAccountPageExist = await  myAccountPage.isMyAccountPageExists();
     expect( await isAccountPageExist).toBeTruthy();
     
     
     // * 5) Click on Logout link and it will return logOut page
     // storing the object to use logOut page methods.
         // this is called chaining concept
     logOut =await myAccountPage.clickLogOut();
     expect( await logOut.isContunueButtonVisible).toBeTruthy()

     //* 6) Click on  Continue button on logout page and it will return homePage
     // storing the homePage object to use HomePage page methods.
     // this is called chaining concept
     homePage = await logOut.clickContiue();
  
  
     //* 7) verify user is redirected to Home Page
        expect(await homePage.isHomePageExist).toBeTruthy();


        await page.waitForTimeout(3000);
   
    

})


