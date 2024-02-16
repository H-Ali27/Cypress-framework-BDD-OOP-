beforeEach(() => 
{
    //so all the fixture loading is recommended  to write in before hook
    cy.fixture('example').then(function(data)
    {
        //this.data now here data will be available globally
        this.data = data 
    })
})