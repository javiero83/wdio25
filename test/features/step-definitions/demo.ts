import { Given,When,Then } from "@cucumber/cucumber";
import * as chai from 'chai';
import path from 'path';

Given(/^Google page is opened$/,async function(){
    console.log("Before opening browser...");
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log("After opening browser...");
})

When(/^Search with (.*)$/,async function(searchItem){
    console.log(`>>searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`);
    await ele.setValue(searchItem)
    await browser.keys('Enter')
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^URL should match (.*)$/,async function(expectedURL){
    console.log(`>>expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    //await browser.pause(7000)
    chai.expect(url).to.equal(expectedURL)


})

Given(/^A web page is opened$/,async function(){
    await browser.url("/upload")
    await browser.setTimeout({implicit:15000, pageLoad:10000})
    //await browser.maximizeWindow()
})

When(/^Perform web interactions$/,async ()=>{
//input box
    // let value1:number = 1234
    // let ele = await $('input[type=number]');
    // await ele.click();
    // //await ele.addValue(value1);

    // let valueString:string = value1.toString();
    
    // for(let i=0;i<valueString.length; i++){
    //     let charStr = valueString.charAt(i);
    //     await browser.pause(1000);
    //     await browser.keys(charStr);
    //DROPDOWN
    // let ele = await $('//select/option[@selected="selected"]');
    // let val = await ele.getText();
    // chai.expect(val).to.equal("Please select an option");    
    // //await browser.debug();

    // //Select an specific option from dropdown
    // let ddEle = await $('#dropdown');
    // //await ddEle.selectByVisibleText("Option 2");
    // //await ddEle.selectByAttribute("value","1");
    // await ddEle.selectByIndex(2);
    // await browser.debug()
    // THIRD OPTION 
    // let eleArr = await $$('select > option')
    // let arr = []
    // for(let i=0; i< await eleArr.length;i++){
    //     let ele = eleArr[i];
    //     let val = await ele.getText()
    //     arr.push(val)
    //     console.log(val);
    // }
    // console.log(`>> Options Array: ${arr}`);
    // await browser.debug()

    //Checkboxes
    /*
        Actions
        1. Select and option.
        2. Unselect an option (if selected)
        3. Assert if the option is selected
        4. Select all options
    */
    // let eleArr = await $$('//form[@id="checkboxes"]/input');
    // //await ele.isSelected() && await ele.click()
    // //let isCheck = await ele.isSelected();
    // //chai.expect(isCheck).to.be.false
    // for(let i =0; i < await eleArr.length; i++){
    //     let ele = eleArr[i];
    //     if(!await ele.isSelected()){
    //         ele.click()
    //     }

    // }
    /**
     * Windows Handling
     * 
     * Steps:
     * 1. Launch the browser
     * 2. Open another windows
     * 3. Switch to the window based on title
     * 4. Switch back to the main window
     * 
     * Methods used:
     * 1. getTitle()
     * 2. getWindowHandle()
     * 3. getWindowHandles()
     * 4. switchToWindow()
     */
    // let link = await $('a[href*="github"]');
    // await link.waitForClickable({timeout:5000});
    // await link.click()
    //await $('a[href*="windows"]')

    //open new windows
// await $('=Click Here').click()
// await $('=Elemental Selenium').click()
// let currentWinTitle = await browser.getTitle();
// let parentWinTitle = await browser.getWindowHandle();
// console.log(`>> currentWinTitle: ${currentWinTitle}`);

// //Switch to specific window
// let winHandles = await browser.getWindowHandles()
// for(let i=0; i<winHandles.length;i++){
//     console.log(`>>Win Handle: ${winHandles[i]}`);
//     await browser.switchToWindow(winHandles[i]);
//     currentWinTitle = await browser.getTitle();

//     if(currentWinTitle === "Home | Elemental Selenium"){
//         await browser.switchToWindow(winHandles[i])
//         let headerTxtSel = (await $('<h1>').getText());
//         console.log(`headerTxtEleSel: ${headerTxtSel}`);
//         //Rest of the actions go here
//         break;
//     }
// }

// // //switch back to parent window
// await browser.switchToWindow(parentWinTitle);
// let parentWinHeadText = await $('<h3>').getText()
// console.log(`>>parentWinHeaderTxt: ${parentWinHeadText}`);

//alerts and popup
/**
 * Handling alerts
 * 
 * Methods used
 * 1. isAlertOpen()
 * 2. acceptAlert()
 * 3. dismissAlert()
 * 4. getAlertText()
 * 5. sendAlertText()
 */
    // await $('button=Click for JS Alert').click();
    
    // console.log(`alert button clicked`);
    // if(await browser.isAlertOpen()){
    //     console.log(`The alert is open!`);
    //     await browser.acceptAlert();    
    // }
    // await $('button=Click for JS Alert').click();
    // console.log('Alert button clicked');
    
    // await browser.waitUntil(
    //     async () => await browser.isAlertOpen(),
    //     {
    //         timeout: 3000,
    //         timeoutMsg: 'Expected alert to be open after clicking the button'
    //     }
    // );
    
    // console.log('The alert is open!');
    
    // // Esperar un pelín
    // await browser.pause(200);
    
    // if (await browser.isAlertOpen()) {
    //     await browser.acceptAlert();
    //     console.log('Alert accepted successfully!');
    // } else {
    //     console.warn('Alert was auto-closed by the browser before acceptAlert.');
    // }

    //UPLOAD FILES
    console.log(process.cwd());

    const filepath =  path.join(process.cwd(),'data','fileupload','dummy.txt')

     await $('#file-upload').setValue(filepath);
     await $('#file-submit').click();

     //await browser.pause(4000);
    const success = await $('<h3>').getText();
    chai.expect(success).to.equal('File Uploaded!');

    await browser.debug();
    
})

