/// <reference types="cypress" />



describe('Company', () => {
    before(() => {
        cy.visit('https://drata.com')
    })

    beforeEach(() => {
        cy.viewport(1536, 960)
    })
    /// (tabName, pageName , pathName)
    it('Customers Page', () => {
        cy.goToPage("Customers",null, "/customers")
    })

    it('Auditors Page', () => {
        cy.goToPage("Auditors", null, "/auditors")
    })
})
  