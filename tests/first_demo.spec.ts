import { expect, test } from "@playwright/test";

test("test google search page", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

test("test bing search page", async ({ page }) => {
  await page.goto("https://www.bing.com");
  await expect(page).toHaveTitle("Search - Microsoft Bing");
});

test("test ST engineering", async ({ page }) => {
  await page.goto("https://www.stengg.com/");
  await expect(page).toHaveTitle(
    "ST Engineering | Harnessing Technology and Innovation"
  );
});

// Cannot passed due to google's restriction
test.skip("test google search page for india", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
  const searchBox = page.getByLabel("Search", { exact: true }); // arial-label with exact Match, this is an assertion
  await searchBox.fill("india"); // enter text "india" into searchbox
  await searchBox.press("Enter"); // press enter in searchBox
  await expect(page).toHaveTitle("india - Google Search");

  // Command to test a specific test in line 20 - "npx playwright test first_demo.spec.ts:20 --project chromium --list"
  // await page.keyboard.press("Enter"); // press enter on keyboard
  // const searchBox = page.getByRole("combobox");
  // const inputValue = await page.locator("#APjFqb").inputValue();
});

// Cannot passed due to bing's restriction
test.skip("test bing search page for india", async ({ page }) => {
  await page.goto("https://www.bing.com");
  await expect(page).toHaveTitle("Search - Microsoft Bing");
  const searchBox = page.getByLabel("characters"); // arial-label with exact Match, this is an assertion
  await searchBox.fill("india"); // enter text "india" into searchbox
  await searchBox.press("Enter"); // press enter in searchBox
  await expect(page).toHaveTitle("Search - Microsoft Bing");

  // Command to test a specific test in line 34 - "npx playwright test first_demo.spec.ts:20 --project chromium --list"
});

// Able to passed
test("test duck duck go search for india", async ({ page }) => {
  await page.goto("https://duckduckgo.com/");
  // await expect(page).toHaveTitle("Search - Microsoft Bing");
  const searchBox = page.getByLabel("Search with DuckDuckGo", { exact: true }); // arial-label with exact Match, this is an assertion
  await searchBox.fill("india"); // enter text "india" into searchbox
  await searchBox.press("Enter"); // press enter in searchBox
  await expect(page).toHaveTitle("india at DuckDuckGo");
  // Command to test a specific test in line 34 - "npx playwright test first_demo.spec.ts:20 --project chromium --list"
});

// This will specifically run the specific file on only chromium, and using 1 x worker (thread) on headed
// npx playwright test first_demo.spec.ts --project chromium --workers 1 --headed
