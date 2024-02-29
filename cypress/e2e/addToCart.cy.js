describe('Adding an item to the cart', () => {
  it('Should open a product page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Ficus Elastica Blanc').click()
    cy.url().should('include', 'products/12')
  })
  it('Should add 2 products to the cart', () => {
    cy.visit('http://localhost:3000/products/12')
    cy.contains('+').click()
    cy.get('.adding-btn').click()
    cy.get('#lblCartCount').should('have.text', '2')

  })
})


