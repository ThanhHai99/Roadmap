const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get loginSuccessSecure () {
        expect('#flash').toBeExisting();
        expect('#flash').toHaveTextContaining('You logged into a secure area!');
        return this;
    };

    get loginFailSecure () {
        expect('#flash').toBeExisting();
        expect('#flash').toHaveTextContaining('Your username is invalid!');
        return this;
    };
}

module.exports = new SecurePage();
