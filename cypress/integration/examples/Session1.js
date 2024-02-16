//cypress - spec
/// <reference types = "cypress" />


describe('my first test Suit', function()
{
    it('my first Test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // cy.ge('.products')
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productslocator')
        //paren child chaining
        cy.get('@productslocator').find('.product').should('have.length',4)
        //gone add to cart product
        // cy.get('@productslocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        // {
        //    console.log('asynchronouse')
        // })
        cy.get('@productslocator').find('.product').each(($el,index,$list) => 
        {   
           const vegText = $el.find('h4.product-name').text()
           if(vegText.includes('Capsicum'))
           {
            cy.wrap($el).find('.increment').click()            
            // cy.wrap($el).find('button').click()
           }
           
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
        //this is to print in log
        cy.get('.brand').then(function(logoelem)
        {
            cy.log(logoelem.text())
        })
        
    })

})

