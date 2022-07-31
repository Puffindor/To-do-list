import React from "react";
import TaskItem from "./TaskItem";
import { useState,useEffect } from "react";
import {CSSTransition,TransitionGroup,} from 'react-transition-group';

function TaskList ({Setgroups,groups,group,tasks,title,remove,done,edit2}) {



 

    
function edit3 (EditedTask,task) {
    edit2(EditedTask,task)
}

function taskDone (task) {
done (task)

}

function check (task) {
remove(task)
}



    return (
<div>
    <h1 className="Header" >{title}  {tasks.length}</h1>
    <hr style ={{width:"600px", marginBottom:"30px",marginLeft:"50px"}} />
  
  {tasks.length !==0 
    ? <span/> 
    : <span className="Empty" >No tasks</span>
  
  }
  
    <TransitionGroup>
        {tasks.map(task => 
        <CSSTransition
        key={task.id}
        timeout={500}
        classNames="item"
        >

        <TaskItem Setgroups ={Setgroups} groups ={groups} group={group} edit1 ={edit3} done = {taskDone} check = {check} task ={task} />
        
        </CSSTransition>
        )}
    </TransitionGroup> 




</div>
    )
    
}

export default TaskList