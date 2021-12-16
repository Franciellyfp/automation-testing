/// <reference types="Cypress" />

import { should } from 'chai';
import ResetPasswordElements from '../elements/reset_password_elements';
import ResetPassword from '../elements/reset_password_elements'
const resetPasswordElements = new ResetPasswordElements
import HomePage from './home_page';
const home_page = new HomePage

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
        cy.get(resetPasswordElements.new_confirm_password_field())
          .type(confirm_password)
    }

    click_button_change_password(){
        cy.get(resetPasswordElements.change_password())
          .click()
    }

    change_password(current_password, new_password, confirm_password){
      this.fill_current_password(current_password)
      this.fill_new_password(new_password)
      this.fill_confirm_password(confirm_password)
      this.click_button_change_password()
    }

    check_reset_password(failure){
      console.log(failure)
      switch (failure) {
        case "Empty current password":
            this.fill_new_password("Teste@123456")
            this.fill_confirm_password("Teste@123456")
            this.click_button_change_password()
            break;
        case "Different confirmation":
            this.fill_current_password(Cypress.env(password))
            this.fill_new_password("Teste@654321")
            this.fill_confirm_password("Teste@123456")
            this.click_button_change_password()
            break;
        case "Empty confirmation":
            this.fill_current_password("Teste@123456")
            this.fill_new_password("Teste@123456")
            this.click_button_change_password()
            break;
        case "Empty new password":
            this.fill_current_password("Teste@123456")
            this.fill_confirm_password("Teste@654321")
            this.click_button_change_password()
            break;
        default:
            break;
    }
  }

  check_error_messages(errorMessage){
    switch (errorMessage) {
      case errorMessage = "Empty current password":
          should('contain', 'The current password field is required.')
          break;
      case errorMessage = "Different confirmation":
          should('contain', 'The new password and confirmation password do not match.')
          break;
      case errorMessage = "Empty confirmation":
        should('contain', 'The confirm password field is required.')
          break;
      case errorMessage = "Empty new password":
        should('contain', 'The new password field is required.')
          break;
      default:
          break;
    }
  }
}

export default ResetPasswordPage;
