import {test,expect} from '@playwright/test';

test('auth popup test',async ({page})=>{

    const username = 'admin';
    const password = 'admin';
    // const authHeader = 'Basic ' + btoa(username + ':' + password);

    page.setExtraHTTPHeaders({
        'Authorization': createBasicAuthHeader(username, password)
    });
    await page.goto  ('https://the-internet.herokuapp.com/basic_auth');
    await page.waitForTimeout(5000);

    await page.close();
});

function createBasicAuthHeader(username: string, password: string) {
    return 'Basic ' + btoa(username + ':' + password);
}
