// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
    Cypress.Commands.add('SelectProduct', (prod_name) => 
    {
        cy.get('h4.card-title').each(($e1, Index, list) => 
        {
            if($e1.text().includes(prod_name))
            {
                cy.get('button.btn').eq(Index).click()
            }
        })
    })

    Cypress.Commands.add('SelectCountry', (country_name) => 
    {
        cy.get('#country').type(country_name).then(() => 
        {
            cy.get('.suggestions').click()
            Cypress.config('defaultCommandTimeout', 8000)
        })
    })

    var sum = 0;
    
    Cypress.Commands.add('SumofProduct',() => 
    {   
        cy.get('tr td:nth-child(4) strong').each(($e1, index,list) => 
        {
            const amount = $e1.text()
            var res = amount.split(" ") //item is £. 50000 written in Index at like this [0]£.  [1]5000 
            //way 1
            res = +res[1].trim()
            //way 2
            // sum = sum + Number(res);
            //way 3
            // sum = Number(sum) + Number(res);
            sum = sum + res;
        }).then(() => 
        {
            cy.log(sum)
        })
    })
    Cypress.Commands.add('TotalAmount', () => 
    {
        cy.get('tr td:nth-child(5) strong').then((element) => 
        {
            const amount = element.text()
            var res = amount.split(" ")
            var totalamount = +res[1].trim()
            expect(totalamount).to.equal(sum)
        })
    })

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })