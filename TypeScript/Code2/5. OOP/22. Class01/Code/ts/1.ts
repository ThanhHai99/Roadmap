class Task01 {
    id: number;
    name: string;
    state: string;
    
    constructor(id: number, name: string, state: string) {
        this.id = id;
        this.name = name;
        this.state = state;
    };

    showTaskInfo() {
        console.log(`${this.id} - ${this.name} - ${this.state}`);
    };
};

let task1 = new Task01(21, "coding", "processing");
console.log(task1);
task1.showTaskInfo();
