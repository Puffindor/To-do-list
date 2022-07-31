import React  from "react";
import { useState } from "react";
import IconDelete from "../icons/IconDelete";
import IconDone from "../icons/IconDone";

function SubTask ({done2,SubTask,deleteSub}) {
    const [task, setTask] = useState(SubTask)
    const [comlited, setComlited] = useState(false)
    
function subTaskdelete () {
    deleteSub(SubTask)
    done2(SubTask)
}

    function done () {
        setComlited(!comlited)
         task.isDone = !task.isDone
       

           done2()
       
    }
    
    return (
<>

        {task.isDone
            ? <div className="subTask_comlited">
                <div onClick={done} className="SubCheckBox_complited">
                    <IconDone/>
                </div>
                <span className="subTaskContent">
                    {task.text}
                </span>
                <div onClick={subTaskdelete}>
                    <IconDelete/>
                </div>
              </div>

            : <div className="subTask">
                    <div onClick={done} className="SubCheckBox">
                </div>
                <span  className="subTaskContent">
                    {task.text}
                </span>
              </div>
        }
</>
        
    )
}

export default SubTask