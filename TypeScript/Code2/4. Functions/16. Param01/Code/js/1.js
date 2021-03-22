//Đầy đủ tham số
function userInfo1(name, age) {
    return `My name is ${name}, ${age} years old.`;
}
;
//Giá trị mặc định cho tham số
function userInfo2(name = "hai", age = 22) {
    return `My name is ${name}, ${age} years old.`;
}
;
//Tham số khuyết
function userInfo3(name = "hai", age) {
    if (age == null) {
        return `My name is ${name}`;
    }
    return `My name is ${name}, ${age} years old.`;
}
;
console.log(userInfo1("hai", 21));
console.log(userInfo2());
console.log(userInfo3());
