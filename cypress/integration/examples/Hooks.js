//cypress - spec
/// <reference types = "cypress" />


describe('Cypress Hooks test Suit', function()
{
    before(() => {
        //so all the fixture loading is recommended  to write in before hook
        cy.fixture('example').then(function(data)
        {
            //this.data now here data will be available globally
            this.data = data 
        })
      })

    it('Cypress Hooks Test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("form [name*='name']").type(this.data.name)
        cy.get("select").select(this.data.gender)
        cy.get("h4 [name*='name']").should('have.value', this.data.name)
        cy.get("form [name*='name']").should('have.attr','minlength', 2)
        cy.get("form [name*='name']").should('have.attr','type', 'text')
        cy.get("#inlineRadio3").should('be.disabled')
        //shopping prodct code is here
        // cy.pause()
        cy.get('.navbar li').contains('Shop').click()
        this.data.productName.forEach(element => {
            cy.SelectProduct(element)
        });
        // cy.SelectProduct('Nokia Edge')
        cy.get('.nav-link.btn').click()
    })
})