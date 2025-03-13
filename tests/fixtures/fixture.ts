import { test as base } from "@playwright/test";

export type TestOptions = {
  person: string;
};

export const test = base.extend<TestOptions>({
  // Define an option and provide a default value
  // We can later override it in the config
  person: ["Default", { option: true }],
});

export const testPackage = base.extend<TestOptions>({
  person: ["Oliver", { option: true }],
  page: async ({ page, person }, use) => {
    await page.goto("https://www.duckduckgo.com/?q=" + person);
    // Each test will use this page with the person as search query
    await use(page);
  },
});

export { expect } from "@playwright/test";
