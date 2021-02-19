const crypto = require("crypto-js");
let Page = require('./basePage');
const locator = require('../utils/locator');
const fake = require('../utils/fakeData');

const signInButtonSelectorCss = locator.signInButtonSelectorCss;
const searchInputSelectorClass = locator.searchInputSelectorClass;
const searchButtonClass = locator.searchButtonClass;
const resultConfirmationSelectorClass = locator.resultConfirmationClass;
const accountInputSelectorCss = locator.accountInputSelectorCss;
const passwordInputSelectorCss = locator.passwordInputSelectorCss;
const signInSubmitSelectorCss = locator.signInSubmitSelectorCss;

const fakeNameKeyword = fake.nameKeyword;
let signInButton, accountInput, passwordInput, signInSubmitButton, searchInput,
    searchButton, resultStat, formSignInButtonFlag, viewDetailProductElement, addProductToCartElement,
    buyProductStatus, veryfiOTPElement, cartElement, increaseProductInCartElement;

Page.prototype.closePopup = async function() {
  const popupClose = await this.findByClass("shopee-popup__close-btn");
  let status = await popupClose.isDisplayed();
  if (status) await popupClose.click();
};

Page.prototype.findSignInButton = async function() {
  signInButton = await this.findByCss(signInButtonSelectorCss);
  signInButtonFlag = await signInButton.isDisplayed();
  const result = await this.driver.wait(async function() {
    return {
      signInButtonFlag: signInButtonFlag
    }
  }, 15000);
  return result;
};

Page.prototype._submitSignIn = async function() {
  await this.findSignInButton();
  await signInButton.click();
  accountInput = await this.findByCss(accountInputSelectorCss);
  passwordInput = await this.findByCss(passwordInputSelectorCss);
  signInSubmitButton = await this.findByCss(signInSubmitSelectorCss);
  formSignInButtonFlag = await this.findByClass("_7p8xth");
  await this.write(accountInput, fake.accountLocal);
  await this.write(passwordInput, crypto.AES.decrypt(fake.passwordLocal, fake.saltPasswordLocal).toString(crypto.enc.Utf8));
  await signInSubmitButton.click();

  const result = await this.driver.wait(async function() {
    const formLoginFlag = await formSignInButtonFlag.isDisplayed();
    return {
      formLoginFlag: formLoginFlag
    }
  }, 15000);
  return result;
};

Page.prototype._submitOTP = async function() {
  veryfiOTPElement = await this.findByCss(`button[class="_35rr5y _32qX4k _1ShBrl _3z3XZ9 pukiJQ _2iOIqx _2h_2_Y"]`);
  // veryfiOTPElement = await this.findByClass(`_2h_2_Y`);
  const result = await this.driver.wait(async function() {
    const _veryfiOTPElementIsEnabled = await veryfiOTPElement.isEnabled();
    console.log("_veryfiOTPElementIsEnabled: " + _veryfiOTPElementIsEnabled);
    return {
      _veryfiOTPElementIsEnabled: _veryfiOTPElementIsEnabled
    };
  }, 15000);
  return result;
};

Page.prototype.submitSignIn = async function() {
  await this.closePopup();
  await this._submitSignIn();
  await this.delay(20000);
  let result = await this._submitOTP();
  if (result._veryfiOTPElementIsEnabled) {
    await veryfiOTPElement.click();
    await this.delay(10000);
    return true;
  }
  return false;
};

Page.prototype.findInputAndButton = async function() {
  searchInput = await this.findByClass(searchInputSelectorClass);
  searchButton = await this.findByClass(searchButtonClass);

  const result = await this.driver.wait(async function() {
    const searchButtonText = await searchButton.getAttribute('value');
    const searchInputEnableFlag = await searchInput.isEnabled();
    return {
      inputEnabled: searchInputEnableFlag,
      buttonText: searchButtonText
    }
  }, 15000);
  return result;
};

Page.prototype._searchProduct = async function() {
  await this.findInputAndButton();
  await this.write(searchInput, fakeNameKeyword);
  await searchButton.click();
  resultStat = await this.findByClass(resultConfirmationSelectorClass);
  return await this.driver.wait(async function() {
    return await resultStat.getText();
  }, 15000);
};

Page.prototype.searchProduct = async function() {
  await this.closePopup();
  let result = await this._searchProduct();
  return result.length > 0 ? true : false;
};

Page.prototype.buyProduct = async function() {
  await this.closePopup();
  await this._submitSignIn();
  await this.delay(20000); // wait enter type OTP
  let result = await this._submitOTP();
  if (result._veryfiOTPElementIsEnabled) {
    await veryfiOTPElement.click();
    await this.delay(10000);
    await this._searchProduct();
    viewDetailProductElement = await this.findByCss(locator.viewDetailProductElementCss);
    await viewDetailProductElement.click();
    addProductToCartElement = await this.findByCss(locator.addProductToCartElementCss);
    await addProductToCartElement.click();
    return true;
  }
  return false;
}

Page.prototype.changeAmountProductInCart = async function() {
  await this.closePopup();
  await this._submitSignIn();
  await this.delay(20000); // wait enter type OTP
  let result = await this._submitOTP();
  if (result._veryfiOTPElementIsEnabled) {
    await veryfiOTPElement.click();
    await this.delay(10000);
    // await this.closePopup();
    // await this._searchProduct();
    cartElement = await this.findByCss(`div[class="cart-drawer-container"]`);
    await cartElement.click();
    increaseProductInCartElement = await this.findByCss('div.shopee-input-quantity button');
    await increaseProductInCartElement.click();
    return true;
  }
  return false;
};

module.exports = Page;
