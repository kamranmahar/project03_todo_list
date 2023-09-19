import inquirer from "inquirer";
let taskList = [];
class task {
    task;
    createddate;
    constructor(_task) {
        this.task = _task;
        this.createddate = new Date();
    }
    getAllTask() {
        return taskList;
    }
    addTask(task) {
        taskList.push(task);
    }
}
let ToDos = async () => {
    let { taskValue, again } = await inquirer.prompt([{
            name: "taskValue",
            type: "input",
            message: "Please add task"
        },
        {
            name: "again",
            type: 'checkbox',
            message: "Do You Continue",
            choices: [
                "Yes", "No"
            ],
            default: false,
        },
    ]);
    let userObj = new task(taskValue);
    userObj.addTask(userObj);
    if (again == "Yes") {
        ToDos();
    }
    else {
        console.log("===========TODO List=================");
        if (taskList.length > 0) {
            taskList.forEach((Obj) => {
                console.log(Obj.task, Obj.createddate);
            });
        }
        else {
            console.log("No todos task found");
        }
    }
};
ToDos();
