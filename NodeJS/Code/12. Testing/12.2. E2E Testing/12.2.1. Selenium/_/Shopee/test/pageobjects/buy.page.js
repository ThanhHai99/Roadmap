const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BuyPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productElement () {
        return $('#main > div > div._193wCc > div.container._1rdaqq > div.OQtnd7 > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div:nth-child(1) > a');
    };

    get addProductToCartElement () {
        return $('span=thêm vào giỏ hàng');
    };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    buy () {
        this.productElement.waitForDisplayed({ timeout: 300000 });
        this.productElement.click();
        this.addProductToCartElement.waitForDisplayed({ timeout: 300000 });
        this.addProductToCartElement.click();
    };
}

module.exports = new BuyPage();
