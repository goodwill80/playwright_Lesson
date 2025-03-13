import { test, testPackage, expect } from "./fixtures/fixture";

// test.use({
//   person: "oliver",
// });

testPackage("test 1", async ({ person, page }) => {
  console.log("testing with testPackage", person);
});

test.describe("para group", () => {
  //   test.use({
  //     person: "Jonathan",
  //   });
  test("test 1", async ({ person, page }) => {
    console.log("testing with default test", person);
  });
});
