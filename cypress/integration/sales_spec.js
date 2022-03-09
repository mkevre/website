describe("Test the sales contact form", () => {
  it.only("Fills out the form data", () => {
    cy.visit("/contact/sales");
    cy.wait(100);
    cy.findByText("Self-hosting").click();
    // cy.get('[data-test-id="Self-hosting"]').click();
    // cy.get('[data-test-id="cloud-platforms-select"]').select("Kubernetes");
    // cy.get('[data-test-id="name"]').type("Gitpod User");
    // cy.get('[data-test-id="email"]').type("gitpoduser@gitpod.io");
    // cy.get('[data-test-id="website"]').type("www.gitpod.io");
    // cy.get('[data-test-id="no-of-engineers-select"]').select("2-5");
    // cy.get('[data-test-id="message"]').type("Gitpod is Awesome!");
    // cy.get('[data-test-id="consent"]').click();
    // cy.get('[data-test-id="send"]').click();
  });
});
