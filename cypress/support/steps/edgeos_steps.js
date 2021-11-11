/* global Given, Then, When */

import LoginPage from '../page/login_page'
import HomePage from '../page/home_page'
const loginPage = new LoginPage
const homePage = new HomePage

Given("Access the login page", () => {
    loginPage.open_login_page()
})

When("User inputs the information", () => {
    loginPage.login(Cypress.env('email'), Cypress.env('password'))
})

Then("Should see the home page", () => {
    homePage.check_white_label()
})


