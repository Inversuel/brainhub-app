describe("Test form UI", () => {
  it("test send form", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("textbox", {
      name: /first name/i,
    }).type("Karol");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("textbox", {
      name: /last name/i,
    }).type("Maj");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("textbox", {
      name: /email address/i,
    }).type("test@test.com");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByPlaceholderText(/event date/i).type("2022/06/22");
    cy.findByRole("button", { name: /submit/i }).click();
  });

  it("test clear form", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("textbox", { name: /first name/i, }).type("Karol");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("textbox", {name: /last name/i, }).type("Maj");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("textbox", { name: /email address/i,}).type("test@test.com");
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByPlaceholderText(/event date/i).type("2022/06/22");
    cy.findByRole("button", { name: /clear/i }).click();
    cy.findByRole("textbox", { name: /first name/i, }).should('be.empty')
    cy.findByRole("textbox", {name: /last name/i, }).should('be.empty');
    cy.findByRole("textbox", { name: /email address/i,}).should('be.empty');

  });
});
