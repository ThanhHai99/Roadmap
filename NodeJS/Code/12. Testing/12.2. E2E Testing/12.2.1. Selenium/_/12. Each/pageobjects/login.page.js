const Page = require('./page');
const SecurePage = require('./secure.page');

class LoginPage extends Page {

    get username() {
        return $('#username');
    };

    get password() {
        return $('#password');
    };
    
    get submitBtn() {
        return $('button[type="submit"]') ;
    };

    open() {
        super.open('login');
        return this;
    };

    login(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        return this;
    };

    submit() {
        this.submitBtn.click();
        return this;
    };

    loginSuccessSecure() {
        return SecurePage.loginSuccessSecure;
    };

    loginFailSecure() {
        return SecurePage.loginFailSecure;
    }

};

module.exports = new LoginPage();
