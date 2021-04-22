;
;
class Machine {
    caculate(a, b) {
        return a + b;
    }
    ;
}
;
class Superman extends Machine {
    constructor(name) {
        super();
        this.name = name;
    }
    ;
    eat() {
        console.log("eat");
    }
    ;
    sleep() {
        console.log("sleep");
    }
    ;
    fly() {
        console.log("fly");
    }
    ;
}
let superman1 = new Superman("thanhhai");
superman1.eat();
superman1.sleep();
superman1.fly();
console.log(superman1.caculate(2, 3));
