import { useState,useEffect } from "react";
import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import IconDelete from "../icons/IconDelete";
import Icon from "../icons/IconDelete";
import IconDone from "../icons/IconDone";
import IconEdite from "../icons/IconEdit";
import PlusIcon from "../icons/PlusIcon";
import CustomInput from "./CustomInput";
import SubTask from "./SubTask";


function TaskItem ({Setgroups,groups,group,task,check,done,edit1}) {



const  [subTasks,SetsubTasks] = useState ([])   
const  [subTasksDone,SetsubTasksDone] = useState ([]) 

const  [subTaskInput,SetsubTaskInput] = useState ('')  
const  [edit,Setedit] = useState ('')
const [openM, setOpenM] = useState("menu")
const [openI, setOpenI] = useState("icons")
const [openInp, setOpenInp] = useState(false)



function done1 (SubTask) {
    SetsubTasksDone (subTasks.filter(el => el.isDone === true))

if (SubTask) {
    SetsubTasksDone (subTasksDone.filter(el => el.id !== SubTask.id))
}

}

function AddsubTask () {
 
  
    if (subTaskInput) {
        const NewsubTask ={
            id: Math.random(),
            text:subTaskInput,
            isDone:false
        }
        
        SetsubTasks([...subTasks,NewsubTask])
         SetsubTaskInput('')
    }
}

function deleteSubTask (SubTask) {
    
    SetsubTasks(subTasks.filter( el => el.id !== SubTask.id ))
    done1()
   
}

function opI () {
    setOpenInp(!openInp)
}

function op () {
    setOpenM("menu_active")
    setOpenI("icons_active")
}

function edit4 (EditedTask,task) {
    edit1(EditedTask,task)
}

function taskEditstate () {
   if(task.edit === false) {
     Setedit(task.edit = true)

   } else {
    Setedit(task.edit = false)
   }
  }
    


    function taskDone () {
       
        if(task.isDone === false) {
        task.isDone = true
        done(task)
        }
        }

    function deleteTask () {
       
        check(task)
    }
    
    let cl3 = 'taskContent'
    let cl2 = 0
    let cl1  ='checkbox'
    if  (task.isDone === true ) {
        cl1 = 'checkboxDone'
        cl2 = 1
        cl3 ='taskContentDone'
    
    }
    return (
        
    <div className="b">

<section className="task">

{task.edit === true 

?  <CustomInput edit ={edit4} task={task} />

:   <div style={{display:"flex",alignItems:"center",marginTop:"10px"}}>
        <div className="CheckboxContainer">
            <div onClick={taskDone} className={cl1}>
            <IconDone opacity = {cl2} />
            </div>
        </div>
       



        <div className={cl3}>
        
             <span className="textConstainer">
                 {task.text}
             </span>
        </div>
          
        
        
        {task.isDone === false 
        ?   <div  className={openM}>
        <div   onClick={op}>
            <ArrowIcon/>
        </div>
{openI === "icons_active" && <>
        <div onClick={deleteTask} >
            <IconDelete/>
        </div>

        <div onClick={taskEditstate} >
            <IconEdite/>
        </div>
        <div onClick={opI} >
            <PlusIcon/>
        </div>
                    </>}
                    

    </div>
        : <div onClick={deleteTask}>
             <IconDelete/>
        </div>}

        
      
    </div>

}


      

{openInp &&  <section className="subTaskInputContainer">
            <input
            className="subTaskInput"
            placeholder="Add new subtask"
            value={subTaskInput}
            onChange ={e => SetsubTaskInput(e.target.value)}
            />
            <div onClick={AddsubTask} style={{color:"#FF8B03"}}>
             <IconDone/>
            </div>
       </section>}
    </section>
{subTasks.length > 0 && 
            <div className="subTaskPlalte">
                <span className="subTaskPlalteText">
                    {subTasksDone.length}/{subTasks.length} Done
                </span>
            </div>}
     {subTasks.map (task =><SubTask done2={done1} deleteSub = {deleteSubTask} SubTask = {task} key ={task.id}/>)}
    
    </div>     

)}

export default TaskItem