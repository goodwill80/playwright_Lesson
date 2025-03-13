import { test, expect, Page, BrowserContext } from "@playwright/test";

test.use({
  launchOptions: { slowMo: 500, args: ["--start-maximized"] },
});

test("nav test", async ({ page }) => {
  await page.goto("https://www.yahoo.com");
  await page.goto("https://www.google.com");
  await page.goBack();
  await page.goForward();

  // Wait
  //   await page.waitForTimeout(500);
  //   let html = await page.content();
  //   await page.keyboard.insertText("funny");
  //   await page.mouse.click();
  for (const link of await page.getByRole("link").all()) {
    console.log("inner text of link: ", await link.innerText());
  }
  const alllinkTexts = await page.getByRole("link").allInnerTexts();
  console.log("all inner texts", alllinkTexts);
  let searchBar = page.getByLabel("Search", { exact: true });
  const linkTexts = await page.getByRole("link").allInnerTexts();
  console.log("searchbar boundings", await searchBar.boundingBox());
  console.log("get attribute name", await searchBar.getAttribute("name"));
});
