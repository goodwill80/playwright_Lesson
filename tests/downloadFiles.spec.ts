import { test, expect } from "@playwright/test";
import fs from "fs";

test("Download a file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");

  // Wait for the download to start
  const downloadPromise = page.waitForEvent("download");

  // Click on the first file link
  const firstFile = page
    .locator("a[href^='download/']")
    .getByText("test.txt", { exact: true })
    .first();
  const fileName = await firstFile.innerText();
  await firstFile.click();

  // Wait for the download to complete
  const download = await downloadPromise;
  const filePath = `download/${fileName}`;

  // Save the file locally
  await download.saveAs(filePath);

  console.log("File download:" + filePath);

  // Ensure the file exists
  expect(fs.existsSync(filePath)).toBeTruthy();
});
