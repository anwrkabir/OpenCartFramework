
import{Page,Locator} from "@playwright/test";
import { promises } from "dns";
import { ShoppingCartPage } from "./ShoppingCartPage";


export class ProductPage{

//locator:
    private readonly page:Page;
    private readonly productName:Locator;
    private readonly productPrice :Locator;
    private readonly inputproductQty:Locator;
    private readonly btnproductAddToCart: Locator;
    private readonly buttonblackcartItem: Locator;
    private readonly successConfirmationMsg:Locator;
    private readonly totalPrice:Locator;
    private readonly viewCartLink:Locator;


//constructor:
constructor(page:Page){

    this.page = page;
    this.productName = page.locator('h1');
    this.productPrice = page.locator("li h2");
    this.inputproductQty = page.locator("#input-quantity");
    this.btnproductAddToCart = page.locator("#button-cart");
    this.buttonblackcartItem = page.locator("span#cart-total");
    this.successConfirmationMsg = page.locator("div.alert.alert-success.alert-dismissible");//Success: You have added MacBook to your shopping cart!
    this.totalPrice = page.locator("ul li table tr:nth-child(4) td:nth-child(2)");
    this.viewCartLink= page.locator("body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(1) > p:nth-child(2) > a:nth-child(1) > strong:nth-child(1)");
}
//method

/***
 * 1) validate the product name is displaying on the Product Page
 * @return:Promise<boolean>
 * @param : productName:string
 * 
 */


async isProductNameDisplaying(productName:string):Promise<boolean>{
    try {
        const nameOfActualProduct = await this.productName.textContent();
        if(productName === nameOfActualProduct)
            {
        return true; 
            }

        else{
            return false;
        }
        
         } catch (error) {
        console.log(`The expected product is not visible${error}`)
        return false;
    }
    

}

/**
 * 2) validate the price is displaying :
 * @param: none
 * @return : Promise<boolean
 * **/


async isProductPriceDisplaying():Promise<boolean>{
    try {
        if(await this.productPrice.isVisible()){
            return true;
        }
          else{
            return false;
        }
    } catch (error) {
        console.log(` the value of the product is not visiable ${error}`);
         return false;
    }
  

}


/**
 * 3) In the Qty field first remove the current qty 
 * 4) then set the qty 
 * @return : Promise<void>
 * @param: productQuantity:string
 * 
 * **/



async setProductQuantity( productQuantity:string):Promise<void>{

   try {
     await this.inputproductQty.clear;
     await this.inputproductQty.fill(productQuantity);
   } catch (error) {
    
    console.log(` Product qty input field is not working ${error}`)
   }
}

/**
 * 5) click on the "Add to Cart" button
 * @return : Promise<void>
 * @param: none
 * 
 * **/

async addProductToCart():Promise<void>{
    await this.btnproductAddToCart.click();
}


/**
 * 6) After click on the "Click to button" validate that the successConfirmationMessage displayed
 * @param: none
 * @return: Promise<boolean>
 * 
 * **/

async isSuccessconfirmation():Promise<boolean>{

    try {
        console.log(this.successConfirmationMsg);
        if(await this.successConfirmationMsg.isVisible){
            return true;
        }
        else{ 
            return false;
        }
        
    } catch (error) {
        console.log(`The successful message is not visible${error}`)
        return false;
    }
    
}


/**
 * 7) The black box should display : " 1 item(s) - $602.00"(buttonblackcartItem)
 * @return: Promise<boolean>
 * @param: productPrice:string
 * **/


async IsdisplayOfPriceAndQtyInBlackCartIcon(productPrice:string):Promise<boolean>{
   try {
     const priceAndQty = await this.buttonblackcartItem.textContent();
     if(priceAndQty?.includes(productPrice)){
         return true;
     }
       else{ 
            return false;
        }
   } catch (error) {
    console.log(" the black cart button having issue with the price and and quantity ordered");
       return false;
   }


     
}


/**
 * 8) click on that black box to navigate to drop down menu
 * @ return : Promise<void>
 * @ param: none
 * ***/


async clickBlackBoxCartField():Promise<void>{
    await this.buttonblackcartItem.click();
}

//9. In the Cart page, ensure that the totalPrice is displaying $602(totalPrice)
async viewTotalPriceInCartPage( totalPrice):Promise<boolean>{
 try {
       const totalpriceInCartPage = this.totalPrice.textContent();
       if(totalpriceInCartPage === totalPrice){
           return true;
       }

       else{ return false;}
         
 } catch (error) {
     console.log("The total price is not showing the expected total price");
      return false;
 }

}

/**
 * 10)   //On the "prodcut added to cart " small window click on the "View Cart" icon and create instance of the 'shoppingCartPage'
 * for example: const shoppingCartPage = await productPage.clickOnViewCartLink();
 *             shoppingCartPage.methods()
 * 
 * @param:none
 * @return:Promise<ShoppingCartPage>
 * 
 * **/


async clickOnViewCartLink():Promise<ShoppingCartPage>{
    await this.viewCartLink.click();
    return new ShoppingCartPage(this.page);

}



}
