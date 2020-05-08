import BasePage from "../BasePage";

const ERROR_MSG='.alert-error'

export default class LoginPage extends BasePage{
    static login(username,password){
        cy.login(username,password)
        
    }

    static clickForgetPasswordLink(){
        cy.contains('Forgot your password ?').should('be.visible').click()
    }
   
    static verifyErrorMessage(){
        cy.isVisible(ERROR_MSG).contains('Login and/or password are wrong.')
    }

    static getTheErrorMessage(){
        const na=cy.get(ERROR_MSG).invoke('text')
        
    }

}