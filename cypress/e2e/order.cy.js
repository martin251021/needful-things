

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("order page tests", () => {

    beforeEach(() => {
        cy.visit(`http://localhost:3000/search/1`)
        cy.contains("Add to cart").click()
        cy.get(".modal-continue").click()
        cy.get(".continue-btn").click()
    })

    it("should check if all the fields are empty and radios unchecked", () => {
        cy.get("[type='radio']").should("not.be.checked")
        cy.get("input[type='text']").should("be.empty")
    })

    it("should check if user can select only one delivery option", () => {
        cy.get("#UPS").click()
        cy.get("#UPS").should("be.checked")
        cy.get("#DPD").click()
        cy.get("#DPD").should("be.checked")
        cy.get("#UPS").should("not.be.checked")
        cy.get("#FedEx").should("not.be.checked")
    })

})