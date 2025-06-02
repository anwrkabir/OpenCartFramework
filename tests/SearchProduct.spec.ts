//5. Test Case: prodcut seach


/***
 * 5. Test Case: prodcut seach
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Etner the product name in the seach field 
 * 3) Click the search button
 * 4) verify if the product is displaying
*/

let login: Login;
let homepage : HomePage;
let config : TestConfig;
let searchpage :SearchResultPage


import{test,expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultsPage";
import { Config } from "@playwright/test";
import { Login } from "../pages/Login";
import { TestConfig } from "../test.config";


//declaring hook
test.beforeEach("",async({page})=>{

    config = new TestConfig();
    page.goto(config.appUrl);

    homepage = new HomePage(page);
    searchpage = new SearchResultPage(page);
    
})

test.afterEach("", async({page})=>{
    page.close();
})

test(" Product search test @master @regression",async({page})=>{
    
    await homepage.enterProductName(config.productName);
    await homepage.clickSearchButton();
    expect (await searchpage.isProductExistInSearchedList(config.productName)).toBeTruthy();
    await searchpage.selectProduct(config.productName);

})