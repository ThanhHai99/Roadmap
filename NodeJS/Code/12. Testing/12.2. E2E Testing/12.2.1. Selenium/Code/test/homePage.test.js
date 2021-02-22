const { describe, it } = require('mocha');
const Page = require('../lib/homePage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async () => {
  try {
    describe ('Load Homepage Testing', async function () {
      this.timeout(50000);
      let driver, page;

      beforeEach (async () => {
        page = new Page();
        driver = page.driver;
        await page.visit('https://shopee.vn/');
      });

      afterEach (async () => {
        await page.quit();
      });

      it ('Search a production', async function() {
        const result = await page.searchProduct();
        // expect(result.length).to.be.above(1);
        expect(result).to.equal(true);
      });

      it ('Login local', async function() {
        const result = await page.submitSignIn();
        expect(result).to.equal(true);
      });
      
      it ('Add product to cart', async function() {
        const result = await page.buyProduct();
        console.log("========================");
        console.log(result);
        expect(result).to.equal(true);
      });

      it ('Change amount product in cart', async function() {
        const result = await page.changeAmountProductInCart();
        console.log("========================");
        console.log(result);
        expect(result).to.equal(true);
      });

    });
  } catch (ex) {
    console.log (new Error(ex.message));
  } finally {
    // code
  }
})();
