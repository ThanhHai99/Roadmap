define(["require", "exports", "./MModule", "./MModule"], function (require, exports, MModule, MModule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
