function testEmit() {
    $('button.signupbtn').bind("click", function() {
        let data = "=============================data-emit-1=============================";
        socket.emit("test-emit-1", { data: data });
    });
};

$(document).ready(function() {
    testEmit();
});
