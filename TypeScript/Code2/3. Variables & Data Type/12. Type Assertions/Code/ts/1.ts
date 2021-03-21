let mVariable12: any = "thanh hai";

let total12_1 = mVariable12.length;
console.log(total12_1);
console.log(typeof mVariable12);
console.log("======");

let total12_2 = (<string>mVariable12).length;
console.log(total12_2);
console.log(typeof mVariable12);
console.log("======");

let total12_3 = (mVariable12 as string).length;
console.log(total12_3);
console.log(typeof mVariable12);
console.log("======");
