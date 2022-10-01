/// <reference types="cypress" />



describe('Products', () => {
    before(() => {
        cy.visit('https://drata.com')
    })

    beforeEach(() => {
        cy.viewport(1536, 960)
    })
    /// Out tab / inner tab / pathname
    it('SOC 2', () => {
        cy.goToPage("Products", "SOC 2", "/soc-2", )
    })

    it('ISO 27001', () => {
        cy.goToPage("Products", "ISO 27001", "/iso-27001", )
    })

    it('HIPAA', () => {
        cy.goToPage("Products", "HIPAA", "/hipaa", )
    })

    it('PCI DSS', () => {
        cy.goToPage("Products", "PCI DSS", "/pci-dss", )
    })

    it('GDPR', () => {
        cy.goToPage("Products", "GDPR", "/gdpr", )
    })

    it('CCPA', () => {
        cy.goToPage("Products", "CCPA", "/ccpa", )
    })

    it('Additional Frameworks', () => {
        cy.goToPage("Products", "Additional Frameworks", "/additionalframeworks", )
    })

    it('Custom Frameworks', () => {
        cy.goToPage("Products", "Custom Frameworks", "/custom-frameworks", )
    })

    it('Trust Center', () => {
        cy.goToPage("Products", "Trust Center", "/trustcenter", )
    })

    it('Risk Management', () => {
        cy.goToPage("Products", "Risk Management", "/risk-management", )
    })

    it('Integrations', () => {
        cy.goToPage("Products", "Integrations", "/integrations", )
    })
})
  