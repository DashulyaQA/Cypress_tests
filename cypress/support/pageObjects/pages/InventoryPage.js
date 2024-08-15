/// <reference types="cypress" />

import BasePage from "./BasePage";

class InventoryPage extends BasePage {

get burgerMenuBtn(){
    return cy.get('#react-burger-menu-btn')
}

get filterDropdown(){
    return cy.get('[data-test="product-sort-container"]')
}

get filterDropdownOptions(){
    return this.filterDropdown.find('option')
}

get addToCartBtn(){
    return cy.get('#add-to-cart-sauce-labs-backpack')
}

get shoppingCart(){
    return cy.get('[data-test="shopping-cart-link"]')
}
get continueShoppingBtn(){
    return cy.get('#continue-shopping')
}

get itemOpen(){
    return cy.get('[data-test="item-4-title-link"]')
}

openItemPage(){
    this.itemOpen.click()
}

openBurgerMenu(){
    this.burgerMenuBtn.click()
}

addItemToCart(){
    this.addItemToCart.click()
}

openShoppingCart() {
    this.shoppingCart.click()
}
}

export default new InventoryPage()