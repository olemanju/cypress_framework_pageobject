import BasePage from "../BasePage"

const BRAND='.brand'
const SEARCH_BOX ='#searchTerm'
const SIGNIN_BUTTON= '#signin_button'
const USER_MENU='(//a[@class="dropdown-toggle"])[2]'
const LOGOUT_LINK= '#logout_link'


export default class NavBar{

    

    static clickOnLogo()
    {
        cy.get(BRAND).should('be.visible').click()
    }
    static searchBoxEntry(text){
        cy.get(SEARCH_BOX).type(`${text}{enter}`)
    }

    static clickSignInButton(){
        cy.get(SIGNIN_BUTTON).click()
    }

    static logout(){
        cy.xpath(USER_MENU).click()
        BasePage.pause(1000)
        cy.get(LOGOUT_LINK).click()


    }
}