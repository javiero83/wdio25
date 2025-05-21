import { Given } from "@wdio/cucumber-framework";
import  * as chai  from "chai";

Given(/^Login to inventory web app$/,async ()=>{
    /**1. Launch browser */
    await browser.url("https://www.saucedemo.com/v1/index.html");
    await browser.setTimeout({implicit:5000,pageLoad:10000});
    await browser.maximizeWindow();

    /**2. Login */
    try {
        await $('#user-name').setValue("standard_user");
        await $('#password').setValue("secret_sauce");
        await $('#login-button').click();
    } catch (err) {
        console.log(`Error in first login, Retrying...`);
        //await browser.pause(1000);
        await browser.refresh()
        await browser.pause(2000);
        await $('#user-name').setValue("standard_user");
        await $('#password').setValue("secret_sauce");
        await $('#login-button').click();
    }

    /**3. Assert Login */
   // const headerProduct = await $('.product_label').getText();
   // chai.expect(headerProduct).to.equal("Products");

   //Reload the session
   //I want to change the user

   /**
    * Login with another user
    */
    // await browser.pause(2000);
    // await browser.reloadSession()
    // await browser.url("https://www.saucedemo.com/v1/index.html");
    // await $('#user-name').setValue("problem_user");
    // await $('#password').setValue("secret_sauce");
    // await $('#login-button').click();

    //Retry a form

    // await browser.back();
    // await browser.pause(2000);
    // await browser.forward()
    // await browser.debug();
    await browser.debug();
})