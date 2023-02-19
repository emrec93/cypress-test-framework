import Home from "../pages/Home";
import Search from "../pages/Search";
import Cart from "../pages/Cart";

const home = new Home();
const search = new Search();
const cart = new Cart();

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

Cypress.Commands.add("assertPrice", (price) => {
  cart.assertPrice(price);
});

Cypress.Commands.add("checkout", (price) => {
  cart.checkout();
});
