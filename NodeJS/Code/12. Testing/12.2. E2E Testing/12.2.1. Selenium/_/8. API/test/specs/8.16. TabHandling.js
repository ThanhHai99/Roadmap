describe("API command", function() {
    
    it("8.16. Tab handling", function() {
        browser.url("https://google.com");
        browser.pause(1500);
        browser.newWindow("https://facebook.com");
        browser.pause(1500);
        browser.switchWindow("google.com");
        browser.pause(1500);
    });

});
