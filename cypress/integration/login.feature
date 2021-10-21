Feature: Login Page

    Scenario: Login successfully
        Given Access the login page
        When I fill the fields
        And Click on the log in button
        Then Should see the home page

    Scenario: Invalid e-mail
        Given Access the login page
        When I type the invalid e-mail address
        And I fill the password field
        And Click on the log in button
        Then Should see an error message

    
