import inquirer from "inquirer";
let taskList:task[]=[];
class task {
    task:string;
    createddate:Date
    constructor(_task:string)
    {
        this.task=_task;
        this.createddate=new Date();
    }
    getAllTask():task[]{
        return taskList;
    }
    addTask(task:task){
        taskList.push(task);
    }
}


let ToDos = async ()=>{
    let {taskValue,again} = await inquirer.prompt([{
        name:"taskValue",
        type:"input",
        message:"Please add task"    
    },
    {
        name:"again",
        type:'checkbox',
        message:"Do You Continue" ,
        choices:[
            "Yes","No"
        ],
        default:false,  
    },
]);

let userObj:task=new task(taskValue);
userObj.addTask(userObj);

    if(again == "Yes")
    {
        ToDos();
    }else
    { 
        console.log("===========TODO List=================");
        
        if(taskList.length>0){
            taskList.forEach((Obj)=>{
                console.log(Obj.task,Obj.createddate)
            });
        }else
        {
            console.log("No todos task found")
        }
       
    }
   
}

ToDos();