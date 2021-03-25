import { StringValidator } from "./Validation";
import { ZipCodeValidator } from "./ZipCodeValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";

//C1
import * as MModule from "./MModule";
//C2
import { Abc as MAbc, pritAbc as pr } from "./MModule";

//C1
let obj1 = new MModule.Abc();
obj1.showInfo();
console.log("1234");
MModule.pritAbc();

//C2
let obj = new MAbc();
obj.showInfo();
console.log("1234");
pr();



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
