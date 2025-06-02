# Test info

- Name: End to End Test
- Location: C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:32:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at addProductToCart (C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:162:94)
    at verifyShoppingCart (C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:205:67)
    at C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:61:3
```

# Page snapshot

```yaml
- navigation:
  - button "$ Currency ":
    - strong: $
    - text: Currency 
  - list:
    - listitem:
      - link "":
        - /url: http://localhost/opencart/upload/index.php?route=information/contact
      - text: "123456789"
    - listitem:
      - link " My Account":
        - /url: http://localhost/opencart/upload/index.php?route=account/account
    - listitem:
      - link " Wish List (0)":
        - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
    - listitem:
      - link " Shopping Cart":
        - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
    - listitem:
      - link " Checkout":
        - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
- banner:
  - link "Your Store":
    - /url: http://localhost/opencart/upload/index.php?route=common/home
    - img "Your Store"
  - textbox "Search": MacBook
  - button ""
  - button " 2 item(s) - $1,204.00"
- navigation:
  - list:
    - listitem:
      - link "Desktops":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
    - listitem:
      - link "Laptops & Notebooks":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
    - listitem:
      - link "Components":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
    - listitem:
      - link "Tablets":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
    - listitem:
      - link "Software":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
    - listitem:
      - link "Phones & PDAs":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
    - listitem:
      - link "Cameras":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
    - listitem:
      - link "MP3 Players":
        - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
- list:
  - listitem:
    - link "":
      - /url: http://localhost/opencart/upload/index.php?route=common/home
  - listitem:
    - link "Search":
      - /url: http://localhost/opencart/upload/index.php?route=product/search&search=MacBook
- heading "Search - MacBook" [level=1]
- text: Search Criteria
- textbox "Search Criteria": MacBook
- combobox:
  - option "All Categories" [selected]
  - option "Desktops"
  - option "PC"
  - option "Mac"
  - option "Laptops & Notebooks"
  - option "Macs"
  - option "Windows"
  - option "Components"
  - option "Mice and Trackballs"
  - option "Monitors"
  - option "test 1"
  - option "test 2"
  - option "Printers"
  - option "Scanners"
  - option "Web Cameras"
  - option "Tablets"
  - option "Software"
  - option "Phones & PDAs"
  - option "Cameras"
  - option "MP3 Players"
  - option "test 11"
  - option "test 12"
  - option "test 15"
  - option "test 16"
  - option "test 17"
  - option "test 18"
  - option "test 19"
  - option "test 20"
  - option "test 25"
  - option "test 21"
  - option "test 22"
  - option "test 23"
  - option "test 24"
  - option "test 4"
  - option "test 5"
  - option "test 6"
  - option "test 7"
  - option "test 8"
  - option "test 9"
- checkbox "Search in subcategories" [disabled]
- text: Search in subcategories
- paragraph:
  - checkbox "Search in product descriptions"
  - text: Search in product descriptions
- button "Search"
- heading "Products meeting the search criteria" [level=2]
- button ""
- button ""
- link "Product Compare (0)":
  - /url: http://localhost/opencart/upload/index.php?route=product/compare
- text: "Sort By:"
- combobox "Sort By:":
  - option "Default" [selected]
  - option "Name (A - Z)"
  - option "Name (Z - A)"
  - option "Price (Low > High)"
  - option "Price (High > Low)"
  - option "Rating (Highest)"
  - option "Rating (Lowest)"
  - option "Model (A - Z)"
  - option "Model (Z - A)"
- text: "Show:"
- combobox "Show:":
  - option "15" [selected]
  - option "25"
  - option "50"
  - option "75"
  - option "100"
- link "MacBook":
  - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43&search=MacBook
  - img "MacBook"
- heading "MacBook" [level=4]:
  - link "MacBook":
    - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43&search=MacBook
- paragraph: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..
- paragraph: "$602.00 Ex Tax: $500.00"
- button " Add to Cart"
- button ""
- button ""
- link "MacBook Air":
  - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=44&search=MacBook
  - img "MacBook Air"
- heading "MacBook Air" [level=4]:
  - link "MacBook Air":
    - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=44&search=MacBook
