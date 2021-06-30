// 1. Tìm max trong mảng
let findMaxOfArray = (a, n) => {
    if (n === 1)
        return a[n-1];
    else if (a[n-1] > findMaxOfArray(a, n-1))
        return a[n-1];
    else
        return findMaxOfArray(a, n-1);
};
console.log(findMaxOfArray([4, 11, 8, 2], 4));
