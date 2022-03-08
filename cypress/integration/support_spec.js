describe("Test the support contact form", () => {
  it("Fills out the form data", () => {
    cy.visit("localhost:3000/contact/support");
    cy.wait(100);
    cy.get('[data-test-id="Abuse Report"]').click();
    cy.get('[data-test-id="name"]').type("Gitpod User");
    cy.get('[data-test-id="email"]').type("gitpoduser@gitpod.io");
    cy.get('[data-test-id="message"]').type("Gitpod is Awesome!");
    cy.get('[data-test-id="consent"]').click();
    cy.get('[data-test-id="send"]').click();
  });
});
