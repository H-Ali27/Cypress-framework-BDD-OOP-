//cypress - spec
/// <reference types = "cypress" />

import HomePage from "../PageObjects/homepage"
import ProductPage from "../PageObjects/productPage"
import CheckOutPage from "../PageObjects/CheckoutPage"
import CountryPage from "../PageObjects/CountryPage"
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
       // Cypress.config('defaultCommandTimeout', 7000) //it wiil only apply on this test case
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutpage = new CheckOutPage()
        const countrypage = new CountryPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr','minlength', 2)
        homePage.getEditBox().should('have.attr','type', 'text')
        homePage.getEnterprenuer().should('be.disabled')
        //shopping prodct code is here
        // cy.pause()
        homePage.getShopTab().click()
        
        this.data.productName.forEach(element => {
            productPage.getProduct(element)
        });
        // cy.SelectProduct('Nokia Edge')
        productPage.getProductCheckOut().click()
        checkoutpage.getProductAmountSum()
        checkoutpage.getTotalAmount()
        checkoutpage.getCheckOut().click()
        countrypage.getCountry('Pak')   
        countrypage.getCheckbox().click()//here you can write it as well cy.get('#checkbox2').click({force:true})
        countrypage.getSubmitButton().click()
        
        // countrypage.getAlert().should('include','Thank you! Your order will be delivered in next few weeks :-).') this will not work below assertion worikign with it.

        countrypage.getAlert().then((elem) => 
        {
            const text = elem.text()
            expect(text.includes("Success")).to.be.true
        })

    })

})