- paragraph: MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose in..
- paragraph: "$1,202.00 Ex Tax: $1,000.00"
- button " Add to Cart"
- button ""
- button ""
- link "MacBook Pro":
  - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=45&search=MacBook
  - img "MacBook Pro"
- heading "MacBook Pro" [level=4]:
  - link "MacBook Pro":
    - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=45&search=MacBook
- paragraph: Latest Intel mobile architecture Powered by the most advanced mobile processors from Intel, ..
- paragraph: "$2,000.00 Ex Tax: $2,000.00"
- button " Add to Cart"
- button ""
- button ""
- text: Showing 1 to 3 of 3 (1 Pages)
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
    - listitem:
      - link "Delivery Information":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
    - listitem:
      - link "Privacy Policy":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
    - listitem:
      - link "Terms & Conditions":
        - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: http://localhost/opencart/upload/index.php?route=information/contact
    - listitem:
      - link "Returns":
        - /url: http://localhost/opencart/upload/index.php?route=account/return/add
    - listitem:
      - link "Site Map":
        - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
    - listitem:
      - link "Gift Certificates":
        - /url: http://localhost/opencart/upload/index.php?route=account/voucher
    - listitem:
      - link "Affiliate":
        - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
    - listitem:
      - link "Specials":
        - /url: http://localhost/opencart/upload/index.php?route=product/special
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: http://localhost/opencart/upload/index.php?route=account/account
    - listitem:
      - link "Order History":
        - /url: http://localhost/opencart/upload/index.php?route=account/order
    - listitem:
      - link "Wish List":
        - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
    - listitem:
      - link "Newsletter":
        - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: http://www.opencart.com
    - text: Your Store © 2025
