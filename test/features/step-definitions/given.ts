import { Given } from "@wdio/cucumber-framework";
import  * as chai  from "chai";

Given(/^Login to inventory web app$/,async ()=>{
    /**1. Launch browser */
    await browser.url("https://www.saucedemo.com/v1/index.html");
    await browser.setTimeout({implicit:15000,pageLoad:10000});
    await browser.maximizeWindow();

    /**2. Login */
    await $('#user-name').setValue("standard_user");
    await $('#password').setValue("secret_sauce");
    await $('#login-button').click();

    /**3. Assert Login */
   // const headerProduct = await $('.product_label').getText();
   // chai.expect(headerProduct).to.equal("Products");

   // await browser.debug();
})