/// <reference types="cypress" />



describe('Resources', () => {
    before(() => {
        cy.visit('https://drata.com')
    })

    beforeEach(() => {
        cy.viewport(1536, 960)
    })
    /// Out tab / inner tab / pathname
    it('Prioritizing SOC 2 While Growing Fast', () => {
        cy.goToPage("Resources", "Prioritizing SOC 2 While Growing Fast", "/case-studies/prioritizing-security-while-growing-fast", )
    })

    it('Getting SOC 2 Fast with a Deadline', () => {
        cy.goToPage("Resources", "Getting SOC 2 Fast with a Deadline", "/case-studies/getting-soc-2-fast-with-drata", )
    })

    it('Leveling Up a Strong SOC 2 Security Program', () => {
        cy.goToPage("Resources", "Leveling Up a Strong SOC 2 Security Program", "/case-studies/confidence-in-a-strong-security-program", )
    })

    it('All Case Studies', () => {
        cy.goToPage("Resources", "All Case Studies", "/resources", )
    })

    it('All Resources', () => {
        cy.goToPage("Resources", "All Resources", "/resources", )
    })

    it('Your SOC 2 Readiness', () => {
        cy.goToPage("Resources", "Your SOC 2 Readiness", "/blog/score-your-soc-2-readiness", )
    })

    it('Drata Blog', () => {
        cy.goToPage("Resources", "Drata Blog", "/blog", )
    })
})
  