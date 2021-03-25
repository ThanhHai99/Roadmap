function showNumberInfo(x:number): number {
    return x;
}

function showStringInfo(x:number): number {
    return x;
}

function showInfo<T>(x: T): T {
    return x;
}

console.log(showInfo<boolean>(true));
console.log(showInfo<number>(21));
console.log(showInfo<string>("11"));
