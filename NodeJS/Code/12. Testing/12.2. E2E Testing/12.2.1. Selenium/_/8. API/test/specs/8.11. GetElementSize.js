describe("API command", function() {
    
    it("8.11. Get ELement Size", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        let sizeElement = $('body > div:nth-child(1)').getSize();
        console.log("Ket qua: ");
        console.log(sizeElement);
        browser.pause(1500);
    });

});
