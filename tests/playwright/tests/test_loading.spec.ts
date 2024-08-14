import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has name", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rissa Quindoza/);
});

test("has increasing view count", async ({ page }) => {
  let viewCount = await page.getByTestId("viewCount").innerText();

  await page.goto("/");
  let newViewCount = await page.getByTestId("viewCount").innerText();
  await expect(Number(newViewCount) - Number(viewCount)).toBe(1);
});
