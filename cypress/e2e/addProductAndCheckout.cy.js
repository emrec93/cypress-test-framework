/// <reference types="Cypress" />

describe("Adding a product to the cart and completing the checkout process", () => {
  it("Visits site, searches for an item, and then proceeds to checkout", () => {
    cy.fixture("products.json").then((products) => {
      products.forEach((product) => {
        // Home
        cy.visit("/");
        cy.assertThatUserIsOnHomepage();
        cy.clickSearch();
        cy.searchFor(product.productName);

        // Search
        cy.addToCart(0);

        // Cart
        cy.assertPrice(product.productPrice);
        cy.checkout();

        // Checkout
        cy.fillCustomerEmail(Cypress.env("EMAIL"));
        cy.fillCustomerName(Cypress.env("FIRST_NAME"), Cypress.env("LAST_NAME"));
        cy.fillCustomerAddress(Cypress.env("ADDRESS"), Cypress.env("CITY"), Cypress.env("POST_CODE"));
        cy.fillCustomerPhoneNo(Cypress.env("PHONE_NO"));
        cy.clickShippingContinue();
        cy.enterCardDetails(
          Cypress.env("CARD_NUMBER"),
          Cypress.env("CARD_EXP"),
          Cypress.env("CARD_NAME"),
          Cypress.env("CARD_CVV")
        );

        // Order Confirmation
        cy.verifyOrder(Cypress.env("FIRST_NAME"));
      });
    });
  });
});
