Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe("product page test", () => {

  beforeEach(() => {
    cy.visit(`http://localhost:3000/search/1`)
  })

  it("should check if the quantity is 1 and then check if its possible to go below 1", () => {
    cy.get(".singleproduct-qty-input").should("have.value", 1)
    cy.get(".singleproduct-qty-decrease").click()
    cy.get(".singleproduct-qty-input").type("{backspace}")
    cy.get(".singleproduct-qty-input").should("have.value", 1)
  })

  it("should check if the quantity adds properly", () => {
    cy.get(".singleproduct-qty-input").should("have.value", 1)
    cy.get(".singleproduct-qty-increase").click()
    cy.get(".singleproduct-qty-input").should("have.value", 2)
    cy.get(".singleproduct-qty-decrease").click()
    cy.get(".singleproduct-qty-input").should("have.value", 1)
  })

  it("should check whether item added to cart displayed modal", () => {
    cy.contains("Add to cart").click()
    cy.get(".modal").should("be.visible")
  })

  it("modal should disappear after clicking back button", () => {
    cy.contains("Add to cart").click()
    cy.get(".modal-back").click()
    cy.get(".hidden").should("exist")
  })

  it("should redirect to cart page after clicking continue to cart", () => {
    cy.contains("Add to cart").click()
    cy.get(".modal-continue").click()
    cy.url().should("eq", "http://localhost:3000/cart")
  })

})