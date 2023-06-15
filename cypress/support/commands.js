// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>
 require('cypress-iframe');
//import 'cypress-file-upload';
 


//********************* LOGIN ***********************
Cypress.Commands.add('login',()=>{
    cy.visit('https://app.webtv-solution.dev/login/')
    cy.get('#input_1').type('empadmin')
    cy.get('#empLoginForm > div:nth-child(3) > button > span').click()
    cy.url().should('eql','https://app.webtv-solution.dev/login/step2/') 
    cy.get('#input_3').type('ca?akuWra2')
    cy.get('.circular-progress-button > .ng-binding').click()
    cy.wait(5000)
    cy.url().should('eql','https://app.webtv-solution.dev/medias/videos?type=ongoing')
    cy.wait(3000)
})

//******************** IFRAME ************************
Cypress.Commands.add('loadNestedIframe', (iframeSelector1,iframeSelector2) => {
  cy.get(iframeSelector1)
    .its('0.contentDocument')
    .should('exist')
    .then((doc) => {
      const iframe1 = doc.querySelector(iframeSelector2);
      const iframe2 = iframe1.contentDocument || iframe1.contentWindow.document;
      return cy.wrap(iframe2);
    });
});
