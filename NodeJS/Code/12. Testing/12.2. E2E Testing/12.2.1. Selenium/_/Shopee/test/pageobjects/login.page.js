const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get adsPopup () {
        return $('#modal > div > div > div.shopee-popup__container > div');
    };

    get inputUsername () {
        return $('input[name="loginKey"]')
    };
    
    get inputPassword () {
        return $('input[name="password"]')
    };
    
    get btnSubmit () {
        return $('button=Đăng nhập');
    };

    get btnSubmitOTP () {
        return $('button=Xác nhận');
    };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        browser.pause(1000);
        this.btnSubmit.click();
    };

    //wait submit login form
    // submitLogin () {
        // this.btnSubmit
    // };

    // waitting enter OTP code
    submitOTP () {
        this.btnSubmitOTP.waitForEnabled({ timeout: 300000 });
        this.btnSubmitOTP.click();
    };

    closeAdsPopup() {
        this.adsPopup.waitForDisplayed({ timeout: 300000 });
        this.adsPopup.click();
    };

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    };
    
}

module.exports = new LoginPage();
