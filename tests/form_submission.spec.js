import { test, expect } from '@playwright/test';

test('Form submission', async({page})=>{
    await page.goto("https://practice.qabrains.com/");
    await page.click("li[id='form-submission'] span[class='text flex-1']")
    const formSubmissionTitle = page.locator("//h2[normalize-space()='Form Submission']");
    await expect(formSubmissionTitle).toHaveText("Form Submission");
    await page.fill("#name","Naymer");
    await page.fill("#email","qa_testers@qabrains.com");
    await page.fill("#contact","12345678901");
    await page.fill('#date', '2025-07-22');
    await page.setInputFiles('#file',"E:\\QA_Brain_With_Playwright\\file\\nature2.jpeg");
    await page.locator("#Blue").scrollIntoViewIfNeeded();
    await page.click("#Blue");
    await page.check("#Pizza")
    await page.selectOption("#country","Brazil")
    await page.click("button[type='submit']");
    const successMsg = page.locator(".mb-10.text-right");
    await expect(successMsg).toHaveText("Form submit successfully.");
   



})