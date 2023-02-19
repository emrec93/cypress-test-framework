class Search {
  selectors = {
    navbar: {
      search: "#quick-search-expand",
      searchInput: "#nav-quick-search",
    },
    body: {
      pageHeading: ".page-heading",
      productGridAddToBasket: '[data-button-type="add-cart"]',
      price: ".price-section",
    },
  };

  /**
   * Asserts that the page heading on the search page displays the searched for term on the page.
   * @param  {String} product The product that was searched for.
   */
  assertSearch(product) {
    cy.get(this.selectors.body.pageHeading).should("include.text", `results for '${product}'`);
  }

  /**
   * Adds the nth item to the basket from the product grid.
   * @param  {Number} nth The product you wish to add to your basket, "0" is the first product displayed. "1" is the second etc...
   */
  addToCart(nth) {
    cy.get(this.selectors.body.productGridAddToBasket).eq(nth).click();
    cy.log(`clicked on product number: ${nth} in grid`);
  }
}

export default Search;
