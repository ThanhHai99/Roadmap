let sum = (a, n) => n === 1 ? a[n-1] : a[n-1] + sum(a, n-1);
let pow = (a, n) => n === 1 ? a : a * pow(a, n-1);
let max = (a, n) => n === 1 ? a[n-1] : a[n-1] > max(a, n-1) ? a[n-1] : max(a, n-1);
let min = (a, n) => n === 1 ? a[n-1] : a[n-1] < min(a, n-1) ? a[n-1] : min(a, n-1);
let gcd = (a, b) => a*b === 0 ? a+b : a>b ? gcd(a%b, b) : gcd(a, b%a);

let a = [2, 1, 12];
// console.log(sum(a, a.length));
// console.log(pow(2, 3));
// console.log(max(a, a.length));
// console.log(min(a, a.length));
console.log(gcd(9, 15))

