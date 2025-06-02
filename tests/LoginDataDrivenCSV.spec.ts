/**
 * 3. TestCase: using the csv data to login
 * This is a data driven test by using csv data
 * 
 * **/


import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { Login } from "../pages/Login";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from "../test.config";
import { dataProvider } from "../utils/dataProvider";


// Load csv test data from file( logindata.json)
const csvPath ="testdata/test1.csv";
const csvTestData =  dataProvider.getTestDataFromCSV(csvPath);

for(const data of csvTestData){

    test(`Log in test with CSV Data: ${data.testName} @datadriven`, async ({page})=>{

         const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new Login(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccountPage=new MyAccountPage(page);
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getloginErrorMessage();
           // expect(errorMessage).toBe(' Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toBe(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
            //expect(errorMessage).toContain('Warning: No match');
        }
    })

}