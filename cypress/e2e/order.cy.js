

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

    it("should check if user can select only one payment option", () => {
        cy.get("input[value='Apple pay']").click()
        cy.get("input[value='Apple pay']").should("be.checked")
        cy.get("#Paypal").click()
        cy.get("#Paypal").should("be.checked")
        cy.get("input[value='Apple pay']").should("not.be.checked")
    })

    it("should check if warning appears after empty user input", () => {
        cy.contains("Finish order").click()
        cy.contains("Please fill in all the information").should("be.visible")
    })

    it("should check if user inputs persist after refreshing the page", () => {
        cy.get("#UPS").click()
        cy.get("#Paypal").click()
        cy.get("input[placeholder='Full name']").type("Happy Customer")
        cy.get("input[placeholder='Address']").type("Main Street")
        cy.get("input[placeholder='City']").type("Anytown, USA")
        cy.get("input[placeholder='Post code']").type("99999")
        cy.get("input[placeholder='Telephone number']").type("123456879")
        cy.get("input[placeholder='E-mail']").type("happycamper@gmail.com")
        cy.reload()
        cy.get("#UPS").should("be.checked")
        cy.get("#Paypal").should("be.checked")
        cy.get("input[placeholder='Full name']").should("have.value", "Happy Customer")
        cy.get("input[placeholder='Address']").should("have.value", "Main Street")
        cy.get("input[placeholder='City']").should("have.value", "Anytown, USA")
        cy.get("input[placeholder='Post code']").should("have.value", "99999")
        cy.get("input[placeholder='Telephone number']").should("have.value", "123456879")
        cy.get("input[placeholder='E-mail']").should("have.value", "happycamper@gmail.com")

    })

    it("should check if back button sends user back to cart", () => {
        cy.contains("Back").click()
        cy.get(".cart-page-del").should("be.visible")
    })

})