// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    login(): Chainable<void>;
    logout(): Chainable<void>;
    getWithWait(selector: string, timeout?: number): Chainable<cy>;
  }
}
