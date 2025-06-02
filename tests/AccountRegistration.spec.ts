/***
 * 2. Test Case: Account Registration
 * 
 * Tags: @master @sanity  @regression
 * 
 * steps:
 * 1) navigate to application url
 * 2) go to"My Account " and click "Register"
 * 3) Fill in Registration details with random data
 * 4) Agree to privacy policy  and submit the form
 * 5) validate the confirmation message
 * 
 * */

import{test, expect } from "@playwright/test"
import {HomePage} from '../pages/HomePage';
import {RegistrationPage} from '../pages/RegistrationPage'
import { randomDataGenerator } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";


let homePage :HomePage; //declaring global variable
let registrationPage:RegistrationPage; //declaring global variable
let config: TestConfig; //declaring global variable

test.beforeEach(async ({page})=>{
    config = new TestConfig(); // creating the object of the test config
    await page.goto(config.appUrl); //navigate to the application url
     homePage = new HomePage(page); // defined them global so can be access later on methods
     registrationPage = new RegistrationPage(page); // defined them global so can be access later on methods
})


test.afterEach(async ({page})=>{
  //  page.waitForTimeout(3000);
    page.close();
})


test('User registrtaion test @master @sanity  @regression',async ({})=>{ // as page fixure is already 

 
    homePage.clickMyAccount();
    homePage.clickRegister();

    //Fill in registration deatils with random data
   
     await registrationPage.setFirstName(randomDataGenerator.getFistName());
     await registrationPage.setLastName(randomDataGenerator.getLastName());
     await registrationPage.setEmail(randomDataGenerator.getemail());
     await registrationPage.setTelNum(randomDataGenerator.getPhoneNumber());

     const password = randomDataGenerator.getPassword();
     await registrationPage.setPassword(password);
     await registrationPage.setConfirmPassword(password);

     await registrationPage.chkPrivacyPolicyCheckbox();
     await registrationPage.clickContunue();

     //validate confirmation message
     const confirmationMessage = await registrationPage.getConfirmationMessage();
     await expect(confirmationMessage).toContain("Your Account Has Been Created!")
     


})
