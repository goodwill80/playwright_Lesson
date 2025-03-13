import { test, expect, Page, BrowserContext } from "@playwright/test";

const people = ["chetan", "jonathan", "oliver"];

for (const name of people) {
  test(`testing with ${name}`, async ({ page }) => {
    console.log(`Name: ${name}`);
  });
}
