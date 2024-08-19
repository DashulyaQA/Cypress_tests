/// <reference types="cypress" />

import LoginPage from "../../support/pageObjects/pages/LoginPage";

describe('Basic queries with POM', () => {
    beforeEach(() => {
      LoginPage.open('/');
    })

    it('Login correct', ()=> {
        LoginPage.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'));
        cy.url().should('include', 'inventory.html')
    })

    it('Check login with incorrect password', () => {
        LoginPage.login(Cypress.env('USER_NAME'), 'incorrect_password')
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('Check if "Username" is required', () => {
        cy.get('#login-button').click();
        LoginPage.verifyErrorMessage('Epic sadface: Username is required');
    })

    it('Check if "Password" is required', () => {
        LoginPage.usernameField.type(Cypress.env('USER_NAME'));
        LoginPage.loginButton.click()
        LoginPage.verifyErrorMessage('Epic sadface: Password is required');
    })

    it('Login with locked user', () => {
        LoginPage.login('locked_out_user', Cypress.env('USER_PASSWORD'))
        LoginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    })

    // Test for problem user
    it('Login with problem user', () => {
        LoginPage.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'));
        cy.url().should('include', 'inventory.html');
    })
})
