Feature: Login Page

    Scenario: Log in
        Given Access the login page
        When I fill the fields
        And Click on the log in button
        Then Should see the home page