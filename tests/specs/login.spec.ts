import { test, expect } from '../fixtures/testFixtures'

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.goto();
});



test('Sign in with correct email', async ({ page, loginPage }) => {
    await loginPage.login(`${process.env.USERNAME}`, `${process.env.PASSWORD}`)
    await expect(page.locator('[data-test="title"]')).toBeVisible()
});


