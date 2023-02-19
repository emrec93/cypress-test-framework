import Search from "./Search";

class Cart {
  selectors = {
    navbar: {
      search: "#quick-search-expand",
      searchInput: "#nav-quick-search",
    },
    body: {
      pageHeading: ".page-heading",
      checkoutBtn: '[title="Click here to proceed to checkout"]',
      grandTotal: ".cart-total-grandTotal",
    },
  };

  /**
   * Clicks the checkout button in the cart page
   * @param  {Number} price The price of the product you're expecting to see.
   */
  assertPrice(price) {
    cy.get(this.selectors.body.grandTotal).then((el) => {
      const text = el.text().replaceAll(/\s/g, "");
      expect(text).to.equal(price);
    });
  }

  /**
   * Clicks the checkout button in the cart page which triggers a navigation
   */
  checkout() {
    const btn = this.selectors.body.checkoutBtn;
    cy.get(btn).then((el) => {
      const text = el.text().replaceAll(/\s/g, "");
      expect(text).to.equal("Checkout");
    });
    cy.get(btn).click();
  }
}

export default Cart;
