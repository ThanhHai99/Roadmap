describe("API command", function() {
    it("8.3.1. Waiting for exists", function() {
        browser.url("http://localhost");
        // wait for exist
        $("#test").waitForExist({ timeout: 2000 });
    });
    
    it("8.3.2.a. Waiting for enable", function() {
        // wait for enabled (select css element enable)
        $("#test").waitForEnabled({ timeout: 2000 });
    });

    it("8.3.2.b. Waiting for disable", function() {
        // wait for enabled (select css element enable)
        $("#test").waitForEnabled({ timeout: 2000, reverse: true });
    });
    
    it("8.3.3. Waiting until", function() {
        // wait for until(condition, {option})
        $("#test").waitUntil(function() {
            return this.getText() === "You are log in";
        }, { timeout: 2000 });
    });
    
    it("8.3.4.a. Waiting for clickable", function() {
        // wait for clickable
        $("#test").waitForClickable({ timeout: 2000 });
    });

    it("8.3.4.b. Waiting for no clickable", function() {
        // wait for clickable
        $("#test").waitForClickable({ timeout: 2000, reverse: true });
    });
    
    it("8.3.5.a. Waiting for displayed", function() {
        // wait for displayed
        $("#test").waitForDisplayed({ timeout: 2000 });
    });

    it("8.3.5.b. Waiting for no displayed", function() {
        // wait for displayed
        $("#test").waitForDisplayed({ timeout: 2000, reverse: true });
    });
});
