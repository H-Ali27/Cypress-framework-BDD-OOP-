//cypress - spec
/// <reference types = "cypress" />


describe('my Thrd test Suit', function()
{
    it('my Third Test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       //this command will open the link in a seperate tab
        // cy.get('#opentab').click().then(() => 
        // {
        //     cy.get('.navbar-nav [href="about.html"]').click()
        // })
        
        //this command will open the link in a same tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com/',() => 
        {
            cy.get('.navbar-nav [href="about.html"]').click()
            cy.get('#about-page h2').should('have.text','Welcome to QAClick Academy ')
            cy.get('#about-page h2').should('contain','QAClick Academy')
        })

    })

})