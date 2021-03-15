let sqrt = (n) => {
    let result = [], x0 = n, index = 0;
    while(true) {
        x0 = (x0 + (n/x0)) / 2;
        result.unshift(x0);
        if (result.length >= 4)
            result.pop();
        let i = Math.round(result[0]), j = Math.round(result[1]), k = Math.round(result[2]);
        if(k == j && j == i)
            return i;
    }
};

(() => {
    console.log("Ket qua = " + sqrt(603729)); //777
})();
