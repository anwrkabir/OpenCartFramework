# Test info

- Name: End to End Test
- Location: C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:32:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#input-firstname')

    at RegistrationPage.setFirstName (C:\OpenCartPlaywright\pages\RegistrationPage.ts:41:33)
    at performRegistration (C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:58:33)
    at C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:39:27
```

# Test source

```ts
   1 | import { Page, expect, Locator } from "@playwright/test";
   2 |
   3 | export class RegistrationPage {
   4 |
   5 |   private readonly page: Page;
   6 |
   7 |   //locators using CSS selectors
   8 |   private readonly txtFirstName:Locator;
   9 |   private readonly txtLastName:Locator;
   10 |   private readonly txtEmail:Locator;
   11 |   private readonly txtTelephone:Locator;
   12 |   private readonly txtPassword:Locator;
   13 |   private readonly txtConfirmPassword:Locator;
   14 |   private readonly chkPolicy:Locator;
   15 |   private readonly btnContinue:Locator;
   16 |   private readonly msgConfirmation:Locator;
   17 |   
   18 |
   19 |   //Constructors
   20 |   constructor(page:Page){
   21 |     this.txtFirstName = page.locator("#input-firstname");
   22 |     this.txtLastName = page.locator("#input-lastname");
   23 |     this.txtEmail= page.locator("#input-email");
   24 |     this.txtTelephone = page.locator("#input-telephone");
   25 |     this.txtPassword = page.locator("#input-password");
   26 |     this.txtConfirmPassword = page.locator("#input-confirm");
   27 |     this.chkPolicy = page.locator('input[name="agree"]');
   28 |     this.btnContinue= page.locator("input[type='submit']");
   29 |     this.msgConfirmation= page.locator("div#content h1");
   30 |
   31 |   }
   32 |
   33 |    // methods:
   34 |  
   35 |     /***
   36 |     * sets the first name in the registration form
   37 |     * @param fname - First name to enter 
   38 |     */
   39 |     async setFirstName( fname:string):Promise<void>
   40 |     {
>  41 |         await this.txtFirstName.fill(fname);
      |                                 ^ Error: locator.fill: Test ended.
   42 |         
   43 |     }
   44 |
   45 |     /***
   46 |     * sets the last name in the registration form
   47 |     * @param lname - last name to enter 
   48 |     */
   49 |     async setLastName( lname:string):Promise<void>
   50 |     {
   51 |          await this.txtLastName.fill(lname);
   52 |         
   53 |     } 
   54 |
   55 |
   56 |     /***
   57 |     * sets the email address in the registration form
   58 |     * @param email - email address to enter 
   59 |     */
   60 |     async setEmail( email:string):Promise<void>
   61 |     {
   62 |         await this.txtEmail.fill(email);
   63 |         
   64 |     } 
   65 |
   66 |      /***
   67 |     * sets the telephone number in the registration form
   68 |     * @param telNum - telephone number to enter 
   69 |     */
   70 |     async setTelNum( telNum:string):Promise<void>
   71 |     {
   72 |         await this.txtTelephone.fill(telNum);
   73 |         
   74 |     } 
   75 |
   76 |     /***
   77 |     * sets the password in the registration form
   78 |     * @param passw - password to enter 
   79 |     */
   80 |     async setPassword( passw:string):Promise<void>
   81 |     {
   82 |         await this.txtPassword.fill(passw);
   83 |         
   84 |     } 
   85 |
   86 |     
   87 |     /***
   88 |     * sets the confirmpassword in the registration form
   89 |     * @param confpassw - password to enter 
   90 |     */
   91 |     async setConfirmPassword( confpassw:string):Promise<void>
   92 |     {
   93 |         await this.txtConfirmPassword.fill(confpassw);
   94 |         
   95 |     } 
   96 |
   97 |
   98 |     /***
   99 |     * check the privacyPolicy checkbox in the registration form
  100 |     * @param :None
  101 |     */
  102 |     async chkPrivacyPolicyCheckbox( ):Promise<void>
  103 |     {
  104 |         await this.chkPolicy.check();
  105 |         
  106 |     } 
  107 |
  108 |     
  109 |     /***
  110 |     * click on the 'Continue' button  in the registration form
  111 |     * @param :None
  112 |     */
  113 |     async clickContunue( ):Promise<void>
  114 |     {
  115 |         await this.btnContinue.click();
  116 |         
  117 |     } 
  118 |
  119 |
  120 |      
  121 |     /***
  122 |     * click on the 'Continue' button  in the registration form
  123 |     * @returns Promise<string>
  124 |     */
  125 |     async getConfirmationMessage( ):Promise<string>
  126 |     {
  127 |         return await this.msgConfirmation.textContent()??'';
  128 |         //use of "??''"" : Return the text content of msgConfirmation, but if it is null or undefined, return an empty string ('') instead.”
  129 |         
  130 |     } 
  131 |
  132 |     async completeRegistration( userData:{ // userData is declared as inline instead of interface declaration
  133 |         firstName : string;
  134 |         lastName: string;
  135 |         email:string;
  136 |         telephone:string;
  137 |         password:string;
  138 |
  139 |     }): Promise<void> {
  140 |         await this.setFirstName(userData.firstName);
  141 |         await this.setLastName(userData.lastName);
```