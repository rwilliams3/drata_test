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

Cypress.Commands.add('goToPage', (tabName, pageName , pathName) => {
    cy.intercept({method: 'GET', pathname:pathName}).as("interception").wait(1000)

    if (pageName) {
        cy.get('.nav-item > .nav-link').contains(tabName).should("exist").trigger("mouseover",{force:true}).then(() => {
            cy.get(".nav-link").contains(pageName).click({force:true}).then(() => {
                cy.wait("@interception").its("response.statusCode").should("eq",200)
                cy.get(".elementor-container",{timeout:3000}).should("exist").and("be.visible")
                cy.location('pathname').should("eq", pathName)
            })
        })
    } else {
        cy.get('.nav-item > .nav-link').contains(tabName).should("exist").click({force:true}).then(() => {
            cy.wait("@interception").its("response.statusCode").should("eq",200)
            cy.get(".elementor-container",{timeout:3000}).should("exist").and("be.visible")
            cy.location('pathname').should("eq", pathName)
        })
    }
})