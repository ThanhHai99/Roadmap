// 100: created, 101: process, 102: finish
enum STATUS {CREATED = 100, PROCESS, FINISH};

let todoCreatedStatus: STATUS = STATUS.CREATED;
let todoProcessStatus: STATUS = STATUS.PROCESS;
let todoFinishStatus: STATUS = STATUS.FINISH;

console.log(todoCreatedStatus);
console.log(todoProcessStatus);
console.log(todoFinishStatus);
