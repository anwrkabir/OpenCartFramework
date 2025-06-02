import { th } from "@faker-js/faker";
import { Page, expect, Locator } from "@playwright/test";

export class HomePage {
  //declaring class property or global variable page2
  private readonly page2: Page;

  //locators:

  private readonly lnkMyAccount: Locator;
  private readonly lnkRegister: Locator;
  private readonly lnkLogin: Locator;
  private readonly txtSearchbox: Locator;
  private readonly btnSearch: Locator;

  //constructor
  constructor(page1: Page) {
    //assinging the passed value of the page1 to page2
    this.page2 = page1;
    this.lnkMyAccount = page1.locator(
      "a[title='My Account'] span:nth-child(2)"
    );
    this.lnkRegister = page1.locator("a[href*='register']");
    this.lnkLogin = page1.locator("a[href*='account/login']");
    this.txtSearchbox = page1.locator("input[placeholder='Search']");
    this.btnSearch = page1.locator("#search button[type='button']");
  }

  //action methods

  //verify is page exist or not
  async isHomePageExist(): Promise<boolean> {
    let title = await this.page2.title();
    if (title) { // if title is present

      return true;
    }
    return false;
  }

  //Click "My Account" link
  async clickMyAccount() {
    try {
      await this.lnkMyAccount.click();
    } catch (error) {
      console.log(
        `Exception occured while clicking 'My Account Link':${error}`
      );
      throw error;
    }
  }

  
 // Click "Register" link
    async clickRegister(){
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

  //click "Login" link
  async clickLogin() {
    try {
      await this.lnkLogin.click();
    } catch (error) {
      console.log(`Exception occured while clicking 'Login':${error}`);
      throw error;
    }
  }

  //Enter product name in the search box

  async enterProductName(pName: string) {
    try {
      await this.txtSearchbox.fill(pName);
    } catch (error) {
      console.log(`Exception occured while entering product name':${error}`);
      throw error;
    }
  }

  //Click the search button after entering the product name in the 'Search' box
  async clickSearchButton() {
    try {
      await this.btnSearch.click();
    } catch (error) {
      console.log(`Exception occured while clicking 'search'button:${error}`);
      throw error;
    }
  }

  
}
