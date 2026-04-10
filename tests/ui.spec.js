const { test, expect } = require('@playwright/test');

test('Complete UI Flow', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Sort high to low
  await page.selectOption('.product_sort_container', 'hilo');

  // Get prices
  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

  // Verify sorted
  const sorted = [...numericPrices].sort((a, b) => b - a);
  expect(numericPrices).toEqual(sorted);

  // Add top 2 items
  await page.locator('.inventory_item button').nth(0).click();
  await page.locator('.inventory_item button').nth(1).click();

  // Go to cart
  await page.click('.shopping_cart_link');

  // Checkout
  await page.click('#checkout');
  await page.fill('#first-name', 'test');
  await page.fill('#last-name', 'user');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');
  await page.click('#finish');

  // Final assertion
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});