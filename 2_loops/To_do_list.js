let todo = [];

let req = prompt("please enter your request");
console.log(req);

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("-----------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");
    }else if(req=="add"){
        let newTask = prompt("please enter new task");
        todo.push(newTask);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx = prompt("please enter index to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
    }

    req = prompt("please enter your request");

}