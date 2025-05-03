import { Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Then(/^Inventory page should list (\d+)$/,async (noOfProducts)=>{
    if(!noOfProducts) throw Error (`Invalid product count provided: ${noOfProducts}`)

    /** */
    let eleArr = await $$('.inventory_item_name');
    chai.expect(eleArr.length).to.equal(parseInt(noOfProducts,10));
})

Then(/^Validate all products have valid price$/, async ()=>{
    /**
     * Steps
     * 1. Get price list
     * 2. Convert string to number
     * 3. Assert price is >0
     */
    let priceArr = await $$('.inventory_item_price');
    let priceStrArr = [];

    for(let i=0; i< await priceArr.length; i++){
         let priceStr = await priceArr[i].getText();
         priceStrArr.push(priceStr);  
    }
    console.log(`>>Price with $: ${priceStrArr}`);

    let priceNumArr = priceStrArr.map(ele =>ele.replace("$",""))
    console.log(`>> Price in numbers: ${priceNumArr}`);

    //Assert
    let invalidPriceArr = priceNumArr.filter((ele)=>ele <=0);
    chai.expect(invalidPriceArr.length).to.equal(0);
})