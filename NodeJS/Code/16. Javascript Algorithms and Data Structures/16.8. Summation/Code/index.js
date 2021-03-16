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
    };
    return result.split("").reverse().join("");
};

(() => {
    console.log(Summation0(34539999345345675675685685, 549634088789789789789787898));
    console.log(Summation1("34539999345345675675685685", "549634088789789789789787898"));
})();
