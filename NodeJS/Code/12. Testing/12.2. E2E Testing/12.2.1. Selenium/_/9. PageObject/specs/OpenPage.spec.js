const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('login form', function() {
    
    it('sign in success', function() {
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        LoginPage.submit();
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });

    it('sign in fail', function() {
        LoginPage.open();
        LoginPage.login('thanhhai', 'thanhhai');
        LoginPage.submit();
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining('Your username is invalid!');
    });
 
});
