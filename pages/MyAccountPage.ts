import { Page,Locator } from "@playwright/test";
import { LogOutPage } from "./LogOutPage";

export class MyAccountPage{

    
    //locators
    private readonly page:Page;
    private readonly msgHeading:Locator;
    private readonly lnkLogout:Locator


    //constructor

    constructor(page:Page){

        this.page = page;
       this.msgHeading = page.locator('h2:has-text("My Account")');
        this.lnkLogout = page.locator("text='Logout'").nth(1);
    }

    //methods
     /***
   * Validate that the "My Account" header is visible in the "My Account" page
   * @param :null
   * return: true (Promise<boolean>) if the header is visible
   */
    async isMyAccountPageExists():Promise<boolean>{
         try {
            const isMAVisible= await this.msgHeading.isVisible();
        /*     if(isMAVisible)
               return true; */
           return (isMAVisible); // if return isMAVisible 
         } catch (error) {
            console.log(`Error checking My Account Page header visibility: ${error}`);
            return false;
            
         }
    }


    /**
     * 
     * Click on the logout link
     * @param:null
     * return: Promise<Logout> // return logout page after click on that link
      * ***/

    async clickLogOut():Promise<LogOutPage>{

       try {
         await this.lnkLogout.click();
         return new LogOutPage(this.page);
       } 
       catch (error)
        {
        console.log(`Error clicking on Logout link in MyAccount page :${error}`);
        throw error;
        }
     }


     /**
      * Validate that the page exists by returning the title of the page"Account Logout"
      * @return: Promise<boolean>
      * 
      * **/

     async getPageTitle():Promise<string>{
         return ( await this.page.title());
     }



}