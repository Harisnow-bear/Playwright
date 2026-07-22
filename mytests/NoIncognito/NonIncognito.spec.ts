import { test, expect, chromium } from '@playwright/test';
import * as fs from 'fs';


test('Non Incognito', async () => {
    const context = await chromium.launchPersistentContext('my-user-data-dir', {'headless': false});

    const page = await context.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.waitForLoadState('networkidle');

    const cookies = await context.cookies();

    console.log('Cookies: ' + cookies);

    fs.writeFileSync('mytests/cookies/cookies.json', JSON.stringify(cookies));  





});

test.only('Non Incognito - Read Cookies', async () => {

    const browser = await chromium.launch({'headless' : false});

    const cookies = JSON.parse(fs.readFileSync('mytests/cookies/cookies.json', 'utf-8'));

   const context = await browser.newContext();
    await context.addCookies(cookies);

    const page = await context.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.waitForLoadState('networkidle');
});
