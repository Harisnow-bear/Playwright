import {test, expect} from '@playwright/test';



test('events register',async ({page}) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
     const title = await page.title();
     console.log(title);
     await expect(title).toContain('EventHub');

     await page.getByText('Register').click();
     const email =  page.getByPlaceholder('you@email.com');
     const password = page.getByTestId('register-password');
     const confirmPassword = page.getByPlaceholder('Repeat your password');
     await email.fill("test@example.com");
     await password.fill("TestPassword123!");
     await confirmPassword.fill("TestPassword123!");
     await page.getByRole('button', {name:'Create Account'}).click();
     await page.waitForTimeout(3000);

});

test.only('mouse actions', async({page}) => {
    await page.goto('file:///C:/Users/HariharanRajmohan/Desktop/Auto/index.html');
    await page.waitForTimeout(3000);

})