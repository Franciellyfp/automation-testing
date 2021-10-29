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
}

export default HomePage;