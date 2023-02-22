class Checkout {
  selectors = {
    form: {
      customerEmail: "#email",
      privacyPolicyCheckobox: '[name="privacyPolicy"]',
      continue: "#checkout-customer-continue",
      continueAsGuestBtn: '[data-test="customer-guest-continue"]',
      shippingFName: '[data-test="firstNameInput-text"]',
      shippingLName: '[data-test="lastNameInput-text"]',
      addressLine1: '[data-test="addressLine1Input-text"]',
      city: '[data-test="cityInput-text"]',
      postcode: '[data-test="postCodeInput-text"]',
      phoneNo: '[data-test="phoneInput-text"]',
      shippingContinue: "#checkout-shipping-continue",
      comment: '[name="orderComment"]',
    },
    cardDetails: {
      ccNumber: "#ccNumber",
      ccExpiry: "#ccExpiry",
      ccName: "#ccName",
      cvv: "#ccCvv",
      placeOrder: "#checkout-payment-continue",
    },
    confirmation: {
      heading: '[data-test="order-confirmation-heading"]',
      orderConfirmation: '[data-test="order-confirmation-order-number-text"] > span',
    },
  };

  /**
   * Enters customer email into the checkout form
   * @param  {String} email The customer's email
   */
  fillCustomerEmail(email) {
    cy.get(this.selectors.form.customerEmail).type(email);
    cy.get(this.selectors.form.privacyPolicyCheckobox).check({ force: true });
    cy.get(this.selectors.form.continue).click();
    this.continueAsGuest();
  }

  /**
   * Clicks on the "continue as guest" button.
   */
  continueAsGuest() {
    cy.get(this.selectors.form.continueAsGuestBtn).click();
  }

  /**
   * Enters customer's first and last names into the checkout form
   * @param  {String} fname The customer's first name
   * @param  {String} lname The customer's last name
   */
  fillCustomerName(fname, lname) {
    cy.get(this.selectors.form.shippingFName).type(fname);
    cy.get(this.selectors.form.shippingLName).type(lname);
  }

  /**
   * Enters customer's address, city and postcode details into the checkout form
   * @param  {String} address The customer's address
   * @param  {String} city The customer's city
   * @param  {String} postcode The customer's postcode
   */
  fillCustomerAddress(address, city, postcode) {
    cy.get(this.selectors.form.addressLine1).type(address);
    cy.get(this.selectors.form.city).type(city);
    cy.get(this.selectors.form.postcode).type(postcode);
  }

  /**
   * Enters customer's phone no. into the checkout form
   * @param  {String} number The customer's phone no.
   */
  fillCustomerPhoneNo(number) {
    cy.get(this.selectors.form.phoneNo).type(number);
  }

  /**
   * Clicks on the continue button after customer enters their details.
   * Also waits for the UI to be ready before clicking button
   */
  clickShippingContinue() {
    cy.get(this.selectors.form.comment).type("please ring bell");

    cy.intercept("**/api/storefront/checkouts/**").as("req");

    cy.wait("@req", { timeout: 10000 });
    cy.wait(5000);
    cy.get(this.selectors.form.shippingContinue).click({ force: true });
  }

  /**
   * Enters customer's credit card details
   * @param  {String} number The customer's phone no.
   * @param  {String} expiry The customer's phone no.
   * @param  {String} name The customer's phone no.
   * @param  {String} cvv The customer's phone no.
   */
  enterCardDetails(number, expiry, name, cvv) {
    cy.get(this.selectors.cardDetails.ccNumber).type(number);
    cy.get(this.selectors.cardDetails.ccExpiry).type(expiry);
    cy.get(this.selectors.cardDetails.ccName).type(name);
    cy.get(this.selectors.cardDetails.cvv).type(cvv);
    cy.get(this.selectors.cardDetails.placeOrder).click();
  }

  /**
   * Verifies the order has successfully been submitted by verifying the header text and the order number is rendered on the page.
   * @param  {String} name The name of the customer used to verify the order
   */
  verifyOrder(name) {
    cy.intercept("**/checkout/order-confirmation/**").as("req");
    cy.wait("@req", { timeout: 10000 });
    cy.wait(3000);
    cy.get(this.selectors.confirmation.heading).should("have.text", `Thank you ${name}!`);
    cy.get(this.selectors.confirmation.orderConfirmation).should("contain.text", "Your order number is ");
  }
}

export default Checkout;
