

describe('My First Test', () => {
    it('test1', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    
    })
    it('verify title-Negative test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM12')
  })
  it('verify title-Postive test', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
})
  

})