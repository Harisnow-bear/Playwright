import {test,expect, type Locator} from '@playwright/test';

test('playing with locators',async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // const downloadsLink:Locator = page.locator('text=Software');
    // downloadsLink.click();

    // await page.locator('input[name="firstname"]').fill('Suren');

    await page.getByRole('textbox', { name: 'First Name' }).fill('Suren');

    await expect(page.getByRole('radio', {name:'No'})).toBeChecked();

    await page.getByRole('radio', {name:'Yes'}).check();

    
    await page.locator('[type="checkbox"]').check();

    await page.getByRole('button', {name:'Continue'}).click();

    await page.getByRole('link',{name : 'Address Book'}).click();

    await page.waitForTimeout(5000);


})

