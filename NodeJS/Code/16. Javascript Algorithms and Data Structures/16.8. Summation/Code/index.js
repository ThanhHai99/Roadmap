let Summation0 = (a, b) => {
    return a + b;
};

let Summation1 = (a, b) => {
    let numMax = (a.length == Math.max(a.length, b.length)) ? a : b;
    let numMin = (a.length == Math.min(a.length, b.length)) ? a : b;
    let m = 0, r0 = 0, j = Math.min(a.length, b.length) - 1;
    let result = "";

    for (let i = Math.max(a.length, b.length) - 1; i >= 0; --i) {
        if (j >= 0) {
            r0 = parseInt(numMax[i]) + parseInt(numMin[j]) + m;
            --j;
        } else {
            r0 = parseInt(numMax[i]) + 0 + m;
        };
        m = (r0 >= 10) ? 1 : 0;
        result += r0.toString().split("").pop();
        if (i == 0 && r0 >= 10) {
            result += "1";
        }
    };
    return result.split("").reverse().join("");
};

let Summation2 = (a, b) => {
    while (a.length !== b.length)
        a.length > b.length ? b = "0" + b : a = "0" + a;
    let rs = "", r = 0;
    for (let i = a.length - 1; i >= 0 ; i--) {
        let t0 = (parseInt(a[i]) + parseInt(b[i]) + r);
        t0 > 9 ? r = 1 : r = 0;
        if (i === 0) {
            rs = t0.toString() + rs;
            continue;
        };
        rs = t0 > 9 ? t0.toString().split("")[1] + rs : t0.toString().split("")[0] + rs;
    };
    return rs;
};

// console.log(Summation0(34539999345345675675685685, 549634088789789789789787898));
// console.log(Summation1("34539999345345675675685685", "549634088789789789789787898"));
console.log(Summation0(99, 33));
console.log(Summation1("99", "33"));
console.log(Summation2("99", "33"));
