Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("cart page tests", () => {

    beforeEach(() => {
        cy.visit(`http://localhost:3000/search/1`)
        cy.contains("Add to cart").click()
        cy.get(".modal-continue").click()
    })

})