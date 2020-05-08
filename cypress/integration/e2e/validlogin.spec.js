import {url} from '../../../config'
import NavBar from '../../page-objects/components/NavBar'
import LoginPage from '../../page-objects/pages/LoginPage'
import AccountstabPage from '../../page-objects/pages/AccountstabPage'
import BasePage from '../../page-objects/BasePage'

describe('This is the second test case to validate the valid user is able to login to the application',()=>{
    before(function(){
        cy.visit(url)
      
    })

    it('User has entered valid username and password',()=>{
        NavBar.clickSignInButton()

        cy.fixture("testdata").then(user=>{
            const validname=user.username
            const validpassword=user.password
            LoginPage.logInfo(validname)
            LoginPage.logInfo(validpassword)
            LoginPage.login(validname,validpassword)        
        })       
    })

    it('should display Cash Accounts Tab',()=>{
        AccountstabPage.verifyCashAccountsHeading()
        LoginPage.pause(3000)
        cy.matchImageSnapshot('Account Summary Page');
    })

    it('click on logout button',()=>{
        NavBar.logout()
        BasePage.pause(1000)
    })

    
})