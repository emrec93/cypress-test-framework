import Home from "../pages/Home";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const home = new Home();
const search = new Search();
const cart = new Cart();
const checkout = new Checkout();

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

Cypress.Commands.add("fillCustomerEmail", (email) => {
  checkout.fillCustomerEmail(email);
});

Cypress.Commands.add("fillCustomerName", (fname, lname) => {
  checkout.fillCustomerName(fname, lname);
});

Cypress.Commands.add("fillCustomerAddress", (address, city, postcode) => {
  checkout.fillCustomerAddress(address, city, postcode);
});

Cypress.Commands.add("fillCustomerPhoneNo", (number) => {
  checkout.fillCustomerPhoneNo(number);
});

Cypress.Commands.add("clickShippingContinue", () => {
  checkout.clickShippingContinue();
});

Cypress.Commands.add("enterCardDetails", (number, expiry, name, cvv) => {
  checkout.enterCardDetails(number, expiry, name, cvv);
});

Cypress.Commands.add("verifyOrder", (name) => {
  checkout.verifyOrder(name);
});
