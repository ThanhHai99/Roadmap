class Task {
    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    ;
    showTaskInfo() {
        console.log(`${this.id} - ${this.name} - ${this.state}`);
    }
    ;
}
;
let task1 = new Task(21, "coding", "processing");
console.log(task1);
task1.showTaskInfo();
