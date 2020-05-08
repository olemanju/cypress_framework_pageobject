// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

Cypress.Commands.add('isVisible', selector =>{
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector=>{
    cy.get(selector).should('not.exist')
})

const LOGINFORM='#login_form'
const USERNAME_INPUT='#user_login'
const PASSWORD_INPUT='#user_password'
const REMEMBER_CHECKBOX='input[id="user_remember_me"]'

Cypress.Commands.add('login',(username,password) =>{
    cy.get(LOGINFORM).should('be.visible')
    cy.get(USERNAME_INPUT).clear()
    cy.get(USERNAME_INPUT).type(username)
    cy.get(PASSWORD_INPUT).clear()
    cy.get(PASSWORD_INPUT).type(password)
    cy.get(REMEMBER_CHECKBOX).click()
    cy.contains('Sign in').click()
})
