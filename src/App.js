import Header from "./components/Header";

import Tasks from "./components/Tasks"
import {useState} from 'react'
import { FaCommentsDollar } from "react-icons/fa";
import AddTask from './components/AddTask'
function App() {
  
  const [tasks,setTasks] = useState([
    {id:1,
    text:"First task",
    day:"Feb 5th at 2:30pm",
    reminder:"true"
},
{id:2,
    text:"Second task",
    day:"Feb 6th at 2:30pm",
    reminder:"true"
}
]);

const [addtask,setAddTask] = useState(false);

const deleteTask =(id)=>{
console.log("Delete the element with id: ",id);
setTasks(tasks.filter((task)=>{
  return task.id!==id
}));
}

const addTask=(task)=>{
  console.log(task);
  const id = (Math.random()*10000)+1;
  const updTask = {...task,id};
  setTasks([...tasks,updTask]);
}

const onToggle = (id)=>{
  //console.log("The id u have selected is", id);
  //setTasks(tasks.map((task)=> task.id===id?{...task,reminder:!task.reminder}:task))
  setTasks(tasks.map((task)=>{
    if(task.id===id){
      task.reminder = !task.reminder;
      return task;
    }
    return task;
  })
   
  )
}

const addToggle = ()=>{
 return setAddTask(!addtask);
}

  return (
    <div className="container">                    
      
      
      <Header title="Restaurant Orders" addToggle={addToggle} addtask={addtask}/>
     {addtask && <AddTask  onAdd={addTask}/>} 
     
     {tasks.length>0?<Tasks tasks = {tasks} onDelete = {deleteTask} onTogle={onToggle} /> : 'No Tasks Currently '} 
    </div>
  );
}

export default App;
