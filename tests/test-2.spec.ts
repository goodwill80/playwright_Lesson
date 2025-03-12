import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.booking.com/");
  await page.getByRole("combobox", { name: "Where are you going?" }).click();
  await page
    .getByRole("combobox", { name: "Where are you going?" })
    .fill("sing");
  await page
    .getByRole("button", { name: "Singapore Singapore", exact: true })
    .click();
  await page.getByRole("checkbox", { name: "11 March" }).click();
  await page.getByRole("checkbox", { name: "29 March" }).click();
  await page;
  const page2Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Greatwood Residence at" }).click();
});
