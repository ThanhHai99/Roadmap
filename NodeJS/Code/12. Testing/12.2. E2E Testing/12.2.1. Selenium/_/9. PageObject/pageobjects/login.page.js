const Page = require('./page');

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
        return super.open('login');
    };

    login(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        // this.submitBtn.click();
    };

    submit() {
        return this.submitBtn.click();
    };

};

module.exports = new LoginPage();