```

# Test source

```ts
   62 |   console.log("shopping cart verification completed")
   63 |  //6) Attempt checkout ( disabled since feature isnt available on demo site)
   64 |
   65 |
   66 | })
   67 |
   68 |
   69 |
   70 |
   71 |
   72 |    // created a function to create a registration 
   73 |     async function performRegistration(page:Page):Promise<string>{
   74 |          const homePage = new HomePage( page);
   75 |         await  homePage.clickMyAccount();
   76 |         await  homePage.clickRegister();
   77 |
   78 |         const registrationPage = new RegistrationPage(page);
   79 |         //Fill in registration deatils with random data
   80 |        
   81 |          await registrationPage.setFirstName(randomDataGenerator.getFistName());
   82 |          await registrationPage.setLastName(randomDataGenerator.getLastName());
   83 |
   84 |          let email = randomDataGenerator.getemail()
   85 |          await registrationPage.setEmail(email);
   86 |          await registrationPage.setTelNum(randomDataGenerator.getPhoneNumber());
   87 |     
   88 |          //const password = randomDataGenerator.getPassword();
   89 |          const password = "test123"; // this password will be used in the login
   90 |          
   91 |          await registrationPage.setPassword(password);
   92 |          await registrationPage.setConfirmPassword(password);
   93 |     
   94 |          await registrationPage.chkPrivacyPolicyCheckbox();
   95 |          await registrationPage.clickContunue();
   96 |     
   97 |          //validate confirmation message
   98 |          const confirmationMessage = await registrationPage.getConfirmationMessage();
   99 |          await expect(confirmationMessage).toContain("Your Account Has Been Created!")
  100 |          return email ;// this email will be used in the login
  101 |
  102 |     }
  103 |   
  104 |     // created a function to create a login
  105 |     async function performLogin(page:Page,email:string){
  106 |          const homePage = new HomePage( page);
  107 |
  108 |          await homePage.clickMyAccount();
  109 |          await homePage.clickLogin();
  110 |       
  111 |         //Enter valid credentials and login
  112 |         const loginPage = new Login(page);
  113 |         await loginPage.setEmail(email);
  114 |         await loginPage.setPassword("test123");
  115 |         await loginPage.clickLogin();
  116 |       
  117 |         //Alternatively for login
  118 |         //await loginPage.login(config.email, config.password);
  119 |         const myAccountPage = new MyAccountPage(page);
  120 |         //verify successful login by checking 'My Account' page presence
  121 |         const isLogged = await myAccountPage.isMyAccountPageExists();
  122 |         expect(isLogged).toBeTruthy();
  123 |
  124 |     }
  125 |     
  126 |
  127 |     // created a function to create a logout
  128 |     async function performLogout(page:Page):Promise<void>{
  129 |
  130 |     const myAccountPage  = new MyAccountPage(page);
  131 |     // 4) Verify "My Account" page
  132 |   /*    const isAccountPageExist = await  myAccountPage.isMyAccountPageExists();
  133 |      expect( await isAccountPageExist).toBeTruthy();
  134 |          */  
  135 |     const  logOut:LogOutPage =await myAccountPage.clickLogOut();
  136 |      expect( await logOut.isContunueButtonVisible).toBeTruthy()
  137 |
  138 |     const homePage = await logOut.clickContiue();
  139 |   
  140 |   
  141 |      //* 7) verify user is redirected to Home Page
  142 |         expect(await homePage.isHomePageExist).toBeTruthy();
  143 |
  144 |
  145 |         await page.waitForTimeout(3000);
  146 |
  147 |     }
  148 |
  149 |     async function addProductToCart(page:Page):Promise<ShoppingCartPage|null>{
  150 |           // 2) Enter the existing product name in the search box( using the config parameter)
  151 |             const homePage = new HomePage( page);
  152 |              const config = new TestConfig();
  153 |              const searchResultPage = new SearchResultPage(page);
  154 |             
  155 |
  156 |             homePage.enterProductName(config.productName);
  157 |             // 3) Clck the search button
  158 |             homePage.clickSearchButton();
  159 |         
  160 |             page.waitForTimeout(2000);
  161 |             //  4) Verify the product appears in the search results 
> 162 |             expect (await searchResultPage.isProductExistInSearchedList(config.productName)).toBeTruthy();
      |                                                                                              ^ Error: expect(received).toBeTruthy()
  163 |             
  164 |              //  5) Select the product in the searchProduct Page
  165 |             //If selectProduct may legitimately fail to find a product, and null is an expected outcome
  166 |             //Handled that null option  
  167 |             let productPage: ProductPage |null = await searchResultPage.selectProduct(config.productName);
  168 |         
  169 |             // Checking if the productPage is not null, then execute the following code
  170 |             if(!productPage){
  171 |                     console.log("Product not found seach results");
  172 |                     return null;
  173 |             }    
  174 |              //  6) Set the quantity
  175 |              await productPage.setProductQuantity(config.productQuantity);
  176 |         
  177 |             //  7) Add the product to the Cart
  178 |             await productPage.addProductToCart();
  179 |         
  180 |             //  8) Verify the success message
  181 |             expect(await productPage.isSuccessconfirmation).toBeTruthy();
  182 |             
  183 |             
  184 |            
  185 |             await productPage.clickBlackBoxCartField();
  186 |
  187 |           const shoppingCart =   await productPage.clickOnViewCartLink();
  188 |         
  189 |           return shoppingCart;
  190 |     }
  191 |
  192 |    async function verifyShoppingCart(page:Page){
  193 |
  194 |           /*      const shoppingCart :ShoppingCartPage|null =await  addProductToCart(page);
  195 |
  196 |                if(shoppingCart){
  197 |                const totalprice :string =await shoppingCart.getTotalPrice();
  198 |                
  199 |                console.log(`totalprice : ${totalprice}`);
  200 |                }
  201 |                else {
  202 |                 console.log("shopping cart is null.")
  203 |                } */
  204 |
  205 |                     const shoppingCart: ShoppingCartPage | null = await addProductToCart(page);
  206 |
  207 |     if (shoppingCart) {
  208 |         const totalPrice: string | null = await shoppingCart.getTotalPrice();
  209 |
  210 |         if (totalPrice !== null) {
  211 |             console.log(`Total price: ${totalPrice}`);
  212 |         } else {
  213 |             console.log("Total price is null or not found in the cart.");
  214 |         }
  215 |     } else {
  216 |         console.log("Shopping cart is null.");
  217 |     
  218 |    } 
  219 |
  220 |    }
  221 |
```