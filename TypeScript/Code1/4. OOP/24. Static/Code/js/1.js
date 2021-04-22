var TaskState;
(function (TaskState) {
    TaskState[TaskState["CREATED"] = 100] = "CREATED";
    TaskState[TaskState["ACTIVE"] = 101] = "ACTIVE";
    TaskState[TaskState["INACTIVE"] = 102] = "INACTIVE";
    TaskState[TaskState["PROCESS"] = 103] = "PROCESS";
    TaskState[TaskState["FINISH"] = 104] = "FINISH";
})(TaskState || (TaskState = {}));
;
;
class TaskService {
    constructor(tasks) {
        TaskService.tasks = tasks;
    }
    ;
    getAll() {
        return TaskService.tasks;
    }
    ;
    static showItemsInfo() {
        for (let task of TaskService.tasks) {
            console.log(`${TaskService.username} - ${task.name}`);
        }
        ;
    }
    ;
}
TaskService.username = "thanh hai";
;
let task1 = { id: 1, name: "coding" };
let task2 = { id: 2, name: "do exercise" };
// Init --------------------------------------------------------------------
let tasks = [
    task1,
    task2,
    { id: 3, name: "swim", state: TaskState.FINISH }
];
let taskService1 = new TaskService(tasks);
console.log(taskService1.getAll());
console.log(TaskService.username);
console.log(TaskService.showItemsInfo());
