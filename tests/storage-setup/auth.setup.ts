// // import { test as setup, } from '@playwright/test';
// import { test as setup, expect } from '../fixtures/testFixtures'


// const authFile = 'playwright/.auth/user.json';

// setup('authenticate', async ({loginPage, page }) => {
//     await loginPage.goto()
//     await loginPage.login(`${process.env.EMAIL}`,`${process.env.PASSWORD}` )
//     await page.waitForLoadState('networkidle')
//     await page.context().storageState({ path: authFile });
// });