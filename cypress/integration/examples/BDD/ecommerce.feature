Feature: End to End ecommerce web validation


    Applicaiton Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open the ecommerce web
    When I add the products to cart
    And validate the total prices
    Then select the country submit and verify thankyou

    @Smoke
    Scenario: Filling the form
    Given I open the ecommerce web
    When I fill the form details
    |name | gender|
    |Taimoor | Male |
    Then validate the forms behaviour
    |name | gender|
    |Taimoor | Male |
    And select the Shop Page

    