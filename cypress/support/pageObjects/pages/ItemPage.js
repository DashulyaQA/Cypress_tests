/// <reference types="cypress" />

import BasePage from "./BasePage";

class ItemPage extends BasePage {

    get itemImg(){
        return cy.get("[data-test|='item-sauce-labs']")
    }

    get itemName(){
        return cy.get('[data-test="inventory-item-name"]')
    }

    get addToCart(){
        return cy.get('[data-test="add-to-cart"]')
    }

    get remove(){
        return cy.get('[data-test="remove"]')
    }

    get itemDescription() {
        return cy.get('[data-test="inventory-item-desc"]')
    }

    get itemPrice(){
        return cy.get('[data-test="inventory-item-price"]')
    }

    addToCartBtn(){
        this.addToCart.click()
    }

    removeBtn(){
        this.remove.click()
    }
}

export default new ItemPage()