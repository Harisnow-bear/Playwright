import {test, expect, type Locator, type BrowserContext} from '@playwright/test';

const email: string = 'victor.frankenstein@example.com';
const password: string = 'password123';

const email1  = 'Maximus.decimus@meridius.com';
const password1 = 'password123';

test.skip('Create account', async ({page}) =>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect (page).toHaveTitle('Account Login');

    const continueButton : Locator = await page.getByRole('link',{name : 'Continue'});
    await continueButton.click();
    await expect(page).toHaveTitle('Register Account');

    await page.locator('[name="firstname"]').fill('Maximus');
    await page.locator('#input-lastname').fill('Decimus');
    await page.locator('#input-email').fill(email1);
    await page.getByPlaceholder('Telephone').fill('9939393990');
    await page.locator('#input-password').fill(password1);
    await page.locator('#input-confirm').fill(password1);

    const newsletterCheckbox: Locator = await page.locator('[name="newsletter"][value="0"]');

    if (await newsletterCheckbox.isChecked()) {
        console.log('Newsletter subscription is already selected');
    } else {
        await newsletterCheckbox.check();
        console.log('Newsletter subscription is now selected');
    }

    await page.locator('[type="checkbox"]').check();

    await page.locator('[type="submit"]').click();

    await expect(page).toHaveTitle('Your Account Has Been Created!'); 
});

test.only('Login', async ({browser}) => {
 const context1:BrowserContext = await browser.newContext();
 const page1 = await context1.newPage();
    

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page1).toHaveTitle('Account Login');
    await page1.getByPlaceholder('E-Mail Address').fill(email);
    await page1.getByPlaceholder('Password').fill(password);
    await page1.locator('[type="submit"]').click();
    await expect(page1).toHaveTitle('My Account');

    await page1.screenshot({path : 'mytests/screenshots/login.png'});

    await page1.getByRole('link',{name : 'Logout'}).click();
    console.log('Logout successful');
    await expect(page1).toHaveTitle('Account Logout');

    await page1.close();

    const context2:BrowserContext = await browser.newContext();
    const page2 = await context2.newPage();

     await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page2).toHaveTitle('Account Login');
    await page2.getByPlaceholder('E-Mail Address').fill(email1);
    await page2.getByPlaceholder('Password').fill(password1);
    await page2.locator('[type="submit"]').click();
    await expect(page2).toHaveTitle('My Account');

    await page2.screenshot({path : 'mytests/screenshots/login2.png'});

    await page2.getByRole('link',{name : 'Logout'}).click();
    console.log('Logout successful');
    await expect(page2).toHaveTitle('Account Logout');
    await page2.close();
    
    await context1.close();
    await context2.close();
});




