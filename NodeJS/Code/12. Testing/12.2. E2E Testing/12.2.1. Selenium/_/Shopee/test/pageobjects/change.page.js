const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChangePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get increaseAmountProduct () {
        return $('#main > div > div._193wCc > div.cart-page.cart-page--opc > div:nth-child(3) > div.cart-page__content.cart-page__content--opc > div:nth-child(3) > div > div.cart-page-shop-section__items > div > div > div.cart-item__cell-quantity > div > button:nth-child(3)');
    };

    get cartElement () {
        return $('div.cart-drawer-container > a');
    };

    get adsPopup () {
        return $('#modal > div > div > div.shopee-popup__container > div');
    };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    closeAdsPopup() {
        this.adsPopup.waitForDisplayed({ timeout: 300000 });
        this.adsPopup.click();
    };

    changeBefore () {
        this.cartElement.waitForDisplayed({ timeout: 300000 });
        this.cartElement.click();
    };
    
    changeAfter () {
        this.increaseAmountProduct.waitForDisplayed({ timeout: 300000 });
        this.increaseAmountProduct.waitForClickable({ timeout: 300000 });
        this.increaseAmountProduct.click();
    };
    
    // change() {
    // };
}

module.exports = new ChangePage();
