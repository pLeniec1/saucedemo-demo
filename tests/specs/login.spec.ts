import { test, expect } from '../fixtures/testFixtures'

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.goto();
});



test('Sign in with correct email', async ({ page, loginPage }) => {
    await loginPage.login(`${process.env.USERNAME}`, `${process.env.PASSWORD}`)
    await expect(page.locator('[data-test="title"]')).toBeVisible()
});

test.skip('Sign in with incorrect username', async ({ page, loginPage }) => {
    // expect error
});

test.skip('Sign in with incorrect password', async ({ page, loginPage }) => {
    // expect error
});

test.skip('Sign in with empty password', async ({ page, loginPage }) => {
    // expect error
});

test.skip('Sign in with empty username', async ({ page, loginPage }) => {
    // expect error
});

test.skip('Sign in with empty username and password', async ({ page, loginPage }) => {
    // expect error
});

test.skip('SQL injection', async ({ page, loginPage }) => {
    // expect error
});

test.skip('different user/s', async ({ page, loginPage }) => {
    // expect user with different role 
});

test.skip('username character limit (if any)', async ({ page, loginPage }) => {
    // expect error
});

test.skip('password character limit (if any)', async ({ page, loginPage }) => {
    // expect error
});