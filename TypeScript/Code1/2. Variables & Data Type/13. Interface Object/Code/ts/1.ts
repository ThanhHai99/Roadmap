let obj13_1: any = {};
console.log(obj13_1);
console.log("======");

interface ICourse {
    name: string,
    time: number,
    free?: boolean
};

let obj13_2: ICourse;
obj13_2 = {
    name: "ES6",
    time: 5
};
console.log(obj13_2);
console.log("======");

let obj13_3: ICourse = {
    name: "JS",
    time: 21,
    free: true
};
console.log(obj13_3);
console.log("======");
