import {url} from '../../../config'
import NavBar from '../../page-objects/components/NavBar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('this is the first scenario implemented with Framework',()=>{
    before(function(){
        cy.visit(url)
      
    })

    it('this test case covers the invalid login functionality',()=>{
        NavBar.clickSignInButton()

        cy.fixture("testdata").then(user=>{
            const invalidname=user.Invalid_username
            const invalidpass=user.Invalid_password
            LoginPage.logInfo(invalidname)
            LoginPage.logInfo(invalidpass)
            LoginPage.login(invalidname,invalidpass)        
        })       
    })

    it('should display Error message',()=>{
        LoginPage.verifyErrorMessage()
        LoginPage.pause(3000)
    })

    
})