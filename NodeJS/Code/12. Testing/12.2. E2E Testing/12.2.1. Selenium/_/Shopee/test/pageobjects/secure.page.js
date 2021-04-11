const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInSuccess () {
        return $('#main > div > div._1Bj1VS.qEcSbS > div:nth-child(1) > div > div.navbar-wrapper.container-wrapper > div > ul > li.navbar__link.navbar__link--tappable.navbar__link--hoverable.navbar__link--account > div');
    };

    get signInFail () {
        return $('#main > div > div._3evFhm > div > div > form > div > div._1B7mke > div.uud8ko._2qpbrd.qluhEI > div:nth-child(2) > div');
    };

    get searchResultElement () {
        return $('div.shopee-search-item-result__items');
    };

    get addProductToCartSuccess () {
        return $('div.toast__text');
    };

    get resultIncreaseE () {
        return $('input.iRO3yj');
    };

    resultIncrease() {
        return this.resultIncreaseE.getValue();
    };
};

module.exports = new SecurePage();
