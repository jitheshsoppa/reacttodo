import Tas from "./Tas";
const Task = ({tasks , onDelete, onToggle}) => {
    
  return (
    <>
      {tasks.map((e)=>
      (<Tas key={e.id} task={e} onDelete={onDelete} onToggle={onToggle}/>)
      )}
    </>
  );
}

export default Task;
