/// <reference types="cypress" />



describe('Company', () => {
    before(() => {
        cy.visit('https://drata.com')
    })

    beforeEach(() => {
        cy.viewport(1536, 960)
    })
    /// Out tab / inner tab / pathname
    it('About Drata Page', () => {
        cy.goToPage("Company", "About Drata", "/about", )
    })

    it('Careers Page', () => {
        cy.goToPage("Company", "Careers", "/careers", )
    })

    it('Contact Us Page', () => {
        cy.goToPage("Company", "Contact Us", "/contact", )
    })

    it('Security Page', () => {
        cy.goToPage("Company", "Security", "/security", )
    })
})
  