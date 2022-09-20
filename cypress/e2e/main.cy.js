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

    it("should test if electronics link is working", () => {
        cy.get(".navbar-container").contains("Electronics").click()
        cy.url().should("eq", "http://localhost:3000/categories/electronics")
        cy.get(".product").its("length").should("eq", 6)
    })

    it("should check if the jewelery link is working,", () => {
        cy.get(".navbar-container").contains("Jewelery").click()
        cy.url().should("eq", "http://localhost:3000/categories/jewelery")
        cy.get(".product").its("length").should("eq", 4)
    })

    it("should check if the mens clothing link is working", () => {
        cy.get(".navbar-container").contains("Men's clothing").click()
        cy.url().should("eq", "http://localhost:3000/categories/men's%20clothing")
        cy.get(".product").its("length").should("eq", 4)
    })

    it("should check if the womens clothing link is working", () => {
        cy.get(".navbar-container").contains("Women's clothing").click()
        cy.url().should("eq", "http://localhost:3000/categories/women's%20clothing")
        cy.get(".product").its("length").should("eq", 6)
    })

    it("should check if the header link returns user back to main page", () => {
        cy.get(".navbar-container").contains("Women's clothing").click()
        cy.get(".header").contains("Needful Things").click()
        cy.url().should("eq", "http://localhost:3000/")
    })

  })