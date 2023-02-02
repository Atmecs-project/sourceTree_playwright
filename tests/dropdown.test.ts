import { test, expect } from "@playwright/test"
test("handling dropdown",async ({page}) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
        await page.selectOption("#select-demo", {
            // label: "Sunday"
            // value: "Sunday"
            index: 1
        })
        const selectdemo = page.locator("id=select-demo");
        selectdemo.scrollIntoViewIfNeeded();
        await page.waitForTimeout(5000);
        await page.selectOption("#multi-select", [{
            label: "Texas"
        },{
            index: 2
        },
        {
            value: "Washington"
        }
    ])
    await page.waitForTimeout(5000);
    
})

test("bootstrap dropdown",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("South Africa");
    async function selectCountry(countryName){
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click()
    }
    
    
    // await page.waitForTimeout(3000);

})