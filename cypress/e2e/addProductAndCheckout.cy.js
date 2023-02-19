/// <reference types="Cypress" />

describe("Adding a product to the cart and completing the checkout process", () => {
  it("Visits site, searches for an item, and then proceeds to checkout", () => {
    cy.fixture("products.json").then((products) => {
      products.forEach((product) => {
        // Home
        cy.visit("/");
        cy.rejectCookies();
        cy.assertThatUserIsOnHomepage();
        cy.clickSearch();
        cy.searchFor(product.name);

        // Search
        cy.addToCart(0);

        // Checkout
        cy.assertPrice(product.price);
        cy.checkout();
      });
    });
  });
});
