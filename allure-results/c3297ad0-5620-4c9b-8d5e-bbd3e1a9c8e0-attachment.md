# Test info

- Name: End to End Test
- Location: C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:32:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at addProductToCart (C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:148:94)
    at C:\OpenCartPlaywright\tests\EndToEndTest.spec.ts:51:3
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
  - button " 0 item(s) - $0.00"
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
   48 |
   49 |  // 4) Search for a product and add it to the shopping cart
   50 |
   51 |   await addProductToCart(page);
   52 |  //5) Verify cart contents
   53 |  //6) Attempt checkout ( disabled since feature isnt available on demo site)
   54 |
   55 |
   56 | })
   57 |
   58 |
   59 |
   60 |
   61 |
   62 |    // created a function to create a registration 
   63 |     async function performRegistration(page:Page):Promise<string>{
   64 |          const homePage = new HomePage( page);
   65 |         await  homePage.clickMyAccount();
   66 |         await  homePage.clickRegister();
   67 |
   68 |         const registrationPage = new RegistrationPage(page);
   69 |         //Fill in registration deatils with random data
   70 |        
   71 |          await registrationPage.setFirstName(randomDataGenerator.getFistName());
   72 |          await registrationPage.setLastName(randomDataGenerator.getLastName());
   73 |
   74 |          let email = randomDataGenerator.getemail()
   75 |          await registrationPage.setEmail(email);
   76 |          await registrationPage.setTelNum(randomDataGenerator.getPhoneNumber());
   77 |     
   78 |          //const password = randomDataGenerator.getPassword();
   79 |          const password = "test123"; // this password will be used in the login
   80 |          
   81 |          await registrationPage.setPassword(password);
   82 |          await registrationPage.setConfirmPassword(password);
   83 |     
   84 |          await registrationPage.chkPrivacyPolicyCheckbox();
   85 |          await registrationPage.clickContunue();
   86 |     
   87 |          //validate confirmation message
   88 |          const confirmationMessage = await registrationPage.getConfirmationMessage();
   89 |          await expect(confirmationMessage).toContain("Your Account Has Been Created!")
   90 |          return email ;// this email will be used in the login
   91 |
   92 |     }
   93 |   
   94 |     async function performLogin(page:Page,email:string){
   95 |          const homePage = new HomePage( page);
   96 |
   97 |          await homePage.clickMyAccount();
   98 |          await homePage.clickLogin();
   99 |       
  100 |         //Enter valid credentials and login
  101 |         const loginPage = new Login(page);
  102 |         await loginPage.setEmail(email);
  103 |         await loginPage.setPassword("test123");
  104 |         await loginPage.clickLogin();
  105 |       
  106 |         //Alternatively for login
  107 |         //await loginPage.login(config.email, config.password);
  108 |         const myAccountPage = new MyAccountPage(page);
  109 |         //verify successful login by checking 'My Account' page presence
  110 |         const isLogged = await myAccountPage.isMyAccountPageExists();
  111 |         expect(isLogged).toBeTruthy();
  112 |
  113 |     }
  114 |     
  115 |     async function performLogout(page:Page):Promise<void>{
  116 |
  117 |     const myAccountPage  = new MyAccountPage(page);
  118 |     // 4) Verify "My Account" page
  119 |   /*    const isAccountPageExist = await  myAccountPage.isMyAccountPageExists();
  120 |      expect( await isAccountPageExist).toBeTruthy();
  121 |          */  
  122 |     const  logOut:LogOutPage =await myAccountPage.clickLogOut();
  123 |      expect( await logOut.isContunueButtonVisible).toBeTruthy()
  124 |
  125 |     const homePage = await logOut.clickContiue();
  126 |   
  127 |   
  128 |      //* 7) verify user is redirected to Home Page
  129 |         expect(await homePage.isHomePageExist).toBeTruthy();
  130 |
  131 |
  132 |         await page.waitForTimeout(3000);
  133 |
  134 |     }
  135 |
  136 |     async function addProductToCart(page:Page){
  137 |           // 2) Enter the existing product name in the search box( using the config parameter)
  138 |             const homePage = new HomePage( page);
  139 |              const config = new TestConfig();
  140 |              const searchResultPage = new SearchResultPage(page);
  141 |             
  142 |
  143 |             homePage.enterProductName(config.productName);
  144 |             // 3) Clck the search button
  145 |             homePage.clickSearchButton();
  146 |         
  147 |             //  4) Verify the product appears in the search results 
> 148 |             expect (await searchResultPage.isProductExistInSearchedList(config.productName)).toBeTruthy();
      |                                                                                              ^ Error: expect(received).toBeTruthy()
  149 |             
  150 |              //  5) Select the product in the searchProduct Page
  151 |             //If selectProduct may legitimately fail to find a product, and null is an expected outcome
  152 |             //Handled that null option  
  153 |             let productPage: ProductPage |null = await searchResultPage.selectProduct(config.productName);
  154 |         
  155 |             // Checking if the productPage is not null, then execute the following code
  156 |             if(productPage){
  157 |              //  6) Set the quantity
  158 |              await productPage.setProductQuantity(config.productQuantity);
  159 |         
  160 |             //  7) Add the product to the Cart
  161 |             await productPage.addProductToCart();
  162 |         
  163 |             //  8) Verify the success message
  164 |             expect(await productPage.isSuccessconfirmation).toBeTruthy();
  165 |             
  166 |             }
  167 |             else{
  168 |                 console.log( "productPage is returning null due to the searchResultPage.selectProduct(config.productName)");
  169 |             }
  170 |
  171 |     }
  172 |
  173 |
```