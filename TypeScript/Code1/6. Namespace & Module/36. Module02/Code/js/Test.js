define(["require", "exports", "./ZipCodeValidator", "./LettersOnlyValidator"], function (require, exports, ZipCodeValidator_1, LettersOnlyValidator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Some samples to try
    let strings = ["Hello", "98052", "101"];
    // Validators to use
    let validators = {};
    validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
    validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
    // Show whether each string passed each validator
    for (let s of strings) {
        for (let name in validators) {
            console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
        }
        ;
    }
    ;
});
