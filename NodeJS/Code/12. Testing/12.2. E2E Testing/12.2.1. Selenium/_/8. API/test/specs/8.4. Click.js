describe("API command", function() {
    it("8.4. Click", function() {
        browser.url("https://the-internet.herokuapp.com/login");
        $('#username').setValue("okokok");
        $('#password').setValue("okokok");
        browser.pause(2000);
        $('[type="submit"]').click();
        browser.pause(1000);
    });
});
