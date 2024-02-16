//cypress - spec
/// <reference types = "cypress" />


describe('my Second test Suit', function()
{
    it('my Second Test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productslocator')
        cy.get('@productslocator').find('.product').each(($el,index,$list) => 
        {   
           const vegText = $el.find('h4.product-name').text()
           if(vegText.includes('Capsicum'))
           {
            cy.wrap($el).find('input.quantity').clear().type(2)            
            cy.wrap($el).find('button').click()
           }
           if(vegText.includes('Cashews'))
           {
            // cy.wrap($el).find('input.quantity').clear().type(2)            
            cy.wrap($el).find('button').click()
           }
        })  
        cy.get('.cart-icon > img').click()
        cy.get('.action-block').find('button').contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()  
    })

})