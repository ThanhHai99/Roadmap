let fn = (n) => {
    if (n === 1 || n === 2)
        return 1;
    else
        return fn(n-1) + fn(n-1);
};

for (let i = 1; i <= 10; i++) {
    console.log(`fn(${i})= ${fn(i)}`);
};
