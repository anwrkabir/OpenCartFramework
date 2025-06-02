import{Page, Locator,expect} from "@playwright/test"
import { CheckoutPage } from "./CheckoutPage" 


export class ShoppingCartPage{

    private readonly page:Page;
    private readonly lblTotalPrice:Locator;
    private readonly btnCheckout:Locator;

    constructor(page:Page){
        this.page= page;
        this.lblTotalPrice= page.locator("tbody tr td:nth-child(6)");
        //if total lblTotalPrice fail then use :
       // this.lblTotalPrice = page.locator("//*[@id='content']/div[2]/div/table//strong[text()='Total:']//following::td");
        this.btnCheckout = page.locator("a.btn.btn-primary");
    }


    /**
     * Get the totalPrice from the shopping cart
     * return : Promise<string|null> : the total price text
     * 
     */

    async getTotalPrice():Promise<string|null>{
       try {
        return await this.lblTotalPrice.textContent();
       } catch (error) {
        console.log(`unable to retrieve the total price: ${error}`);
        return null;
        
       }
     
    }

      /**
     * Click on the checkout button
     * return : Promise<CheckoutPage>  : checkout page instance
     */

      async cliclOnCheckout():Promise<CheckoutPage>{
        await this.cliclOnCheckout;
        return new CheckoutPage(this.page);
      }


      /**
       * Verify if shopping cart page loaded
       * return: Promise<boolean>
       * 
       * *****/

      async isPageLoaded() :Promise<boolean> {
        try {
            return( await this.btnCheckout.isVisible());
        } catch (error) {
            return false;
        }
      }






}