describe("API command", function() {
    it("8.2. Set Value", function() {
        browser.url("https://the-internet.herokuapp.com/login");
        $('#username').setValue("okokok");
        $('#password').setValue("okokok");
        browser.pause(2000);
    });
});
