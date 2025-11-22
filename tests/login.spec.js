import { test, expect } from '@playwright/test';

test('Practice site title', async ({page})=>{
  await page.goto('https://practice.qabrains.com/');
  await page.waitForTimeout(2000);
  await expect(page.locator("//h1[normalize-space()='QA Practice Site']")).toHaveText("QA Practice Site");
})

test('Login with correct email and incorrect password', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/');
  await page.click("//span[normalize-space()='Login']");
  await page.fill("//input[@id='email']","qa_testers@qabrains.com");
  await page.fill("//input[@id='password']","wrongPass123");
  await page.click("//button[@class='absolute right-3 top-1/2 -translate-y-1/2']");
  await page.waitForTimeout(2000);
  await page.click("//button[normalize-space()='Login']");
  const errorMsg = page.locator("//span[@class='title text-black text-md']");
  await expect(errorMsg).toHaveText("Your password is invalid!")
  await page.waitForTimeout(2000);
}); 

test('Login with incorrect email and correct password', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/');
  await page.fill("#email","qa_devloper@qabrains.com");
  await page.fill("#password","Password123");
  await page.click("button[type='submit']");
  await page.waitForTimeout(2000);
  const errorMsg = page.locator(".mb-5.text-right.space-y-2")
  await expect(errorMsg).toHaveText("Your email is invalid!")
   await page.waitForTimeout(2000);
}); 

