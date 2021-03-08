describe("API command", function() {
    
    it("8.15. Screen shot", function() {
        browser.url("https://the-internet.herokuapp.com/upload");
        $(".example").saveScreenshot("./report/screenShot/test1.png");
        browser.pause(1500);
    });

});
