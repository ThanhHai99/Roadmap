const LoginPage = require('../pageobjects/login.page');
const SearchPage = require('../pageobjects/search.page');
const BuyPage = require('../pageobjects/buy.page');
const SecurePage = require('../pageobjects/secure.page');
const Faker = require('../../utils/faker');

describe('Buy product functionality testing', () => {
    it('Buy product with valid', () => {
        LoginPage.open('buyer/login?next=https%3A%2F%2Fshopee.vn%2F');
        LoginPage.login(Faker.accountLocal, Faker.passwordLocal('U2FsdGVkX1+oLrKbBJUmRpDM3jItbqmaBXOJTqUuFRI='));
        LoginPage.submitOTP();
        LoginPage.closeAdsPopup();
        SearchPage.search(Faker.keywordSearch);
        BuyPage.buy();
        expect(SecurePage.addProductToCartSuccess).toBeExisting();
        expect(SecurePage.addProductToCartSuccess).toHaveText('Sản phẩm đã được thêm vào Giỏ hàng');
    });
});
