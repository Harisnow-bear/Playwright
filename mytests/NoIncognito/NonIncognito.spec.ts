import { test, expect, chromium, type BrowserContext, type Page, webkit, firefox } from '@playwright/test';


test('Non Incognito', async () => {
    const browser:BrowserContext = await chromium.launchPersistentContext('', { headless: false });
    
    const pages: Page[] =  browser.pages();
    const page1 = pages[0];
    
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
    await page1.close();
});
