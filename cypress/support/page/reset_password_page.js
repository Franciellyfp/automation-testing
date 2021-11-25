/// <reference types="Cypress" />

import ResetPasswordElements from '../elements/reset_password_elements';
import ResetPassword from '../elements/reset_password_elements'
const resetPasswordElements = new ResetPasswordElements

class ResetPasswordPage {

    click_on_the_email() {
        cy.get(resetPasswordElements.email_dropdown()).click()
    }

    fill_current_password(current_password) {
        cy.get(resetPasswordElements.current_password_field())
          .type(current_password)
    }

    fill_new_password(new_password){
        cy.get(resetPasswordElements.new_password_field())
          .type(new_password)
    }

    fill_confirm_password(confirm_password){
        cy.get(resetPasswordElements.confirm_password())
          .type(confirm_password)
    }

    click_button_change_password(){
        cy.get(resetPasswordElements.change_password())
          .click()
    }
}

export default ResetPasswordPage;
