let Subtraction0 = (a, b) => {
    return a - b;
};

let Subtraction1 = (a, b) => {
    let numMax, numMin;
    if (a.length != b.length) {
        numMax = (a.length == Math.max(a.length, b.length)) ? a : b;
        numMin = (a.length == Math.min(a.length, b.length)) ? a : b;
    } else {
        for (let i = 0; i < a.length; i++) {
            if (parseInt(a[i]) > parseInt(b[i])) {
                numMax = a;
                numMin = b;
            }
            if (parseInt(a[i]) < parseInt(b[i])) {
                numMin = a;
                numMax = b;
            }            
        };
        if (numMax == undefined && numMin == undefined)
            return 0;
    };

    let m = 0, r0 = 0, j = Math.min(a.length, b.length) - 1;
    let result = "";

    for (let i = Math.max(a.length, b.length) - 1; i >= 0; --i) {
        if (j >= 0) {
            if (parseInt(numMax[i]) <= numMin[j]) {
                r0 = (parseInt(numMax[i]) + 10) - parseInt(numMin[j]) - m;
                m = 1;
            } else {
                r0 = parseInt(numMax[i]) - parseInt(numMin[j]) - m;
                m = 0;
            };
            --j;
        } else {
            r0 = parseInt(numMax[i]) - m;
        };
        result += r0.toString().split("").pop();
    };
    let match = result.match("0+$", "");
    result = result.replace(match, "");
    if (numMin == a)
        result += "-";
    return result.split("").reverse().join("");
};

(()=> {
    console.log(Subtraction0(34539999345345675675685685, 549634088789789789789787898));
    console.log(Subtraction1("34539999345345675675685685", "549634088789789789789787898"));
})();
