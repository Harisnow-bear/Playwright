
import {test,expect} from '@playwright/test';

test('Page home', async ({page}) => {
await page.goto('/');
await page.waitForTimeout(5000);
await page.reload();
});

test('Free Trial',async ({page})=> {
await page.goto('/');
// await page.click('[data-backend-test-id="close-button"]');
await page.locator('[data-ga-name="free trial"]').first().click();
// await page.waitForTimeout(5000);
await page.locator('#new_user_first_name').fill('John');
await page.locator('#new_user_last_name').fill('Snow');
await page.getByTestId('new-user-username-field').fill('johnsnow');
await page.getByTestId('new-user-email-field').fill('john.snow@example.com');
await page.locator('#new_user_password').fill('password123');

const checkbox =  page.locator('#new_user_onboarding_status_email_opt_in');

if(await checkbox.isChecked()) {
    console.log('Checkbox is already checked');
}else{
    await checkbox.check();
    console.log('Checkbox is now checked');
}
});






