const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get adsPopup () {
        return $('#modal > div > div > div.shopee-popup__container > div');
    };

    get inputSearch () {
        return $('input.shopee-searchbar-input__input');
    };

    get btnSubmit () {
        return $('button.btn--s');
    };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    search (keyword) {
        this.inputSearch.setValue(keyword);
        this.btnSubmit.click();
    };

    closeAdsPopup() {
        this.adsPopup.waitForDisplayed({ timeout: 300000 });
        this.adsPopup.click();
    };

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    };
}

module.exports = new SearchPage();
