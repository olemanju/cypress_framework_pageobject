export default class NavBar{

    static clickOnLogo()
    {
        cy.get('.brand').should('be.visible').click()
    }
    static searchBoxEntry(text){
        cy.get('#searchTerm').type(`${text}{enter}`)
    }

    static clickSignInButton(){
        cy.get('#signin_button').click()
    }
}