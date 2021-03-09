const LoginPage = require('../pageobjects/login.page');
const LoginData = require('../test_data/login.data.json');

describe('login form', function() {
    
    beforeEach('before each', function() {
        LoginPage.open();
    });

    it(LoginData.correctCredentials.command, function() {
        LoginPage
            .login(LoginData.correctCredentials.username, LoginData.correctCredentials.password)
            .submit()
            .loginSuccessSecure();
    });

    it(LoginData.incorrectCredentials.command, function() {
        LoginPage
            .login(LoginData.incorrectCredentials.username, LoginData.incorrectCredentials.password)
            .submit()
            .loginFailSecure();
    });

    afterEach('after each', function() {
        console.log('=========================after each=========================');
    });
 
});
