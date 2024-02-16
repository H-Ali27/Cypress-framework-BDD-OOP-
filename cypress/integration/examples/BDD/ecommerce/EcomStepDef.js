/// <reference types="Cypress" />

import HomePage     from "../../../PageObjects/homepage.js"
import ProductPage  from "../../../PageObjects/productPage.js"
import CheckOutPage from "../../../PageObjects/CheckoutPage.js"
import CountryPage  from "../../../PageObjects/CountryPage.js"
import valueData from "../../../../fixtures/example.json"
import { Given,When,Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()
const productPage = new ProductPage()
const checkoutpage = new CheckOutPage()
const countrypage = new CountryPage()

Given('I open the ecommerce web', () => 
{
    cy.visit(Cypress.env('url') + '/angularpractice/')
    
})

// When I add the products to cart
When('I add the products to cart', () => 
{
    homePage.getShopTab().click()
        
       valueData.productName.forEach(function (element)  {
            productPage.getProduct(element)
        });
    productPage.getProductCheckOut().click()
})
//And validate the total prices
Then('validate the total prices', () => 
{
    checkoutpage.getProductAmountSum()
    checkoutpage.getTotalAmount()
    checkoutpage.getCheckOut().click()
})


//Then select the country submit and verify thankyou
Then('select the country submit and verify thankyou', () => 
{
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

//Filling the form details
let name;
When('I fill the form details', function(dataTable) 
{
    // homePage.getEditBox().type(valueData.name) // gor getting the data from fixture file
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

//validate the form behavior
Then('validate the forms behaviour', () => 
{
    // homePage.getTwoWayDataBinding().should('have.value', dataTable.rawTable[1][0])
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getEditBox().should('have.attr','minlength', 2)
    homePage.getEditBox().should('have.attr','type', 'text')
    homePage.getEnterprenuer().should('be.disabled')
})

//select the shop tab
Then('select the Shop Page',() => 
{
    homePage.getShopTab().click()
})
