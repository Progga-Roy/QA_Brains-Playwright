import { test, expect } from '@playwright/test';

test('User Registration', async({page})=>{
    await page.goto("https://practice.qabrains.com/");
    await page.click("//span[normalize-space()='Registration']");
    const resigtrationTitle = page.locator("//h2[normalize-space()='User Authentication']");
    await expect(resigtrationTitle).toHaveText("User Authentication");
    await page.fill("#name", "Jesica")
    await page.selectOption("#country","Bangladesh");
    await page.selectOption("#account","Student");
    await page.fill("#email","qa_testers@qabrains.com");
    await page.fill("#password","Password123");
    await page.fill("#confirm_password","Password123");
    const submitBtn = page.locator("button[type='submit']")
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();
    const regSuccessMsg = page.locator(".mb-10.text-right");
    await expect(regSuccessMsg).toHaveText("Registration Successful");
})