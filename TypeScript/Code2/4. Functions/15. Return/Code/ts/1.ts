function funcNoReturn(): void {
    console.log("funcNoReturn");
};

function funcReturnNumber(): number {
    return 2;
};

function funcReturnString(): string {
    return "thanh hai";
};

function funcReturnBoolean(): boolean {
    return true;
};

function funcReturnArrayString(): Array<string> {
    return ["thanh", "hai"];
};

function funcReturnArrayNumber(): Array<number> {
    return [11, 21];
};

function funcReturnAny(): any {
    return ["thanh", 2];
};

console.log(funcNoReturn());
console.log(funcReturnNumber());
console.log(funcReturnString());
console.log(funcReturnBoolean());
console.log(funcReturnArrayString());
console.log(funcReturnArrayNumber());
console.log(funcReturnAny());
