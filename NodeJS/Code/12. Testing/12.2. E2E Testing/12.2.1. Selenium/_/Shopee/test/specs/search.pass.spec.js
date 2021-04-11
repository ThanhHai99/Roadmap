const SearchPage = require('../pageobjects/search.page');
const SecurePage = require('../pageobjects/secure.page');
const Faker = require('../../utils/faker');

describe('Search functionality testing', () => {
    it('Search with valid value', () => {
        SearchPage.open('');
        SearchPage.closeAdsPopup();
        SearchPage.search(Faker.keywordSearch);
        expect(SecurePage.searchResultElement).toBeExisting();
    });
});
