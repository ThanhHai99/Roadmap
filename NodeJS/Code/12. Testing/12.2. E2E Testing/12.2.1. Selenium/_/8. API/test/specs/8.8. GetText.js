describe("API command", function() {
    
    it("8.8. Get Text", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        console.log("Ket qua: " + $('#content > div > p:nth-child(2)').getText());
        browser.pause(1500);
    });

});
