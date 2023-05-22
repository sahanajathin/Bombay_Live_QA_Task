const { test, expect } = require('@playwright/test')
exports.bombaylobby = class bombaylobby {
    constructor(page) {
        this.page = page
        this._Desktop_Lobby = page.getByRole('link', { name: 'Desktop Lobby' })
    }
    async gotobombaylobby(url) {

        await this.page.goto(url)
    }

    async validate_desktop_lobby() {
        await expect(this._Desktop_Lobby).toContainText('Desktop Lobby') //Validating Desktop Lobby is present

    }

    async validate_bombay_live_url() {
        await this._Desktop_Lobby.click()
        await expect(this.page.url()).toContain('https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun') //Validating URL
        await expect(this.page).toHaveTitle("Bombay Live") //Validating Page Title

    }
}

exports.bombaylive = class bombaylive {
    constructor(page) {
        this.page = page
        this.placeholderText = page.frameLocator('#iframeId').locator('[data-test-id="entry-username-input"]')
        this.generate_username_button = page.frameLocator('#iframeId').locator('[data-test-id="generate-username-button"]')
        this.continue_save = page.frameLocator('#iframeId').locator('[data-test-id="save-username-button"]')
        this.baccarat_menu_text = page.frameLocator('#iframeId').getByText('Baccarat', { exact: true })
        this.rouletter_menu_text = page.frameLocator('#iframeId').getByText('Roulette', { exact: true })
        this.balance_fun_amt = page.frameLocator('#iframeId').locator('span').filter({ hasText: 'BalanceFun 5,000.00' })
        this.settings_menu = page.frameLocator('#iframeId').locator('[data-test-id="button-click-open-menu-modal"]')
        this.settings_option = page.frameLocator('#iframeId').locator('#settings [data-test-id="menu-link-settings"]')
    }
    async gotobombaylive() {
        await this.page.goto("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun")
    }

    async placeholder_validation() {
        const placeholder = await this.placeholderText.getAttribute('placeholder')
        await expect(placeholder).toEqual('Enter or generate a nickname.') //Place Holder validation 
    }

    async generate_username_validation() {
        await expect(this.generate_username_button).toBeEnabled() //Button is enabled
    }

    async games_check_settings_fun() {
        await this.page.goto("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun")
        await this.generate_username_button.click();
        await this.continue_save.click()
        await expect(this.baccarat_menu_text).toContainText("Baccarat"); //Baccarat Menu is available in page
        await expect(this.rouletter_menu_text).toHaveText("Roulette");  ////Roulet Menu is available in page
        await expect(this.balance_fun_amt).toHaveText("BalanceFun 5,000.00") //Validating Balance Fun Amount
        await this.settings_menu.click();
        await expect(this.settings_option).toContainText("Settings"); //Validate settings options is present.


    }
}