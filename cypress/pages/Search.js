class Search {
  selectors = {
    navbar: {
      search: "#quick-search-expand",
      searchInput: "#nav-quick-search",
    },
    body: {
      pageHeading: ".page-heading",
      productGridAddToBasket: '[data-button-type="add-cart"]',
    },
  };

  assertSearch(product) {
    cy.get(this.selectors.body.pageHeading).should("include.text", `results for '${product}'`);
  }

  addToCart(nth) {
    cy.get(this.selectors.body.productGridAddToBasket).eq(nth).click();
    cy.log(`clicked on product number: ${nth} in grid`);
  }
}

export default Search;
