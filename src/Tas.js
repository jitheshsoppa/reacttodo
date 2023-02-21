import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Tas = ({task, onDelete ,onToggle}) => {
    //console.log(task)
  return (
    <div className="task" style={task.reminder ? {backgroundColor:'grey'} :{backgroundColor: 'pink'}} onDoubleClick={() =>onToggle(task.id)} >
        <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
        <p>{task.day}</p>

    </div>
  );
}

export default Tas;
