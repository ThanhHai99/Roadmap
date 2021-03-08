describe("API command", function() {
    
    it("8.14. File upload", function() {
        browser.url("https://the-internet.herokuapp.com/upload");
        const filePath = 'D:/OneDrive - lanecc.edu/4K/anh-nen-4k-dep_105907959.jpg';
        const remoteFilePath = browser.uploadFile(filePath);
        $('#file-upload').setValue(remoteFilePath);
        $('#file-submit').click();
        browser.pause(1500);
    });

});
