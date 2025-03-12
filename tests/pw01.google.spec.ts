import { expect, test } from "@playwright/test";

test.describe("google search home page", () => {
  const url = "https://www.google.com";
  test("goto google", async ({ page }) => {
    await page.goto(url);
  });
  test("check google title", async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveTitle("Google");
  });
});

test.describe("bing search home page", () => {
  const url = "https://www.bing.com";
  test("goto bing", async ({ page }) => {
    // let searchbox = page.locator("#searchbox_input");
    await page.goto(url);
  });
  test("check bing title", async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveTitle("Search - Microsoft Bing");
  });
});
