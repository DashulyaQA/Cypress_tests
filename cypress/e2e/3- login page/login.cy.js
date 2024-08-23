/// <reference types="cypress" />
import LoginPage from "../../support/pageObjects/pages/LoginPage";


describe('Basic queries', () => {
  beforeEach(() => {
    LoginPage.open('/');
  })

    it('Login correct', ()=>{
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', 'inventory.html')
    })

    it('Check login with inccorect password',() =>{
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('blabla');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').invoke('text').should('eq', 'Epic sadface: Username and password do not match any user in this service');
    })

    it('Check if "Username" is a required', () => {
      cy.get('[data-test="password"]').type('blabla');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
    })

    it('Check if "Password" is a required', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
    })

    it('Login with locked user', ()=>{
      cy.get('[data-test="username"]').type('locked_out_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');

  })
    
})