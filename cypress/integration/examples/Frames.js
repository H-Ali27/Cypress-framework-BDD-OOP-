//cypress - spec
/// <reference types = "cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'

describe('HTML Frames Test Suit', function() 
{
    it('HTML Frames Test Suit', function() 
    {   
        
        cy.visit(Cypress.env('url')+' /AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

//        cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)
        
        //cy.iframe().should('exist').find("h1[class*='pricing-title']").should('have.length', 2);
        cy.iframe().should('exist').then((iframe) => {
        cy.log("this is the frame",iframe);  // Log the iframe content
        iframe.find("h1[class*='pricing-title']").should('have.length', 2);
        });



    })
})
