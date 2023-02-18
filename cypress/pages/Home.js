class Home {
  selectors = {
    navbar: {
      search: "#quick-search-expand",
      searchInput: "#nav-quick-search",
    },
    body: {
      pageHeading: ".header-logo-text",
    },
  };

  /**
   * Assert that the user is on the home page
   */
  assertThatUserIsOnHomepage() {
    cy.url().should("equal", "https://cornerstone-light-demo.mybigcommerce.com/");
    cy.get(this.selectors.body.pageHeading).should("be.visible");
  }

  /**
   * This action clicks the search button within the navbar
   */
  clickSearch() {
    cy.get(this.selectors.navbar.search).click();
  }

  /**
   * Types a search term into the input and hits the ENTER key on the keyboard
   * @param  {String} product The product you wish to search
   */
  searchFor(product) {
    cy.get(this.selectors.navbar.searchInput).type(`${product}{enter}`);
  }
}

export default Home;
