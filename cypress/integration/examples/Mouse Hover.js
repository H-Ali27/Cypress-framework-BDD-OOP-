//cypress - spec
/// <reference types = "cypress" />


describe('Mose hover test Suit', function() 
{
    it('mouse hoover test case', function()  
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

    })
})

