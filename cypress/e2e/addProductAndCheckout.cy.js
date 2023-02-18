/// <reference types="Cypress" />

describe("Adding a product to the cart and completing the checkout process", () => {
  it("Visits site, searches for an item, and then proceeds to checkout", () => {
    // Home
    cy.visit("/");
    cy.rejectCookies();
    cy.assertThatUserIsOnHomepage();
    cy.clickSearch();
    cy.searchFor("Hand Soap");

    // Search
    cy.addToCart(0);
  });
});
