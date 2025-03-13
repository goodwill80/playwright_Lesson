import test from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test("example of using env", async ({ page }) => {
  console.log(process.env.USER_NAME ?? "default");
  console.log(process.env.PASSWORD ?? "password");
});
