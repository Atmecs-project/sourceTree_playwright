import { test, expect } from "@playwright/test"
test("handling alerts",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog",)
    await page.locator("button:has-text('Click Me')").nth(0).click();

})