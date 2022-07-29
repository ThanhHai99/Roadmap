let summation = function (a, b) {
    // balance the length of 2 number
    while (a.length !== b.length) {
        a.length < b.length ? a = "0" + a : b = "0" + b;
    };

    console.log(a);
    console.log(b);
    console.log("----------");

    var r = 0, rs = "";

    // loop from end to begin
    for (let i = a.length - 1; i >= 0; i--) {
        // sum of 2 digits
        let t = parseInt(a[i]) + parseInt(b[i]) + r;
        // update result variable
        rs = (t > 9 && i !== 0 ? t.toString().split("")[1] : t.toString()) + rs;
        // update remember variable
        r = t > 9 ? 1 : 0;
    };
    return rs;
};

console.log(summation("9926", "219"));
