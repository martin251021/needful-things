Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe("various tests on main page, search, links, etc", () => {
    
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("should check if the enter key works for returning search results", () => {
        cy.get(".search-bar").type("shirt").type("{enter}")
        cy.url().should("eq", "http://localhost:3000/search")

    })

    it("should test search results", () => {
        cy.get(".search-bar").type("john hardy").type("{enter}")
        cy.get(".product").contains("John Hardy").should("be.visible")
    })

  })