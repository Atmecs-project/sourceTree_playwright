import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("(//a[@data-toggle='dropdown'])[3]")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.hover("(//a[@data-toggle='dropdown'])[1]")
  await page.getByRole('link', { name: 'Desktop', exact: true }).click();
  await page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC Touch HD HTC Touch HD' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'View Cart ' }).click();
});