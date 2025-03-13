import { test, expect, Page, BrowserContext } from "@playwright/test";

test.describe("visual comparison test", () => {
  test("compare landing page title with the golden screenshot", async ({
    page,
  }) => {
    await page.goto("https://playwright.dev");
    await expect(page.locator(".heroTitle_ohkl")).toHaveScreenshot(
      "landing.png",
      { maxDiffPixels: 5 }
    );
  });
});
// A golden screenshot is taken and store in visualTesting folder, it will then run again and compare the screenshot with the png image
