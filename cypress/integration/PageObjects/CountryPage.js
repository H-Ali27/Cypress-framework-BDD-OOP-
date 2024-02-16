class CountryPage 
{
    getCountry(country_Name)
    {
        // Cypress.config('defaultCommandTimeout', 7000)
        return cy.SelectCountry(country_Name);
    }
    getCheckbox()
    {
        return  cy.get('.checkbox > label')
    }
    getSubmitButton()
    {
        return cy.get("input[type*='submit']")        
    }
    getAlert()
    {
        return cy.get(".alert")
    }
}

export default CountryPage;