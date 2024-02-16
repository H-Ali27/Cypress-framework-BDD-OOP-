class HomePage
{
    getEditBox()
    {
        return cy.get("form [name*='name']")
    }
    getTwoWayDataBinding()
    {
        return cy.get("h4 [name*='name']")
    }
    getGender()
    {
        return cy.get("select")
    }
    getEnterprenuer()
    {
        return cy.get("#inlineRadio3").should('be.disabled')
    }
    getShopTab()
    {
        return cy.get('.navbar li').contains('Shop')
    }
}
export default HomePage;