import LoginPage from '../page/login_page'
import HomePage from '../page/home_page'
const loginPage = new LoginPage
const homePage = new HomePage

Given("I login to home page", () => {
    loginPage.open_login_page()
    loginPage.fill_email()
    loginPage.fill_password()
    loginPage.click_login_button()
})

When("Click on the logoff button", () => {
    
}

)