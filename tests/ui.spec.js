const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await page.waitForURL('**/inventory.html');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});