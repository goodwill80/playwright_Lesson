import fs from "fs";
import path from "path";
import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";

// const records = parse(fs.readFileSync(path.join(__dirname, ".data.csv")), {
//   columns: true,
//   skip_empty_lines: true,
// });

// for (const record of records) {
//   test(`test: ${record.name}`, async ({ page }) => {
//     console.log(record.class, record.password);
//   });
// }

// Read and parse the CSV file synchronously
// const filePath = path.join(__dirname, "data.csv"); // Ensure correct filename
// const fileContent = fs.readFileSync(filePath, "utf-8");

// // Parse CSV file into JSON format
// const records = parse(fileContent, {
//   columns: true,
//   skip_empty_lines: true,
// });

// for (const record of records) {
//   test(`test1`, async () => {
//     console.log(record);
//   });
// }
