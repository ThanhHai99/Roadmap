function totalLength(x: (string | Array<any>), y: (Array<string> | string)): number {
    return x.length + y.length;
};

console.log(totalLength('abc', ['123']));
console.log(totalLength([1, "abc", "def"], ["123", "def"]));
console.log(totalLength([1, "abc", "def"], "123"));
