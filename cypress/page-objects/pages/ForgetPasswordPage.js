import BasePage from "../BasePage";

const HEAD_FORGET='Forgotten Password'
const USER_EMAIL='#user_email'
const SEND_PASSWORD_BTN='Send Password'
const CONFIRMATION_MSG='Your password will be sent to the following email:'

export default class ForgetPasswordPage extends BasePage{


    static verifyForgetPasswordHeading(){
        cy.get('h3').contains(HEAD_FORGET)
    }

    static clickOnSendPassword(emailaddress){
        cy.get(USER_EMAIL).type(emailaddress)
        cy.contains(SEND_PASSWORD_BTN).click()
        cy.contains(CONFIRMATION_MSG).should('be.visible')
        cy.contains(CONFIRMATION_MSG).should('contain',emailaddress)
    }
}