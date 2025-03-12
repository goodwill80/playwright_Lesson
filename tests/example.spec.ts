import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  // await page.getByRole("link", { name: "Get started" }).click();
  let getStartedBtn = page.getByRole("link", { name: "Get started" });
  await getStartedBtn.click();
  // Expects page to have a heading with the name of Installation.
  // "heading" can be h1, h2, h3, h4 ....
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
