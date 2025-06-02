import { Page, expect, Locator } from "@playwright/test";

export class RegistrationPage {

  private readonly page: Page;

  //locators using CSS selectors
  private readonly txtFirstName:Locator;
  private readonly txtLastName:Locator;
  private readonly txtEmail:Locator;
  private readonly txtTelephone:Locator;
  private readonly txtPassword:Locator;
  private readonly txtConfirmPassword:Locator;
  private readonly chkPolicy:Locator;
  private readonly btnContinue:Locator;
  private readonly msgConfirmation:Locator;
  

  //Constructors
  constructor(page:Page){
    this.txtFirstName = page.locator("#input-firstname");
    this.txtLastName = page.locator("#input-lastname");
    this.txtEmail= page.locator("#input-email");
    this.txtTelephone = page.locator("#input-telephone");
    this.txtPassword = page.locator("#input-password");
    this.txtConfirmPassword = page.locator("#input-confirm");
    this.chkPolicy = page.locator('input[name="agree"]');
    this.btnContinue= page.locator("input[type='submit']");
    this.msgConfirmation= page.locator("div#content h1");

  }

   // methods:
 
    /***
    * sets the first name in the registration form
    * @param fname - First name to enter 
    */
    async setFirstName( fname:string):Promise<void>
    {
        await this.txtFirstName.fill(fname);
        
    }

    /***
    * sets the last name in the registration form
    * @param lname - last name to enter 
    */
    async setLastName( lname:string):Promise<void>
    {
         await this.txtLastName.fill(lname);
        
    } 


    /***
    * sets the email address in the registration form
    * @param email - email address to enter 
    */
    async setEmail( email:string):Promise<void>
    {
        await this.txtEmail.fill(email);
        
    } 

     /***
    * sets the telephone number in the registration form
    * @param telNum - telephone number to enter 
    */
    async setTelNum( telNum:string):Promise<void>
    {
        await this.txtTelephone.fill(telNum);
        
    } 

    /***
    * sets the password in the registration form
    * @param passw - password to enter 
    */
    async setPassword( passw:string):Promise<void>
    {
        await this.txtPassword.fill(passw);
        
    } 

    
    /***
    * sets the confirmpassword in the registration form
    * @param confpassw - password to enter 
    */
    async setConfirmPassword( confpassw:string):Promise<void>
    {
        await this.txtConfirmPassword.fill(confpassw);
        
    } 


    /***
    * check the privacyPolicy checkbox in the registration form
    * @param :None
    */
    async chkPrivacyPolicyCheckbox( ):Promise<void>
    {
        await this.chkPolicy.check();
        
    } 

    
    /***
    * click on the 'Continue' button  in the registration form
    * @param :None
    */
    async clickContunue( ):Promise<void>
    {
        await this.btnContinue.click();
        
    } 


     
    /***
    * click on the 'Continue' button  in the registration form
    * @returns Promise<string>
    */
    async getConfirmationMessage( ):Promise<string>
    {
        return await this.msgConfirmation.textContent()??'';
        //use of "??''"" : Return the text content of msgConfirmation, but if it is null or undefined, return an empty string ('') instead.”
        
    } 

    async completeRegistration( userData:{ // userData is declared as inline instead of interface declaration
        firstName : string;
        lastName: string;
        email:string;
        telephone:string;
        password:string;

    }): Promise<void> {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setTelNum(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.chkPrivacyPolicyCheckbox();
        await this.clickContunue();
        await expect(this.msgConfirmation).toBeVisible();

    }

    async isFirstNameElementVisible(){
        if(this.txtFirstName)
        {
            return true;
        }
        return false;
    }

}