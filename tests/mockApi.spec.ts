import { test, expect } from "@playwright/test";

// Replacing actual api with mock data

test("mock api", async ({ page }) => {
  // Mock api before navigating
  await page.route("*/**/api/v1/fruits", async (route) => {
    const json = [
      {
        name: "berries",
        id: 21,
      },
    ];
    await route.fulfill({ json });
  });

  // Go to page
  await page.goto("https://demo.playwright.dev/api-mocking");

  // assert that the strawberry is visible
  await expect(page.getByText("Berries")).toBeVisible();
});

test("gets the json from api and adds a new fruit", async ({ page }) => {
  // get the response and add to it
  await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: "Berries", id: 100 });
    // Fullfill using the original response, while patching the response body
    await route.fulfill({ response: json });
  });

  // Go to page
  await page.goto("https://demo.playwright.dev/api-mocking");

  // Assert that the new fruit is visible
  await expect(page.getByText("Berries", { exact: true })).toBeVisible();
});
