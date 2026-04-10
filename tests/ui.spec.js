const { test, expect } = require('@playwright/test');

test('Login test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Wait for inventory page
  await page.waitForSelector('.inventory_list');

  // Assertions
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});