import { test, expect } from '@playwright/test';

test('Fetch title', async ({ page }) => {
  await page.goto('https://qabrains.com/');
  await page.setViewportSize({width:1528,height:1080});
  await page.waitForTimeout(2000);
  await expect(page.locator("//h2[contains(text(),'The Leading Community for Quality Assurance and So')]")).toHaveText('The Leading Community for Quality Assurance and Software Testing');
  await page.click("//a[normalize-space()='Practice Site']");
  await page.waitForTimeout(2000);
  await page.click("//span[normalize-space()='Start Testing Now']");
  await page.waitForTimeout(2000);
}); 