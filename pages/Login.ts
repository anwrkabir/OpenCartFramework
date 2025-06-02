import { Page, Locator } from "@playwright/test";

export class Login {
  private readonly page: Page;

  //locator

  private readonly inputEmailAddress: Locator;
  private readonly inputPasswrod: Locator;
  private readonly buttonLogin: Locator;
  private readonly errorMessageForLoginFailure: Locator;

  //constructor

  constructor(page: Page) {
    this.page = page;
    this.inputEmailAddress = page.locator("#input-email");
    this.inputPasswrod = page.locator("#input-password");
    this.buttonLogin = page.locator("input[value='Login']"); //"Warning: No match for E-Mail Address and/or Password."
    this.errorMessageForLoginFailure = page.locator("div.alert");
  }
  //method
  /***
   * sets the email address in the Recurring Customer Log in field
   * @param email (registered email) enter
   * return: void (Promise<void>)
   */
  async setEmail(email: string): Promise<void> {
    await this.inputEmailAddress.fill(email);
  }

  /***
   * sets the password in the Recurring Customer login field
   * @param password( registered password) to enter
   * return: void (Promise<void>)
   */
  async setPassword(password: string): Promise<void> {
    await this.inputPasswrod.fill(password);
  }

  /***
   * click on the login in the Recurring Customer login field
   * @param :null
   * return: void (Promise<void>)
   */
  async clickLogin(): Promise<void> {
    await this.buttonLogin.click();
  }

  /***
   * Perform complete login in the Recurring Customer login field
   * @param email (registered email) enter
   * @param password( registered password) to enter
   * return: void (Promise<void>)
   */
  async login(email: string, password: string): Promise<void> {
    await this.setEmail(email);
    await this.setPassword(password);
    await this.clickLogin();
  }

  /***
   * Error message for login failure
   * For negative testing validation
   */
  async getloginErrorMessage(): Promise<null | string> {
    return this.errorMessageForLoginFailure.textContent();
  }
}
