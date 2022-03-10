describe("Test the sales contact form", () => {
  it.only("Fills out the form data", () => {
    cy.visit("/contact/sales");
    cy.wait(100);
    cy.findByText("Self-hosting").click();
    cy.findByDisplayValue("Which cloud infrastructure do you use?").select(
      "Kubernetes"
    );
    cy.findByLabelText(/name/i).click().type("Gitpod User");
    cy.findByLabelText(/mail/i).click().type("gitpoduser@gitpod.io");
    cy.findByLabelText(/company website/i)
      .click()
      .type("www.gitpod.io");
    cy.findByDisplayValue(/number of engineers/i).select("1-10");
    cy.findByLabelText(/message/i)
      .click()
      .type("Gitpod is Awesome!");
    cy.findByTestId("consent").click();
    cy.findByRole("button", { name: /send/i }).click();
  });
});
