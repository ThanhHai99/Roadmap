let Euclidean = (a, b) => {
    let r = a % b;
    while (r != 0) {
        a =b;
        b = r;
        r = a % b;
    };
    return b;
};

(() => {
    console.log(Euclidean(9, 15));
})();
