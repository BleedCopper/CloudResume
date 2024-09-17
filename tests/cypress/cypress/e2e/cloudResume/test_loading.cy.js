describe("Test website", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("title name", () => {
    cy.title().should("eq", "Rissa Quindoza");
  });

  it("heading name", () => {
    cy.get("h1").first().should("include.text", "Rissa Quindoza");
  });

  it("increments view", () => {
    cy.get("[data-testid=viewCount]", { timeout: 20 * 1000 })
      .invoke("text")
      .then((initial) => {
        cy.reload();
        cy.get("[data-testid=viewCount]")
          .invoke("text")
          .then((after) => {
            expect(Number(initial) + 1).to.equal(Number(after));
          });
      });
  });
});
