const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const Faker = require('../../utils/faker');

describe('My Login application', () => {
    it('Should login with invalid credentials', () => {
        LoginPage.open('buyer/login?next=https%3A%2F%2Fshopee.vn%2F');
        LoginPage.login(Faker.accountLocal, Faker.passwordLocal('U2FsdGVkX1/aABOdP0kzSmIgp9bDwEDhLV2IKuUDjnE='));
        expect(SecurePage.signInFail).toBeExisting();
        expect(SecurePage.signInFail).toHaveText('Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại');
    });
});
