import { test, expect, Page, BrowserContext } from "@playwright/test";

test("test1", { tag: ["@fast"] }, async ({}) => {});
test("test2", { tag: ["@quick"] }, async ({}) => {});

// npx playwright  test --grep "@fast" --list
