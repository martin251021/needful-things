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

    it("should check whether the removing items by backspace in input field works properly", () => {
        cy.get(".cart-item-input").type("{backspace}")
        cy.contains("I'm so empty").should("be.visible")
    })

    it("should check whether removing items by minus button works properly", () => {
        cy.get(".cart-item-decrease").click()
        cy.contains("I'm so empty").should("be.visible")
    })

    it("should check whether adding items in input field works properly", () => {
        cy.get(".cart-item-input").type(2)
        cy.get(".cart-item-input").should("have.value", 12)
    })

    it("should check whether adding items by button works properly", () => {
        cy.get(".cart-item-increase").click()
        cy.get(".cart-item-input").should("have.value", 2)
    })

    it("should check if select all buttons selects items properly", () => {
        cy.get(".cart-page-sel-del-checkbox-input").click()
        cy.get(".checkbox-input").should("be.checked")
    })

    it("should check if deleting selected items by trashcan icon works", () => {
        cy.get(".cart-page-sel-del-checkbox-input").click()
        cy.get(".cart-page-del").click()
        cy.contains("Remove").click()
        cy.contains("I'm so empty").should("be.visible")
    })

    it("should check whether Back button in delete items in cart modal works", () => {
        cy.get(".cart-page-sel-del-checkbox-input").click()
        cy.get(".cart-page-del").click()
        cy.get(".modal-back").click()
        cy.get(".hidden").should("exist")
    })

    // doesnt work - how to get piece of text (price) from an element?
    // it("should check if the sum of individual items is correct", () => {
    //     cy.get(".cart-item-increase").click()
    //     cy.get(".cart-total-per-item")
    // })

    // it("should check if the total sum of items is correct", () => {
    //     cy.visit(`http://localhost:3000/search/2`)
    //     cy.contains("Add to cart").click()
    //     cy.get(".modal-continue").click()
    // })

})