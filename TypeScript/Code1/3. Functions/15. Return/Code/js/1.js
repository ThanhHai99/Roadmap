function funcNoReturn() {
    console.log("funcNoReturn");
}
;
function funcReturnNumber() {
    return 2;
}
;
function funcReturnString() {
    return "thanh hai";
}
;
function funcReturnBoolean() {
    return true;
}
;
function funcReturnArrayString() {
    return ["thanh", "hai"];
}
;
function funcReturnArrayNumber() {
    return [11, 21];
}
;
function funcReturnAny() {
    return ["thanh", 2];
}
;
console.log(funcNoReturn());
console.log(funcReturnNumber());
console.log(funcReturnString());
console.log(funcReturnBoolean());
console.log(funcReturnArrayString());
console.log(funcReturnArrayNumber());
console.log(funcReturnAny());
