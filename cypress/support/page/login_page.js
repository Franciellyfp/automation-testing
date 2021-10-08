/// <reference types="Cypress" />

import LoginElements from '../elements/login_elements'
const loginElements = new LoginElements

class LoginPage {

    open_login_page() {
        cy.visit(Cypress.env('baseUrl'))
    }

    fill_email(){
        cy.get(loginElements.email_field())
          .type(Cypress.env('email'))
    }

    fill_password(){
        cy.get(loginElements.password_field())
          .type(Cypress.env('password'))
    }

    click_login_button() {
        cy.get(loginElements.login_button())
          .click()
    }
  
}
export default LoginPage;