import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("title name", async ({ page }) => {
  await expect(page).toHaveTitle(/Rissa Quindoza/);
});

test("header name", async ({ page }) => {
  const header = await page.locator("h1").first().textContent();
  await expect(header).toBe("Rissa Quindoza");
});

test("has increasing view count", async ({ page }) => {
  let viewCount = await page.getByTestId("viewCount").innerText();

  await page.goto("/");
  let newViewCount = await page.getByTestId("viewCount").innerText();
  await expect(Number(newViewCount) - Number(viewCount)).toBe(1);
});
