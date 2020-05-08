import {url} from '../../../config'
import NavBar from '../../page-objects/components/NavBar'
import LoginPage from '../../page-objects/pages/LoginPage'
import ForgetPasswordPage from '../../page-objects/pages/ForgetPasswordPage'
import BasePage from '../../page-objects/BasePage'

describe('this is the first scenario implemented with Framework',()=>{
    before(function(){
        cy.visit(url)
      
    })

    it('this test case covers the ForgetPassword LInk',()=>{
        NavBar.clickSignInButton()
        LoginPage.clickForgetPasswordLink()
        ForgetPasswordPage.verifyForgetPasswordHeading()
        cy.fixture("testdata").then(user=>{
        const email=user.email
        BasePage.logInfo(email)
        ForgetPasswordPage.clickOnSendPassword(email)
        cy.matchImageSnapshot('Send Password');
                
        })       
    })
})