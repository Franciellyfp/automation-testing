Feature: EdgeOS

    As a user,
    I want to execute a end-to-end testing on the EdgeOS.
    So that, I can ensure the quality on the application.

    Background: Login successfully
        Given Access the login page
        When User inputs the information
        Then Should see the home page
    
    @Logoff
    @Regression
    @Smoke
     Scenario: Logoff successfully
        Given User clicks on the logout button
        Then Should see the login page

    @ResetPassword
    @Regression
    @Smoke
    Scenario: Reset password successfully
        Given User clicks on reset password button
        When User inputs the information about the new password
        Then Should see the home page
    
    @ResetPasswordError
    @Regression
    @Smoke
    Scenario Outline: Reset password failure "<failure>"
        Given User clicks on reset password button
        When User inputs "<failure>"
        Then The message should be "<errorMessage>"

    Examples:
        | failure                | errorMessage                                             |
        | Empty current password | The current password field is required.                  |
        | Different confirmation | The new password and confirmation password do not match. |
        | Empty confirmation     | The password confirmation field is required.             |
        | Empty new password     | The new password field is required.                      |

    

