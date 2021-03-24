// ax + by = d (d = gcd(a, b))

let EuclideanExtend = (a, b) => {
    if (a < b) return "ĐK: a >= b";
    let d, x, y, x1, x2, y1, y2, q, r;
    if (b == 0) {
        d = a, x = 1, y = 0;
    }
    x2 = 1, x1 = 0, y2 = 0, y1 = 1;
    while(b > 0) {
        q = ~~(a/b), r = a - q*b;
        x = x2 - q*x1;
        y = y2-q*y1;
        a = b;
        b = r;
        x2 = x1;
        x1 = x;
        y2 = y1;
        y1 = y;
    };
    return `x = ${x2}, y = ${y2}, d = ${a}`;
};

(()=> {
    console.log(EuclideanExtend(4864, 3458));
})();
