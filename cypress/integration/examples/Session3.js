//cypress - spec
/// <reference types = "cypress" />


describe('my Thrd test Suit', function()
{
    it('my Third Test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //here we validate single check box
        // cy.get('#checkBoxOption1').check().should('have.checked')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //now we are going to validate multiple check box
        //so for it you have to pick common locator in all three checks
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Static Dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdown /autocompletion
        cy.get('#autocomplete').type('Pa')
        cy.get('.ui-menu-item div').each(($e1,index,list) => 
        {
            if($e1.text() === 'Pakistan')
            {
                cy.wrap($e1).click()
            }
        })
        cy.get('#autocomplete').should('have.value','Pakistan')
        //assertion of visible and invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible') 
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        
        //radio button
        cy.get('[value="radio1"]').check().should('be.checked')


    })

})