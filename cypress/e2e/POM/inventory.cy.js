import LoginPage from "../../support/pageObjects/pages/LoginPage"
import testData from "../../fixtures/credentials.json"
import InventoryPage from "../../support/pageObjects/pages/InventoryPage"

describe('Inventory page', () => {

    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames.correctUsername, testData.passwords.correctPassword)
    })

    it('Check UI elements on inventory page', () => {
        InventoryPage.burgerMenuBtn.should('be.visible')
        InventoryPage.shoppingCart.should('be.visible')
        InventoryPage.filterDropdown.should('be.visible')
    })

    it('Chech if sorting dropdown include 4 option', () => {
        InventoryPage.filterDropdownOptions.should('have.length', 4)
    })

    it("Check redirect to cart", ()=> {
        InventoryPage.openShoppingCart()
        cy.url().should('include', 'cart.html')
    })

    it("Check open item page", ()=>{
        InventoryPage.openItemPage()
    })
})