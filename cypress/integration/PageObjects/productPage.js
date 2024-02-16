class ProductPage
{
    getProduct(prodname)
    {
        return cy.SelectProduct(prodname)
    }
    getProductCheckOut()
    {
        return cy.get('.nav-link.btn')
    }
}

export default ProductPage;