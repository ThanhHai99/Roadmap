define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pritAbc = exports.Abc = void 0;
    class Abc {
        showInfo() {
            console.log("Abc.showInfo");
        }
        ;
    }
    exports.Abc = Abc;
    ;
    function pritAbc() {
        console.log("Abc.printAbc");
    }
    exports.pritAbc = pritAbc;
    ;
});
