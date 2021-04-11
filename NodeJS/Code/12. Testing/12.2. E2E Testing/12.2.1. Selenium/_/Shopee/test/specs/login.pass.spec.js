const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const Faker = require('../../utils/faker');

describe('My Login application', () => {
    it('Should login with valid credentials', () => {
        LoginPage.open('buyer/login?next=https%3A%2F%2Fshopee.vn%2F');
        LoginPage.login(Faker.accountLocal, Faker.passwordLocal);
        LoginPage.submitOTP();
        LoginPage.closeAdsPopup();
        expect(SecurePage.signInSuccess).toBeExisting();
    });
});
