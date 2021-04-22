//Đầy đủ tham số
function userInfo1(name: string, age: number):string {
    return `My name is ${name}, ${age} years old.`;
};

//Giá trị mặc định cho tham số
function userInfo2(name: string = "hai", age: number = 22) {
    return `My name is ${name}, ${age} years old.`;
};

//Tham số khuyết
function userInfo3(name: string = "hai", age?: number) {
    if (age == null) {
        return `My name is ${name}`;
    }
    return `My name is ${name}, ${age} years old.`;
};

console.log(userInfo1("hai", 21));
console.log(userInfo2());
console.log(userInfo3());
