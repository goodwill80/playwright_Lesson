import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.chetanpanchal.com/Frames.html");
  await page
    .frameLocator("frame[name='frameOne']")
    .getByRole("textbox")
    .click();
  await page
    .frameLocator("frame[name='frameOne']")
    .getByRole("textbox")
    .press("Control+a");
  await page
    .frameLocator("frame[name='frameOne']")
    .getByRole("textbox")
    .fill("Chetan");
  await page
    .frameLocator("frame[name='frameTwo']")
    .getByRole("textbox")
    .click();
  await page
    .frameLocator("frame[name='frameTwo']")
    .getByRole("textbox")
    .press("Control+a");
  await page
    .frameLocator("frame[name='frameTwo']")
    .getByRole("textbox")
    .fill("Panchal");
});
