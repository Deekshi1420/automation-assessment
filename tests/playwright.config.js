// playwright.config.js

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    actionTimeout: 15000,
    navigationTimeout: 30000,
    trace: 'on-first-retry'
  },
});