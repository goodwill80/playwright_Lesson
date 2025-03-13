import { test as base, expect } from "@playwright/test";
import { TodoClass } from "./librariesForKeyWordDriven/TodoClass";

// base.use({
//   launchOptions: { slowMo: 500 },
// });

const test = base.extend<{ todoPage: TodoClass }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoClass(page);
    await todoPage.goto();
    await todoPage.addToDo("item1");
    await todoPage.addToDo("item2");
    await use(todoPage);
    await todoPage.removeAll();
  },
});

test("should add an item", async ({ todoPage }) => {
  await todoPage.addToDo("my item");
});

test("should remove an item", async ({ todoPage }) => {
  await todoPage.removeToDo("item1");
});
