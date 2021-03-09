const Page = require('./page');
const expect = require('chai').expect;
const should = require('chai').should();

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get loginSuccessSecure () {
        should.exist($('#flash'));
        expect($('#flash').getText()).to.have.string('You logged into a secure area!');
        return this;
    };

    get loginFailSecure () {
        should.exist($('#flash'));
        expect($('#flash').getText()).to.have.string('Your username is invalid!');
        return this;
    };
}

module.exports = new SecurePage();
