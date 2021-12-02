/* global Given, Then, When */

import LoginPage from '../page/login_page'
import HomePage from '../page/home_page'
import ResetPasswordPage from '../page/reset_password_page'
const loginPage = new LoginPage
const homePage = new HomePage
const reset_password_page = new ResetPasswordPage

//login
Given("Access the login page", () => {
    loginPage.open_login_page()
})

Given("User clicks on reset password button", () => {
    homePage.click_link_reset_password()
})

When("User inputs the information", () => {
    loginPage.login(Cypress.env('email'), Cypress.env('password'))
})

When("User clicks on reset password button", () => {
    reset_password_page.click_on_the_email()
})

When("When User inputs {string}", (failure) => {
    reset_password_page.check_reset_password("string")
})

Then("Should see the home page", () => {
    homePage.check_white_label()
})

Then("Then Should display the message {string}", () => {
    cy.get('.styles_helperText__3Llrc').should('contain', {string});
})