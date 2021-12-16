/// <reference types="Cypress" />

import LoginElements from '../elements/login_elements'
const loginElements = new LoginElements

class LoginPage {

    open_login_page() {
        cy.visit(Cypress.env('baseUrl'))
    }

    fill_invalid_email(){
        cy.get(loginElements.email_field())
          .type(Cypress.env('invalid_email'))
    }

    check_message(){
        cy.get(loginElements.invalid_email_message()).should('contain', 'Set a valid e-mail.')
    }

    login(email, password){
        cy.get(loginElements.email_field())
          .type(email)
        cy.get(loginElements.password_field())
          .type(password)
        cy.get(loginElements.login_button())
          .click()
    }

    check_login_page(){
      cy.url().should('eq', Cypress.env('baseUrl'))
    }

}
export default LoginPage;