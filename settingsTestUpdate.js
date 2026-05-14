const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false, slowMo: 800
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://grabdocs.com/');
  await page.getByRole('link', { name: ' Sign In ' }).click();
  await page.getByRole('textbox', { name: 'Username, email, or phone' }).click();
  await page.getByRole('textbox', { name: 'Username, email, or phone' }).fill('marcjenkins2020@gmail.com');
  await page.getByRole('textbox', { name: 'Username, email, or phone' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('testPW123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Verification code' }).click();
  await page.getByRole('textbox', { name: 'Verification code' }).fill('123777');
  await page.getByRole('button', { name: 'Verify Code' }).click();
  await page.getByRole('button', { name: 'Profile menu' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Display' }).click();
  await page.getByRole('combobox').first().selectOption('light');
  await page.getByRole('button', { name: 'Use Detected Timezone' }).click();
  await page.getByText('America/New_York', { exact: true }).click();
  await page.getByRole('combobox').nth(1).selectOption('America/Chicago');
  await page.locator('div').filter({ hasText: 'SettingsManage your account' }).nth(5).click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.getByRole('slider').fill('1.1');

  // ---------------------
  await context.close();
  await browser.close();
})();