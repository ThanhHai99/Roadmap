function functionA(x) {
    if (typeof x == "string")
        return 100;
    else if (typeof x == "number")
        return "mot tram";
    else
        return true;
}
;
console.log(functionA("thanhhai"));
console.log(functionA(21));
console.log(functionA(false));
