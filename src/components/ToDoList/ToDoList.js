
  
import React, {useState, useEffect} from "react";
import  TodoItem from "./TodoItem";
import tasksSevise from "../../sevices/tasks.sevise";

export default function ToDoList ({token}) {
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        if (!token) return;
        tasksSevise.fetcTasks(token).then((newTasks)=>{
            setTasks(newTasks)
            console.log(newTasks);
        });
    }, [token])

    return(
        <div>
            {!token ? <h2>no token</h2> : <h2>token</h2>}
                <div className="row">
                    {
                        tasks.map(function(task){
                            return <TodoItem task = {task} key={task.id}  />
                        })
                    }
                </div>
           </div>
    )
}