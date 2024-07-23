import type { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly usernnameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator


    constructor(public readonly page: Page) {
        this.usernnameInput = this.page.locator('[data-test="username"]')
        this.passwordInput = this.page.locator('[data-test="password"]')
        this.signInButton = this.page.locator('[data-test="login-button"]')
    }

    async goto() {
        await this.page.goto('');
    }

    async login(username: string, password: string) {
        await this.usernnameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click()
    }
}