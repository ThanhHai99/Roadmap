function functionA(x: string): number;
function functionA(x: number): string;
function functionA(x: boolean): boolean;
function functionA(x: any): any {
    if (typeof x == "string")
        return 100;
    else if (typeof x == "number")
        return "mot tram";
    else
        return true;
};

console.log(functionA("thanhhai"));
console.log(functionA(21));
console.log(functionA(false));
