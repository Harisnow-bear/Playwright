import {expect, test} from '@playwright/test';




test.skip('Forms submission application',async ({page})=>{

    await page.goto('https://demo.playwright.dev/todomvc');

   const inputBox =  page.getByPlaceholder('What needs to be done?');
    await inputBox.fill('Buy Milk');
    await inputBox.press('Enter');
    await inputBox.fill('Buy Coffee Mix')
    await inputBox.press('Enter');
    await page.waitForTimeout(3000);

    await page.locator('.toggle').nth(0).check();

    const todoItem = page.getByTestId('todo-item').nth(0);

    await expect(todoItem).toHaveClass('completed');

    
});


test.skip ('Form Handling remove item',  async ({page})=> {
 await page.goto('https://demo.playwright.dev/todomvc');

 const placeholder ='//input[@placeholder="What needs to be done?"]';
    await page.fill(placeholder,'Batmobile');
    await page.press(placeholder,'Enter');
    await page.fill(placeholder,'Batman Suit');
    await page.press(placeholder,'Enter');
    await page.waitForTimeout(3000);
    const iterm1 =  page.getByTestId('todo-item').nth(1);
    await iterm1.hover();
    await page.locator('.destroy').nth(1).click();

    await expect(iterm1).not.toBeVisible();
    


});


test.only('get title of the page', async ({page})=> {
    await page.goto('https://demo.playwright.dev/todomvc');
    const title = await page.title();
    console.log('Title of the page is : ' +  title);

});


