describe("API command", function() {
    
    it("8.9. Get Value CSS", function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        let colorCssProperty = $('#result').getCSSProperty('color');
        console.log("Ket qua: " + colorCssProperty.parsed.hex);
        browser.pause(1500);
    });

});
