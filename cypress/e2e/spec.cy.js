describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com')
    cy.title().should('eq','STORE')
    cy.get('.container').should('contain','CATEGORIES')
  })
})