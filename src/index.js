import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Task from './Task';
import {useState} from 'react';
import AddTask from './AddTask';
import './index.css'

function  App(){
  const [tasks,setTasks]=useState([
    {
    id:1,
    text:'aa',
    day: '5-02-22',
    reminder: false,
    },
    {
    id:2,
    text:'bb',
    day: '6-02-22',
    reminder: true,
    },
])
const [showAddTask,setShowAddTask] = useState(false);
//functions
const addTask =(task) => {
  //console.log(task)
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
}
const onClick =() => {
  setShowAddTask(!showAddTask);
}
const deleteTask =(id) =>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
const toggleRemainder = (id) => {   
      setTasks(tasks.map((task)=>(task.id==id ? {...task,reminder:!task.reminder}:task)))
    }
  return(
    <>
    <Header onClick={onClick}/>
    {showAddTask&&<AddTask onAdd={addTask} />}
    {tasks.length>0 ? <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>
    :
    <h4>no tasks to show</h4>}
    </>)
};

ReactDOM.render(<App /> ,document.getElementById('root'));