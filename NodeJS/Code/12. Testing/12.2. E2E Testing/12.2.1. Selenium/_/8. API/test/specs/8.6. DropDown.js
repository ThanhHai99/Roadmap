describe("API command", function() {
    it("8.6.a. Select dropdown by index", function() {
        browser.url("https://the-internet.herokuapp.com/dropdown");
        $('#dropdown').selectByIndex(1);
        browser.pause(1500);
    });

    it("8.6.b. Select dropdown by visible text ", function() {
        browser.url("https://the-internet.herokuapp.com/dropdown");
        $('#dropdown').selectByVisibleText("Option 2");
        browser.pause(1500);
    });

    it("8.6.c. Select dropdown by attribute ", function() {
        browser.url("https://the-internet.herokuapp.com/dropdown");
        $('#dropdown').selectByAttribute("value", "1");
        browser.pause(1500);
    });

});
