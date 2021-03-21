// 100: created, 101: process, 102: finish
var STATUS;
(function (STATUS) {
    STATUS[STATUS["CREATED"] = 100] = "CREATED";
    STATUS[STATUS["PROCESS"] = 101] = "PROCESS";
    STATUS[STATUS["FINISH"] = 102] = "FINISH";
})(STATUS || (STATUS = {}));
;
var todoCreatedStatus = STATUS.CREATED;
var todoProcessStatus = STATUS.PROCESS;
var todoFinishStatus = STATUS.FINISH;
console.log(todoCreatedStatus);
console.log(todoProcessStatus);
console.log(todoFinishStatus);
