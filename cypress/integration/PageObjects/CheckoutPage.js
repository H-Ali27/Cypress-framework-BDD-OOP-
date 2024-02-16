class CheckOutPage
{   
    getCheckOut()
    {
        return cy.get('.btn-success')
    }
    getProductAmountSum()
    { 
      return cy.SumofProduct()  
    }
    getTotalAmount()
    {
        return cy.TotalAmount()   
    }
}

export default CheckOutPage;
