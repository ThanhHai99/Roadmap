let quickPow = (a, n) => {
    let result = 1;
    while (n > 0) {
        if (n % 2 == 1) {
            result *= a;
        };
        a *= a;
        n = ~~(n/2);
    };
    return result;
};

(()=> {
    console.log(quickPow(2, 12)); //4096
})();
