import LoginPage from "../../support/pageObjects/pages/LoginPage"
import testData from "../../fixtures/credentials.json"
import InventoryPage from "../../support/pageObjects/pages/InventoryPage"
import ItemPage from "../../support/pageObjects/pages/ItemPage"

describe('Inventory page', () => {

    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames.correctUsername, testData.passwords.correctPassword)
    })

    it("Check if item page include 'img', description, price and name", ()=>{
        InventoryPage.openItemPage()
        ItemPage.itemImg.should('be.visible')
        ItemPage.itemDescription.should('be.visible')
        ItemPage.itemName.should('be.visible')
        ItemPage.itemPrice.should('be.visible')
    })

    it("Check when click to 'Add to cart' button changes to 'Remove", ()=> {
        InventoryPage.openItemPage()
        ItemPage.addToCartBtn()
        ItemPage.remove.should('be.visible')
    })

    it("Check when click to 'Remove' button item 'Add to cart' button is visible ", ()=> {
        InventoryPage.openItemPage()
        ItemPage.addToCartBtn()
        ItemPage.removeBtn()
        ItemPage.addToCart.should('be.visible')

    })


})