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
      if (failure == "Empty current password"){
        this.check_current_password()
      }
      if (failure == "Different confirmation"){
        this.check_different_password()
      }
      if (failure == "Empty confirmation"){
        this.check_empty_new_password()
      }
      if (failure == "Empty new password"){
        this.check_empty_new_password()
      }
  }
  
    check_current_password(){
      this.fill_new_password('Teste@123456')
      this.fill_confirm_password('Teste@123456')
      this.click_button_change_password()
  }

    check_empty_password_confirmation(){
      this.fill_current_password(Cypress.env('password'))
      this.fill_new_password('Teste@123456')
      this.click_button_change_password()
  }

    check_empty_new_password(){
      this.fill_current_password(Cypress.env('password'))
      this.fill_confirm_password('Teste@123456')
      this.click_button_change_password()
  }

    check_different_password(){
      this.fill_current_password(Cypress.env('password'))
      this.fill_new_password('Teste@123456')
      this.fill_confirm_password('Teste123456')
      this.click_button_change_password()
    }

    check_error_current_password(){
      cy.get(resetPasswordElements.error_current_password_empty())
        .should('contain', 'The current password field is required.')
    }

    check_error_new_and_confirm_password_wrong(){
      cy.get(resetPasswordElements.error_confirmation_password_empty())
        .should('contain', 'The new password and confirmation password do not match.')
    }

    check_error_password_confirmation(){
      cy.get(resetPasswordElements.error_confirmation_password_empty())
        .should('contain', 'The password confirmation field is required.')
    }

    check_error_new_password(){
      cy.get(resetPasswordElements.error_new_password_empty())
        .should('contain', 'The new password field is required.')
    }

    check_error_messages(error_message){
      if (error_message == "The current password field is required."){
        this.check_error_current_password()
      }
      if (error_message == "The new password and confirmation password do not match."){
        this.check_error_new_and_confirm_password_wrong()
      }
      if (error_message == "The password confirmation field is required."){
        this.check_error_password_confirmation()
      }
      if (error_message == "The new password field is required."){
        this.check_error_new_password()
      }
    }   
}

export default ResetPasswordPage;
