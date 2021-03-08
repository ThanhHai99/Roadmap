describe("API command", function() {
    it("8.7.1.a. Accept Alert", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        $('[onclick="jsConfirm()"]').click();
        browser.pause(2000);
        browser.acceptAlert();
        browser.pause(2000);
    });

    it("8.7.1.b. Dismiss Alert", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        $('[onclick="jsConfirm()"]').click();
        browser.pause(2000);
        browser.dismissAlert();
        browser.pause(2000);
    });

    it("8.7.2. Get Alert Text", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        $('[onclick="jsConfirm()"]').click();
        browser.pause(2000);
        console.log("Ket qua: " + browser.getAlertText());
        browser.pause(2000);
    });

});
