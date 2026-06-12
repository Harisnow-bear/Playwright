import {test, expect, type Locator} from '@playwright/test';

test("Chain Locators", async ({page}) => {
    
    await page.goto('https://orangehrm.com/book-a-free-demo');
    //Form which is parent of Full Name, Email, etc
    const form = await page.locator("#Form_getForm");
    await form.locator('#Form_getForm_FullName_Holder').getByPlaceholder('Full Name*').fill("Husli Fisli");

    //Directly chaining without storing the parent form in a variable
    await page.locator("#Form_getForm").locator('#Form_getForm_Email_Holder').getByPlaceholder('Work Email*').fill('hustler@hunter.com');

    //Arrow function chaining
    await page.locator('#Form_getForm >> #Form_getForm_Contact_Holder >> #Form_getForm_Contact').fill('1234567890');

    await page.waitForTimeout(5000);

    //Multiple locators

   

})

test.only("Chain Locators with nth", async ({page}) => {

    await page.goto('https://orangehrm.com/book-a-free-demo');
     const textinputs:string[] = ['Hari', '8292003033', 'KEKRAN MEKRAN','GM'];
    const textLocators:Locator[] = await page.locator("#Form_getForm").locator('[class=text]').all();

    for(const textbox  of textLocators){
        for(const text of textinputs){
            await textbox.fill(text);
    }
    }

})
