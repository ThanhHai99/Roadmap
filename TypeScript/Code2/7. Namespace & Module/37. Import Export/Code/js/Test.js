"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//C1
const MModule = require("./MModule");
//C2
const MModule_1 = require("./MModule");
//C1
let obj1 = new MModule.Abc();
obj1.showInfo();
console.log("1234");
MModule.pritAbc();
//C2
let obj = new MModule_1.Abc();
obj.showInfo();
console.log("1234");
MModule_1.pritAbc();
// // Some samples to try
// let strings = ["Hello", "98052", "101"];
// // Validators to use
// let validators: { [s: string]: StringValidator } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();
// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// }
