import { test, expect } from "@playwright/test";

test.describe("self pract on site", () => {
  test("getting element", async ({ page }) => {
    await page.goto("https://demo.chetanpanchal.com/");
    await expect(page).toHaveTitle("Demo page");
    await expect(page.locator("h1")).toContainText("Display of HTML elements");
  });
});

// Code gen
// npx playwright codegen https://demo.chetanpanchal.com/
