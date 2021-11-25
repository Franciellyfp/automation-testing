/* global Given, Then, When */

import LoginPage from '../page/login_page'
import HomePage from '../page/home_page'
import ResetPasswordPage from '../page/reset_password_page'
const loginPage = new LoginPage
const homePage = new HomePage
const reset_password_page = new ResetPasswordPage

Given("Access the login page", () => {
    loginPage.open_login_page()
})

When("User inputs the information", () => {
    loginPage.login(Cypress.env('email'), Cypress.env('password'))
})

Then("Should see the home page", () => {
    homePage.check_white_label()
})


When("User clicks on reset password button", () => {
    reset_password_page.click_on_the_email()
})


