const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // ✅ This line is enough (auto wait)
  await expect(page.locator('.inventory_list')).toBeVisible();

  // ✅ Then check URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});