const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const fs = require("fs");
const Countdown = require("countdown-js");
let o = new firefox.Options();
// o.addArguments('start-fullscreen');
// o.addArguments('disable-infobars');
// o.addArguments('headless'); // running test on visual firefox browser
// o.setUserPreferences({ credential_enable_service: false });

var Page = function() {
  this.driver = new Builder()
    .setFirefoxOptions(o)
    .forBrowser('firefox')
    .build();

  // visit a webpage
  this.visit = async function(theUrl) {
    return await this.driver.get(theUrl);
  };
  
  // quit current session
  this.quit = async function() {
    return await this.driver.quit();
  };

  //delay processs
  this.delay = async function(time) {
    await this.driver.sleep(time);
    // var end = new Date(new Date().getTime() + time);
    // Countdown.timer(end, function(timeLeft) {
    //   console.log(timeLeft.seconds + " giay");
    // }, function() {
    //   console.log("Countdown Finished!");
    // });
  }

  // wait and find a specific element with it's id
  this.findById = async function(id) {
    await this.driver.wait(until.elementLocated(By.id(id)), 10000, `Looking for element ${id}`);
    return await this.driver.findElement(By.id(id));
  };

  // wait and find a specific element with it's class
  this.findByClass = async function(className) {
    await this.driver.wait(until.elementLocated(By.className(className)), 10000, `Looking for element ${className}`);
    return await this.driver.findElement(By.className(className));
  };

  // wait and find a specific element with it's name
  this.findByName = async function(name) {
    await this.driver.wait(until.elementLocated(By.name(name)), 10000, `Looking for element ${name}`);
    return await this.driver.findElement(By.name(name));
  };

  // wait and find a specific element with it's css
  this.findByCss = async function(cssName) {
    await this.driver.wait(until.elementLocated(By.css(cssName)), 10000, `Looking for element ${cssName}`);
    return await this.driver.findElement(By.css(cssName));
  };

  // fill input web elements
  this.write = async function (el, txt) {
    return await el.sendKeys(txt);
  };
};

module.exports = Page;
