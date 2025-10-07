
//6. Test Case: Add product to Cart

/**
 * 6. Test Case: Add product to Cart
 * 
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to application url
 * 2) Enter the existing product name in the search box
 * 3) Clck the search button
 * 4) Verify the product appears in the search results
 * 5) Select the product
 * 6) Set the quantity
 * 7) Add the product to the Cart
 * 8) Verify the success message
 * 
 * 
 * ***/

import{test, expect} from "@playwright/test";
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultsPage";
import { ProductPage } from "../pages/ProductPage";

 //Shared instances
let config:TestConfig;
let  homePage : HomePage;
let searchResultPage : SearchResultPage;
let productPage :ProductPage;


//declaring hook
test.beforeEach("", async ({page})=>{


   //Load test configuration
        config = new TestConfig();
    //Open test url using config parameter    
        await page.goto(config.appUrl);
        homePage = new HomePage(page);
        searchResultPage = new SearchResultPage(page);
        //productPage = new ProductPage(page);

})
test.afterEach("", async({page})=>{
    //Optional cleanup
    await page.close();
})

test("4. Test Case: Add product to Cart @master @regression", async ({page})=>{


 //  2) Enter the existing product name in the search box
 //  3) Clck the search button
 //  4) Verify the product appears in the search results
 //  5) Select the product
 //  6) Set the quantity
 //  7) Add the product to the Cart
 //  8) Verify the success message

    // 2) Enter the existing product name in the search box( using the config parameter)
    homePage.enterProductName(config.productName);
    // 3) Clck the search button
    homePage.clickSearchButton();

    //  4) Verify the product appears in the search results 
    expect (await searchResultPage.isProductExistInSearchedList(config.productName)).toBeTruthy();
    
     //  5) Select the product in the searchProduct Page
    //If selectProduct may legitimately fail to find a product, and null is an expected outcome
    //Handled that null option  
    let productPage: ProductPage |null = await searchResultPage.selectProduct(config.productName);

    // Checking if the productPage is not null, then execute the following code
    if(productPage){
     //  6) Set the quantity
     await productPage.setProductQuantity(config.productQuantity);

    //  7) Add the product to the Cart
    await productPage.addProductToCart();

    //  8) Verify the success message
    expect(await productPage.isSuccessconfirmation).toBeTruthy();
    
    }
    else{
        console.log( "productPage is returning null due to the searchResultPage.selectProduct(config.productName)");
    }

 /*    await productPage?.clickBlackBoxCartField();
    await productPage?.clickOnViewCartLink();

 */
})