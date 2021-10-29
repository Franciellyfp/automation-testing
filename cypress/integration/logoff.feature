Feature: Logoff

    Scenario: Logoff successfully
        Given I login to home page
        When I click on logoff button
        Then I should see the login page

