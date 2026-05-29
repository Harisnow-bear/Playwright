import {test, expect, type Locator} from '@playwright/test';

const email: string = 'victor.frankenstein@example.com';
const password: string = 'password123';

test.skip('Create account', async ({page}) =>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect (page).toHaveTitle('Account Login');

    const continueButton : Locator = await page.getByRole('link',{name : 'Continue'});
    await continueButton.click();
    await expect(page).toHaveTitle('Register Account');

    await page.locator('[name="firstname"]').fill('Victor');
    await page.locator('#input-lastname').fill('Frankenstein');
    await page.locator('#input-email').fill(email);
    await page.getByPlaceholder('Telephone').fill('2839030202');
    await page.locator('#input-password').fill(password);
    await page.locator('#input-confirm').fill(password);

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

test.only('Login', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account Login');
    await page.getByPlaceholder('E-Mail Address').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.locator('[type="submit"]').click();
    await expect(page).toHaveTitle('My Account');

    await page.screenshot({path : 'mytests/screenshots/login.png'});

    await page.getByRole('link',{name : 'Logout'}).click();
    console.log('Logout successful');
    await expect(page).toHaveTitle('Account Logout');
});

