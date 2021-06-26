// 1. Tính tổng mảng
// let sum = (a, n) => n === 1 ? a[0] : a[n-1] + sum(a, n - 1);
let sum = (a, n) => {
    console.log("n = " + n);
    if (n === 1) {
        console.log(`sum(a, ${n})`);
        console.log(`a[0]=${a[0]}`);
        console.log(`return a[0];`);
        console.log("=========================");
        return a[0];
    } else {
        console.log(`sum(a, ${n})`);
        console.log(`a[${n-1}]=${a[n-1]}`);
        console.log(`return a[${n-1}] + sum(a, ${n-1});`);
        console.log("=========================");
        return a[n-1] + sum(a, n - 1);
    };
};
// console.log(`sum([1, 4, 8], 3) = ${sum([1, 4, 8], 3)}`);

// 2. Tìm max
// let max2Number = (a, b) => a > b ? a : b;
// let maxArray = (a, n) => n === 1 ? a[0] : max2Number(a[n-1], maxArray(a, n-1));
// let max = (a, n) => (n === 1) ? a[n-1] : (a[n-1] > max(a, n-1)) ? a[n-1] : max(a, n-1);
let max = (a, n) => {
    console.log("n = " + n);
    if (n === 1) {
        console.log(`max(a, ${n})`);
        console.log(`a[${n-1}]=${a[n-1]}`);
        console.log(`return a[${n-1}]=${a[n-1]};`);
        console.log("=========================");
        return a[n-1];
    } else if (a[n-1] > max(a, n-1)){
        console.log(`max(a, ${n})`);
        console.log(`a[${n-1}]=${a[n-1]} > max(a, ${n-1})`);
        console.log(`return a[${n-1}]=${a[n-1]}`);
        console.log("=========================");
        return a[n-1];
    } else {
        console.log(`max(a, ${n})`);
        console.log(`a[${n-1}]=${a[n-1]} < max(a, ${n-1})`);
        console.log(`return max(a, ${n-1})`);
        console.log("=========================");
        return max(a, n-1);
    };
};
// console.log(`max([2, 1, 12], 3) = ${max([2, 1, 12], 3)}`);

// 3. Tìm min một mảng
// let min2Number = (a, b) => a < b ? a : b;
// let minArray = (a, n) => n === 1 ? a[0] : min2Number(a[n-1], minArray(a, n-1));
// let min = (a, n) => (n === 1) ? a[n-1] : (a[n-1] < min(a, n-1)) ? a[n-1] : min(a, n-1);
let min = (a, n) => {
    console.log("n = " + n);
    if (n === 1) {
        console.log(`min(a, ${n})`);
        console.log(`a[${n-1}]=${a[n-1]}`);
        console.log(`return a[${n-1}]=${a[n-1]};`);
        console.log("=========================");
        return a[n-1];
    } else if (a[n-1] < min(a, n-1)) {
        console.log(`min(a, ${n})`);
        console.log(`a[${n-1}]=${a[n-1]} < min(a, ${n-1})`);
        console.log(`return a[${n-1}]=${a[n-1]}`);
        console.log("=========================");
        return a[n-1];
    } else {
        console.log(`min(a, ${n})`);
        console.log(`a[${n-1}]=${a[n-1]} > min(a, ${n-1})`);
        console.log(`return min(a, ${n-1})`);
        console.log("=========================");
        return min(a, n-1);
    };
};
// console.log(`min([2, 1, 12], 3) = ${min([2, 1, 12], 3)}`);

// 4. Tính sqrt
let sqrt = () => {};

// 5. Tính pow
// let pow = (x, n) => (n === 1) ? x : x * pow(x, n - 1);
// console.log(`pow(2, 3) = ${pow(2, 3)}`);

// 6. Tìm ước chung lớn nhất
// 6.1. Không dùng đệ quy
// let gcd = (a, b) => {
//     while (a*b != 0) {
//         if (a > b) {
//             a %= b;
//         } else {
//             b %= a;
//         };
//     };
//     return a + b;
// };
// 6.2. Dùng đệ quy
// let gcd = (a, b) => a*b === 0 ? a+b : a>b ? gcd(a%b, b) : gcd(a, b%a);
let gcd = (a, b) => {
    console.log(`gcd(${a}, ${b})`);
    console.log(`a=${a}; b=${b}`);
    if (a*b === 0) {
        console.log(`a * b = 0`);
        console.log(`return ${a+b}`);
        console.log("=========================");
        return a+b;
    } else if (a>b) {
        console.log(`a > b`);
        console.log(`return gcd(${a%b}, ${b})`);
        console.log("=========================");
        return gcd(a%b, b);
    } else {
        console.log(`a < b`);
        console.log(`return gcd(${a}, ${b%a})`);
        console.log("=========================");
        return gcd(a, b%a);
    };
};
// console.log(`gcd(9, 15)=${gcd(9, 15)}`);

let log = (a, n) => {
    console.log(`a[${n-1}]=${a[n-1]}`);
    if (n > 1)
        log(a, n-1);
};
// log([2, 1, 12], 3);

let countDown = (n) => {
    console.log(n);
    if (n>0) countDown(n-1);
};

countDown(5);
