describe("API command", function() {
    
    it("8.10. Get Attribute", function() {
        browser.url("https://the-internet.herokuapp.com/login");
        let methodCssProperty = $('#login').getAttribute('action');
        console.log("Ket qua: " + methodCssProperty);
        browser.pause(1500);
    });

});
