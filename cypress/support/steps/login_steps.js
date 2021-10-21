/* global Given, Then, When */

import LoginPage from '../page/login_page'
import HomePage from '../page/home_page'
const loginPage = new LoginPage
const homePage = new HomePage

Given("Access the login page", () => {
    loginPage.open_login_page()
})

When("I fill the fields", () => {
    loginPage.fill_email()
    loginPage.fill_password()
})

When("Click on the log in button", () => {
    loginPage.click_login_button()
})

When("I type the invalid e-mail address", () => {
    loginPage.fill_invalid_email()
})

When("I fill the password field", () => {
    loginPage.fill_password()
})

Then("Should see the home page", () => {
    homePage.check_white_label()
})

Then("Should see an error message", () => {
    loginPage.check_message()
})