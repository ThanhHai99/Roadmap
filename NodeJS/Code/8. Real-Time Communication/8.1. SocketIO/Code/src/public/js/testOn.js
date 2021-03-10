function testOn() {
    socket.on("test-on-1", function(data) {
        console.log(data);
    });
};

$(document).ready(function() {
    testOn();
});
