const LoginPage = require('../pageobjects/login.page');
const ChangePage = require('../pageobjects/change.page');
const SecurePage = require('../pageobjects/secure.page');
const Faker = require('../../utils/faker');

// Increase amount product
describe('Change amount product functionality testing', () => {
    it('Change amount product with valid value', () => {
        LoginPage.open('buyer/login?next=https%3A%2F%2Fshopee.vn%2F');
        LoginPage.login(Faker.accountLocal, Faker.passwordLocal);
        LoginPage.submitOTP();
        ChangePage.closeAdsPopup();
        ChangePage.changeBefore();
        // original product quantity
        let amount0 = SecurePage.resultIncrease();
        ChangePage.changeAfter();
        expect(SecurePage.resultIncreaseE).toHaveValue((parseInt(amount0) + 1).toString());
    });
});
