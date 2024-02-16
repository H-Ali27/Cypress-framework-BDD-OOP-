//cypress - spec
/// <reference types = "cypress" />


describe('my Thrd test Suit', function()
{
    it('my Third Test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //windows: alert 
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str) => 
        {
            //Mocha
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })
        //windows:confirm
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str) => 
        {
            //mocha
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })


    })

})