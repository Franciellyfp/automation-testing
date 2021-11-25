/// <reference types="Cypress" />

import HomeElements from '../elements/home_elements'
import LogoffElements from '../elements/logoff_elements'
const homeElements = new HomeElements
const logoffElements = new LogoffElements

class HomePage {

    check_white_label() {
        cy.get(homeElements.white_label())
          .should('contain', 'EdgeOS')
    }

    click_logoff_button(){
        cy.get(logoffElements.logoff_button())
          .click()
    }

    click_email_dropdown(){
      cy.get(homeElements.email_dropdown()).click()
    }

    click_link_reset_password(){
      cy.get(homeElements.link_reset_your_password()).click()
    }
}

export default HomePage;