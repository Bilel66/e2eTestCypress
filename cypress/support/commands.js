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
 

Cypress.Commands.add('login',()=>{
    cy.visit('https://app.webtv-solution.dev/login/')
    cy.get('#input_1').type('empadmin')
    cy.get('#empLoginForm > div:nth-child(3) > button > span').click()
    cy.url().should('eql','https://app.webtv-solution.dev/login/step2/') 
    cy.get('#input_3').type('ca?akuWra2')
    cy.get('.circular-progress-button > .ng-binding').click()
    cy.url().should('eql','https://app.webtv-solution.dev/medias/videos?type=ongoing')
})

Cypress.Commands.add('iframeVideo',()=>{
    cy.get('#iframe_list')
    .its('0.contentDocument.body')
    .should('be.visible').should('not.be.empty')
    .then(cy.wrap)
    .find('#search').should('be.visible').type('bilel')
})

//////////////JASSER//////////////

Cypress.Commands.add(
    'iframeLoaded',
    { prevSubject: 'element' },
    ($iframe) => {
        const contentWindow = $iframe.prop('contentWindow')
        return new Promise(resolve => {
            $iframe.on('load', () => {
                setTimeout(function(){

                    console.log('load', contentWindow)
                    resolve(contentWindow)
                    console.log('load wait 3000', contentWindow.document)
                    console.log('load wait 3000', contentWindow.document.querySelector("button"))

                },4000)
            })
        })
    });

Cypress.Commands.add(
    'getInDocument',
    { prevSubject: 'document' },
    (document, selector) => {
        return Cypress.$(selector, document)
    });
Cypress.Commands.add("getIframeElement", (selector, name) => {
    cy.get(selector)
        .then($iframe => {
            const $doc = $iframe.contents();
            return cy.wrap($doc[0].body);
        })
        .find(name)

});