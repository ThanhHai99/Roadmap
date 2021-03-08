const LoginPage = require('../pageobjects/login.page');

describe('login form', function() {

    before('Data prepare', function() {
        LoginPage.open();
    });
    
    it('Input data', function() {
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });

    it('Submit and secure', function() {
        LoginPage.submit().loginSuccessSecure()
    });

    after('Clear data', function() {
        console.log("Clear Data");
    });
 
});
