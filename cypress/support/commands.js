import Home from "../pages/Home";
import Search from "../pages/Search";

const home = new Home();
const search = new Search();

Cypress.Commands.add("rejectCookies", () => {
  cy.contains("Reject all").click();
});

Cypress.Commands.add("assertThatUserIsOnHomepage", () => {
  home.assertThatUserIsOnHomepage();
});

Cypress.Commands.add("clickSearch", () => {
  home.clickSearch();
});

Cypress.Commands.add("searchFor", (product) => {
  home.searchFor(product);
  search.assertSearch(product);
});

Cypress.Commands.add("addToCart", (nth) => {
  search.addToCart(nth);
});
