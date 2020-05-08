import BasePage from "../BasePage";


//Place for Selectors
const CASH_ACCOUNT_HEAD= 'Cash Accounts'
export default class AccountstabPage extends BasePage
{
 static verifyCashAccountsHeading()
 {
     cy.contains(CASH_ACCOUNT_HEAD).should('be.visible')
 }
 
}