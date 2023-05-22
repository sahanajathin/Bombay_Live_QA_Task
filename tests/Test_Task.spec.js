const { test, expect } = require('@playwright/test')
import { bombaylive, bombaylobby } from '../Pages/bombay_elements'

test.beforeAll(async ({ browser }) => {
    console.log("Test started")})

test.afterAll(async ({ browser }) => {
    console.log("Test Ended")})

test('Desktop Lobby should be present', async ({ page }) => {
    const obj1 = new bombaylobby(page)
    await obj1.gotobombaylobby('https://bombaylobby.com/')
    await obj1.validate_desktop_lobby()
})

test('Validate URL and page title', async ({ page }) => {
    const obj1 = new bombaylobby(page)
    await obj1.gotobombaylobby('https://bombaylobby.com/')
    await obj1.validate_bombay_live_url()
})

test('Place Holder Text Validation and Generate User Name button Enabled check', async ({ page }) => {
    const obj2 = new bombaylive(page)
    await obj2.gotobombaylive()
    await obj2.placeholder_validation()
})

test('Barracat and Roulette present in page , settings option , Balance Fun Amount', async ({ page }) => {
    const obj2 = new bombaylive(page)
     await obj2.games_check_settings_fun()

})

