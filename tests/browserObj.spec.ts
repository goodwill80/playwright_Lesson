import { test, expect, Page, BrowserContext } from "@playwright/test";

test.use({ locale: "fr-FR" });

test("should inherit use options on context when using built-in browser fixture", async ({
  browser,
}) => {
  const context = await browser.newContext({
    userAgent: "custom",
    viewport: { height: 300, width: 300 },
  });
  const page = await context.newPage();
  await page.goto("https://www.chetanpanchal.com");
  expect(await page.evaluate(() => navigator.userAgent)).toBe("custom");
  expect(await page.evaluate(() => window.innerWidth)).toBe(300);
  await context.close();
});

test("example", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

test.describe("German Lanaguage", () => {
  test.use({
    locale: "ja-JP",
  });
  test("example german", async ({ page, context }) => {
    await context.setGeolocation({
      longitude: 103.851959,
      latitude: 1.29027,
    });
    await page.goto("https://maps.google.com");
    await expect(page).toHaveTitle("Google Maps");
    await page.goto("https://maps.google.com");
    await expect(page).toHaveTitle("Google Maps");
  });
});
