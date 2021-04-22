function showNumberInfo(x:number): number {
    return x;
};

function showStringInfo(x:number): number {
    return x;
};

// Generic
function showInfo<T>(x: T): T {
    return x;
};

console.log(showInfo<boolean>(true));   // true
console.log(showInfo<number>(21));      // 21
console.log(showInfo<string>("11"));    // 11
