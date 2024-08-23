/// <reference types="cypress" />

import LoginPage from "../../support/pageObjects/pages/LoginPage";
import testData from "../../fixtures/credentials.json"

describe('Basic queries with POM', () => {
    beforeEach(() => {
      LoginPage.open('/');
    })

    it('Login correct', ()=>{
        LoginPage.login (testData.userNames.correctUsername, testData.passwords.correctPassword);
        cy.url().should('include', 'inventory.html')
    })

    it('Check login with inccorect password',() =>{
      LoginPage.login(testData.userNames.correctUsername, testData.passwords.incorrectPassword)
      LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('Check if "Username" is a required', () => {
      cy.get('#login-button').click();
      LoginPage.verifyErrorMessage('Epic sadface: Username is required');
    })

    it('Check if "Password" is a required', () => {
      LoginPage.usernameField.type(testData.userNames.correctUsername);
      LoginPage.loginButton.click()
      LoginPage.verifyErrorMessage('Epic sadface: Password is required');
    })

    it('Login with locked user', ()=>{
      LoginPage.login(testData.userNames.lockedUsername,testData.passwords.correctPassword)
      LoginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');

  })
    
})