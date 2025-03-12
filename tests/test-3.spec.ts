import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://sg.yahoo.com/?p=us");

  await page.getByRole("combobox", { name: "Search query" }).click();
  await page.getByRole("combobox", { name: "Search query" }).fill("tsla");
  await page.getByRole("combobox", { name: "Search query" }).press("Enter");
});

// Code gen
// npx playwright codegen https://duckduckgo.com
