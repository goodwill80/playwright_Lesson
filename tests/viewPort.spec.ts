import { test, expect, Page, BrowserContext } from "@playwright/test";

test.use({
  viewport: {
    width: 1600,
    height: 1200,
  },
});

// This test will run the above view port
test("my test", async ({ page }) => {
  await page.goto("https://www.chetanpanchal.com");
});

// This test will run the internal view port
test.describe("specific viewport block", () => {
  test.use({
    viewport: {
      width: 500,
      height: 500,
    },
  });
  test("my test", async ({ page }) => {
    await page.goto("https://www.chetanpanchal.com");
  });
});
