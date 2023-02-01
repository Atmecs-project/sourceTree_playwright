import { test,expect,  chromium } from '@playwright/test';
test('Should add item to cart', async()=>{
  const Browser = await chromium.launch();
  const Context = await Browser.newContext();
  const Page = await Context.newPage();
  await Page.goto('https://ecommerce-playground.lambdatest.io/');
  const text = Page.locator("'Upto 50% Off on Fully Automatic Top Load Washing Machine'")
  console.log(text)
  const expectedText = "Upto 50% Off on Fully Automatic Top Load Washing Machine"
  console.log(expectedText)
  //expect(text).toHaveText("" + expectedText)
  await expect(Page.locator("'Upto 50% Off on Fully Automatic Top Load Washing Machine'")).toHaveText("Upto 50% Off on Fully Automatic Top Load Washing Machine")
  //await Page.goto('https://www.google.com/')  
  await Page.hover("(//a[@data-toggle='dropdown'])[3]")
  //await Page.click("(//span['text=Login'])[43]")
  await Page.click("'Login'")
  await Page.hover("(//a[@data-toggle='dropdown'])[1]")
  //await Page.click("//a[@title='Desktop']")
  await Page.click("'Desktop'")
  await Page.click("(//div[@class='carousel-item active'])[1]")
  await Page.click("(//button[@title='Add to Cart'])[2]")
  //await Page.waitForSelector("(//div[@class='cart-icon'])[1]")
  await Page.click("//a[@class='btn btn-primary btn-block']");
  //await expect(Page.locator("(//img[@class='img-thumbnail'])[2]")).toBeVisible()
  await expect(Page.locator("(//input[@class='form-control'])[1]")).toHaveCount(1)
})