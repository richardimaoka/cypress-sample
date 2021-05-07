describe("The Home Page", () => {
  beforeEach(() => {
    cy.exec("npm run db:reset && npm run db:seed");
  });
  cy.request("POST", "/test/seed/post", {
    title: "First Post",
    authorId: 1,
    body: "...",
  });
  it("successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL
  });
});
