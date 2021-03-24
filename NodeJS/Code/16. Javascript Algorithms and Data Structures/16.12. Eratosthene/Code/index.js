let Eratosthene = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    };
    return true;
};

(()=> {
    console.log(Eratosthene(11));
    console.log(Eratosthene(22));
    console.log(Eratosthene(77));
    console.log(Eratosthene(37));
})();
