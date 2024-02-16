//cypress - spec
/// <reference types = "cypress" />


describe('my Thrd test Suit', function()
{
    it('my Third Test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($e1,index,list) => 
        {
            const text = $e1.text()
            if(text.includes("Python"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)  
                {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })
            }
        })
        cy.get('tr td:nth-child(2)').each(($e1,index,list) => 
        {
            const items = $e1.text()
            if(items.includes('Manager'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().next().then((position) => 
                {
                    const Post = position.text()
                    expect(Post).to.equal('48')
                })
            }
        })
        cy.get('.totalAmount').should('have.text',' Total Amount Collected: 296 ')

    })

})