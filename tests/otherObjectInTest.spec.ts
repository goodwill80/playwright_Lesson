import { test, expect, Page, BrowserContext } from "@playwright/test";

test("All build in fixtures", async ({
  page,
  browser,
  browserName,
  context,
  request,
  baseURL,
  headless,
  isMobile,
}, testInfo) => {
  console.log(`Browsername: ${browserName}`);
  console.log(`Running in headless mode: ${headless}`);
  console.log(`Base URL: ${baseURL ?? "not set"}`);
  console.log(`is mobile?: ${isMobile}`);
  console.log(`Test file: ${testInfo.file}`);
  console.log("Test title: " + testInfo.title);
  console.log("Test Retries " + testInfo.retry);

  console.log("Browser version: " + browser.version());
  console.log("Context cookies: ", await context.cookies());
  let urlLink = "https://www.example.com";
  await page.goto(urlLink);
  expect(await page.title()).toBe("Example Domain");

  const response = await request.get("https://api.github.com");
  console.log(response.status());
});
