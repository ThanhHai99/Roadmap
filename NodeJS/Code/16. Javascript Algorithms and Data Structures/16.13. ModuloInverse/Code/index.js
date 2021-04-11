// https://kipalog.com/posts/Cac-giai-thuat-tinh-nghich-dao-modulo

//Brute force
let moduloInverse1 = (n, m) => {
    for (let i=1; i < m; i++)
        if ((n * i) % m == 1)
            return i;
    return -1; // not exist
};

//Định lý nhỏ Fermat
let moduloInverse2 = () => {

};

let moduloInverse3 = (a, n) => {
    let x, y, d, x1, x2, y1, y2, modul = n;
    if (n == 0) d = a; x = 1; y = 0;
    x2 = 1, x1 = 0, y2 = 0, y1 = 1;
    while(n > 0) {
        let q = ~~(a/n), r = a-q*n, x = x2-q*x1, y = y2-q*y1;
        a = n; n = r; x2 = x1; x1 = x; y2 = y1; y1 = y;
    };
    if (d > 1) return "Không tồn tại";
    if (x2 < 0) return modul - Math.abs(x2);
    return x2;
};

(() => {
    console.log(moduloInverse1(4, 9));
    console.log(moduloInverse3(4, 9));
})();
