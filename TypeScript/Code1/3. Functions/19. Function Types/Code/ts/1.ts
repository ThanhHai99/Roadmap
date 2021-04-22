function userInfo1(name: string, age: number): string {
    return `My name is ${name}, ${age} years old.`;
};

let userInfo2 = function(name: string, age: number): string {
    return `My name is ${name}, ${age} years old.`;
};

let userInfo3: (name: string, age: number) => string = function(_name, _age) {
    return `My name is ${_name}, ${_age} years old.`;
};

console.log(userInfo1("hai", 21));
console.log(userInfo2("hai", 21));
console.log(userInfo3("hai", 21));
