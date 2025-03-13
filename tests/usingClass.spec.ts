import { test, expect, Page, BrowserContext } from "@playwright/test";
import { TodoClass } from "./librariesForKeyWordDriven/TodoClass";

test.use({
  launchOptions: {
    slowMo: 500,
  },
});

test.describe("todo test using class", () => {
  let todoPage: TodoClass;
  test.beforeEach(async ({ page }) => {
    todoPage = new TodoClass(page);
    todoPage.goto();
    await todoPage.addToDo("item 1");
    await todoPage.addToDo("item 2");
  });
  test.afterEach(async ({}) => {
    await todoPage.removeAll();
  });

  test("should add an item", async () => {
    await todoPage.addToDo("my item");
  });

  test("should remove an item", async () => {
    await todoPage.removeToDo("item 1");
  });
});
