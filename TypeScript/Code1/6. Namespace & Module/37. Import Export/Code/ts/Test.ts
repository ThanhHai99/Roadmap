
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
