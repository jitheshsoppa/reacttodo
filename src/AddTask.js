import React,{ useState } from "react";

const AddTask = ({onAdd}) => {
    const [text,setText]=useState('');
    const [day,setDay]=useState('');
    const [reminder,setReminder] = useState(false);
    //console.log(text,day,reminder)
    const onsubmit = (e) => {
        // e.prevent.Default()
        if(!text){
            alert('please add text')
            return
        }
        console.log(text,day,reminder) 
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
        }
//    const onchange=(e)=>{
//                         setText(e.targte.value)
//                         console.log(text)
//                         }
  return (
    <div className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='AddTask' onChange={(e)=>setText(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' onChange={(e)=>setDay(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="save task" className='btn btn-block' onClick={onsubmit}/>
    </div>
  );
}

export default AddTask;
