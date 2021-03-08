const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('login form', function() {
    
    it('sign in success', function() {
        LoginPage.open().login('tomsmith', 'SuperSecretPassword!').submit().loginSuccessSecure();
    });

    it('sign in fail', function() {
        LoginPage.open().login('thanhhai', 'thanhhai').submit().loginFailSecure();
    });
 
});
