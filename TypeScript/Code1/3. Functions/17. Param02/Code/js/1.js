function totalLength(x, y) {
    return x.length + y.length;
}
;
console.log(totalLength('abc', ['123']));
console.log(totalLength([1, "abc", "def"], ["123", "def"]));
console.log(totalLength([1, "abc", "def"], "123"));
