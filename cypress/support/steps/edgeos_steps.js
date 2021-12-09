/* global Given, Then, When */

import LoginPage from '../page/login_page'
import HomePage from '../page/home_page'
import ResetPasswordPage from '../page/reset_password_page'
const login_page = new LoginPage
const home_page = new HomePage
const reset_password_page = new ResetPasswordPage

//login
Given("Access the login page", () => {
    login_page.open_login_page()
})

Given("User clicks on reset password button", () => {
    home_page.click_link_reset_password()
})

When("User clicks on the logout button", () => {
    home_page.click_logoff_button()
})

When("User inputs the information", () => {
    login_page.login(Cypress.env('email'), Cypress.env('password'))
})

When("User clicks on reset password button", () => {
    reset_password_page.click_on_the_email()
    home_page.click_link_reset_password()
})

When("When User inputs {string}", (failure) => {
    reset_password_page.check_reset_password(string)
})

Then("Should see the login page", () => {
    login_page.check_login_page()
})

Then("Should see the home page", () => {
    home_page.check_white_label()
})

Then("Then Should display the message {string}", () => {
    cy.get('.styles_helperText__3Llrc').should('contain', {string});
})