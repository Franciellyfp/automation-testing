/// <reference types="Cypress" />

import HomeElements from '../elements/home_elements'
const homeElements = new HomeElements

class HomePage {

    check_white_label() {
        cy.get(homeElements.white_label())
          .should('contain', 'EdgeOS')
    }
}

export default HomePage;