describe("API command", function() {
    
    it("8.13. Get Page Title", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        console.log("Ket qua: " + browser.getTitle());
        browser.pause(1500);
    });

});
