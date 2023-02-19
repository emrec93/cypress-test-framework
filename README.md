# cypress-test-framework

A basic testing framework built using Cypress.

## Installation

Clone the repo:

```sh
git clone https://github.com/emrec93/cypress-test-framework.git
```

Change directory to the project folder

```sh
cd cypress-test-framework
```

Install dependencies

```sh
npm i
```

## Running Tests

To run the tests, open a terminal window and enter

```sh
npm run test
```

To run the tests via Cypress's electron based browser, open a terminal window and enter

```sh
npm run open
```

This will run the Cypress UI, where you can select the test you want to run in headed mode to see the test execute.

## CI/CD

steps included within the cypress.yml file within .github/workflows/, will install and run Cypress on a Chrome browser, and capture screenshots of test failures should one occur.

## Test Artefacts

In the event of a test failure, a screenshot will be captured within cypress/screenshots showing the point of failure through the UI. These will also be available to download within zip files from Github Actions if a failure occurs during the workflow.
