describe("API command", function() {
    
    it("8.12. Get Page URL", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        console.log("Ket qua: " + browser.getUrl());
        browser.pause(1500);
    });

});
