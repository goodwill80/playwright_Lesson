import { test, expect } from "@playwright/test";

// test.beforeEach(async ({ page }) => {
//   await page.goto("http://gogoduck.com");
// });

// test.beforeAll(async ({ page }, testInfo) => {
//   console.log(
//     `beforeAll title: ${testInfo.title} pidx: ${testInfo.parallelIndex}`
//   );
//   //   await page.goto("http://gogoduck.com");
// });

// test.afterEach(async ({ page }) => {
//   await page.goto("http://gogoduck.com");
// });

// test.afterAll(async ({ page }) => {
//   await page.goto("http://gogoduck.com");
// });

test.describe("group testing", () => {
  test.beforeAll(async ({}, test) => {
    console.log(`beforeAll - ${test.parallelIndex}`);
  });
  test.afterAll(async () => {
    console.log("afterall");
  });
  test.beforeEach(async () => {
    console.log("before each...");
  });
  test("group 1", async () => {
    console.log("group 1");
  });
  test("group 2", async () => {
    console.log("group 2");
  });
  test("group 3", async () => {
    console.log("group 3");
  });
  test("group 4", async () => {
    console.log("group 4");
  });
});

// npx playwright test "hooks.spec.ts" --project "Chromium" --workers 1
