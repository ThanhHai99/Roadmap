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
    public static username: string = "thanh hai";
    public static tasks: ITask[];
    constructor(tasks: Array<ITask>) {
        TaskService.tasks = tasks;
    };
    getAll() {
        return TaskService.tasks;
    };
    static showItemsInfo(): void {
        for(let task of TaskService.tasks) {
            console.log(`${TaskService.username} - ${task.name}`);
        };
    };    
};
let task1 = {id: 1, name: "coding"};
let task2 = {id: 2, name: "do exercise"};
// Init --------------------------------------------------------------------
let tasks: Array<ITask> = [
    task1,
    task2,
    {id: 3, name: "swim", state: TaskState.FINISH}
];

let taskService1 = new TaskService(tasks);
console.log(taskService1.getAll());
console.log(TaskService.username);
console.log(TaskService.showItemsInfo());
