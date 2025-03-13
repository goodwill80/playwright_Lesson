import { test, expect, Page, BrowserContext } from "@playwright/test";

test("test tabs handling", async ({ page, context }) => {
  await page.goto("https://demo.chetanpanchal.com");
  const originalPage = page;
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("#loadContentInWindow").click(), // click on btn to fire new tab
  ]);
  await printTabs(context);

  // Switch back to orginal tab
  await originalPage.bringToFront();
  await newPage.waitForTimeout(3000);

  // Switch to new tab
  await newPage.bringToFront();
  await newPage.waitForTimeout(3000);

  // Close new Tab and switch back
  await newPage.close();
  await originalPage.bringToFront();

  await printTabs(context);
});

async function printTabs(context) {
  console.log("-----Current Tabs");
  for (const page of context.pages()) {
    await page.bringToFront();
    const windowName = await page.evaluate(() => window.name);
    console.log(windowName === "" ? "main" : windowName);
  }
  console.log("------end");
}
