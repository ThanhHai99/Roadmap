
let passByValue = (a) => {
    a = 10
};

let a = 5;
passByValue(a);
console.log(a); // 5

