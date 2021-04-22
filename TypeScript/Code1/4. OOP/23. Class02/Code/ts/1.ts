enum TaskState {
    CREATED = 100,
    ACTIVE,
    INACTIVE,
    PROCESS,
    FINISH
};

interface ITask {
    id: number;
    name: string;
    state?: TaskState;
};

class TaskService {
    tasks: ITask[];
    constructor(tasks: Array<ITask>) {
        this.tasks = tasks;
    };
    getAll() {
        return this.tasks;
    };
};

let task1 = {id: 1, name: "coding"};
let task2 = {id: 2, name: "do exercise"};
let tasks: Array<ITask> = [
    task1,
    task2,
    {id: 3, name: "swim", state: TaskState.FINISH}
];
let taskService1 = new TaskService(tasks);
console.log(taskService1.getAll());
