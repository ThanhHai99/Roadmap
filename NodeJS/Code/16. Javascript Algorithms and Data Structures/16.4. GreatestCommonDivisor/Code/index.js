let GreatestCommonDivisor0 = (a, b) => {
    for (let i = Math.min(a, b); i > 0; --i) {
        if (a%i == 0 && b%i == 0) {
            return i;
        }
    };
};

let GreatestCommonDivisor1 = (a, b) => {
    if (a == 0 || b == 0) {
        return a + b;
    }
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
};

let GreatestCommonDivisor2 = (a, b) => {
    while (a*b != 0) {
        if (a > b) {
            a %= b;
        } else {
            b %= a;
        };
    };
    return a + b;
};

(() => {
    console.log("GreatestCommonDivisor0: " + GreatestCommonDivisor0(9, 15)); // 3
    console.log("GreatestCommonDivisor1: " + GreatestCommonDivisor1(9, 15)); // 3
    console.log("GreatestCommonDivisor2: " + GreatestCommonDivisor2(9, 15)); // 3
})();
