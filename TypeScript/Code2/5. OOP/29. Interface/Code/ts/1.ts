interface People {
    name: string;
    eat(): void;
    sleep(): void;
};

interface Bird {
    fly(): void;
};

class Machine {
    caculate(a: number, b: number): number {
        return a + b;
    };
};

class Superman extends Machine implements People, Bird {
    name: string;
    
    constructor(name: string) {
        super();
        this.name = name;
    };
    
    eat(): void {
        console.log("eat");
    };

    sleep(): void {
        console.log("sleep");
    };

    fly(): void {
        console.log("fly");
    };
}

let superman1: Superman = new Superman("thanhhai");
superman1.eat();
superman1.sleep();
superman1.fly();
console.log(superman1.caculate(2, 3));
