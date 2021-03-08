const LoginPage = require('../pageobjects/login.page');

describe('login form', function() {
    
    beforeEach('before each', function() {
        LoginPage.open();
    });

    it('sign in success', function() {
        LoginPage.login('tomsmith', 'SuperSecretPassword!').submit().loginSuccessSecure();
    });

    it('sign in fail', function() {
        LoginPage.login('thanhhai', 'thanhhai').submit().loginFailSecure();
    });

    afterEach('after each', function() {
        console.log('=========================after each=========================');
    });
 
});
