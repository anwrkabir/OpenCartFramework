import {Page,Locator} from "@playwright/test" ;
import { HomePage } from "./HomePage";


export class LogOutPage{

    private readonly page:Page;
    private readonly btnContinue :Locator;

    constructor(page:Page){

        this.page = page;
        //declaring the "continue" button after click of logout 
        this.btnContinue = page.locator("a.btn.btn-primary");
        
    }


    
    /***
    * click on the 'continue' button after clicking on Logout
    * @param :null
    * return: Homepage (Promise<HomePage>)
    */
    async clickContiue():Promise<HomePage>{
        await this.btnContinue.click();
        //after clicking of the continue button, user will navigate to 'HomePage'
        return new HomePage(this.page);
    }


    /***
    * Validate that the 'continue' button is visible 
    * @param :null
    * return: boolean (Promise<boolean>)
    */

    async isContunueButtonVisible():Promise <boolean>{
        return await this.btnContinue.isVisible();
    }
 

}