
import{Page,Locator} from "@playwright/test";
import { ProductPage } from "./ProductPage";


export class SearchResultPage {
  private readonly page: Page;
  private readonly searchResult: Locator;
  private readonly productsTexts: Locator;
  private readonly searchProductLists:Locator;


  constructor(page: Page) {
    this.page = page;
    this.searchResult = page.locator("#content h1");
    this.productsTexts = page.locator(".caption h4 a");
    this.searchProductLists = page.locator(".caption h4>a")
  }



    /**
   * ensure the search result header is "Search - 'searchtext'
   * @param :searchText:string
   * return:Promise<boolean>
   * **/
  async searchContainText(searchText: string): Promise<boolean> {
   try {
     const searchResultHeader = await this.searchResult.textContent();
   /*  //without handling undefined or null return
    if (searchResultHeader.includes(searchText)) {
       return true;
     }
     return false; */
 
     return searchResultHeader?.includes('Search - ') ?? false //If the result of headerText?.includes(...) is undefined or null, it returns false instead.
    // If the result is true or false, it keeps that value.
 
   } catch (error) {
        console.log(`search result error${error}`);
   
   }
   return false;
  }

  
  /**
   * Select the expected product from the searh list and click on it to navigate to product page
   * @param :searchText:string
   * return:ProductPage (Promise<ProductPage>)
   * **/

  async selectProduct(searchText: string):Promise<ProductPage|null> {
   try { 
        const count = await this.productsTexts.count();
         for (let i = 0; i < count; i++) {
        const product = this.productsTexts.nth(i); // as we are using the array of the playwright locators
        const title = await  product.textContent();
        if (title === searchText) {
          await product.click();
          return new ProductPage(this.page);
        }
      }
    } catch (error) {
      console.log(`Product not found to select ${error}`);
      
    }return null;
  }

    
  /**
   * Ensure if the search result includes that product or not
   * @param :searchText:string
   * return:Promise<boolean>
   * **/
  async isProductExistInSearchedList(searchText: string):Promise<boolean>
  {
   
    try { 
        const count = await this.productsTexts.count();
        console.log(count);
      for (let i = 0; i < count; i++) {
        const product = this.productsTexts.nth(i);
        const title = await product.innerText();
        if (title === searchText) {
           return true;
        }
      }
    } catch (error) {
      console.log(`Product is not available to click ${error}`);
     }
     return false;
  }

 /**
   * Get return product count 
   * @param :null
   * return:Promise<number>
   * **/

 async numberOfSearchProductCount():Promise<number>{
    return this.searchProductLists.count();
 }


}

