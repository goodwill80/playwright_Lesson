import { test, expect, Page, BrowserContext } from "@playwright/test";

test("skip this test on chromium", async ({ page, browserName }) => {
  test.skip(browserName === "chromium", "still working on it");
});

test.describe("chromium only", () => {
  test.skip(({ browserName }) => browserName !== "chromium", "chromium only");
  test.beforeAll(async () => {});
});

test.fail("Must fail", async ({ page }) => {
  await page.goto("https://www.yahoo.com");
});

test.fixme("Must fix", async ({ page }) => {
  await page.goto("https:www.google.com");
});

test("Slow test, triple timeout", async ({ page }) => {
  test.slow();
  await page.goto("https:www.google.com");
});

test.beforeAll(async () => {
  test.setTimeout(6000);
});

test.only("test only this", async ({}) => {});

test.describe(
  "report tests",
  {
    annotation: { type: "category", description: "report" },
  },
  () => {
    test(
      "test full report",
      {
        annotation: [
          { type: "issue", description: "https://github.com" },
          { type: "performance", description: "very slow" },
        ],
      },
      async ({ page }) => {}
    );
    test("example test", async ({ page, browser }) => {
      test.info().annotations.push({
        type: "browswer versions",
        description: browser.version(),
      });
    });
  }
);
