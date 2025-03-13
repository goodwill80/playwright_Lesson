import { expect, test } from "@playwright/test";

test("screenshot", async ({ page }) => {
  await page.goto("https://www.google.com");
  let searchBox = page.getByLabel("Search", { exact: true });
  let btn = page.getByText("Google Search", { exact: true });
  await page.screenshot({ path: "screenshot.png" });
  await page.screenshot({
    path: "screenshot2.png",
    mask: [btn],
    maskColor: "#FFFFFF",
    style: "textarea[name=q]{border: 2px red solid",
  });
  await searchBox.screenshot({ path: "search-box.png" });

  //   try {
  //     expect(...);
  //   } catch (e) {
  //     await page.screenshot({ path: "screenshot2.png" });
  //   }

  let title = await page.title();
  if (title !== "Google") {
    await page.screenshot({ path: "screenshotError.png" });
  }
});
