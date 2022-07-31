import React from "react";
import { useState,useEffect } from "react";
import TaskList from "./TaskList";
import MyInput from "./MyInput";
import ProgressBar from "./ProgressBar";



function TaskGroup ({groups,tasksArray,group,selected,id,gr}) {

     
  
  
  
  const [tasks,setTasks] = useState (group.task)
  // console.log(group)
  const [tasksDone,setTasksDone] = useState (group.taskComplited)
  

  
  
  

      function TaskEdit (editInput,task) {
  
        
        let newState =  tasks.map(el => {
          if (el.id === task.id) {
            return({...el,text:editInput,edit:false})
          } else {return (el)}
        } )
        setTasks(newState)
       }
         
         function createTask (NewTask) {
       if (NewTask.text) {
        let newState = groups.map(el => {
          if(el.id === group.id) {
            return({...el,task:[...tasks,NewTask]})
          } else {return (el)}
        })
        setTasks([...tasks,NewTask])
        tasksArray(newState)
       }
      }
       
       function taskRemove (task) {
           if (task.isDone === false) {

            let newState = groups.map(el => {
              if (el.id === group.id) {
                return({...el,task:[...tasks].filter( t => t.id !== task.id)})
              } else {return(el)}
            })
            tasksArray(newState)
            setTasks(tasks.filter(t => t.id !== task.id))
           }  
           if (task.isDone === true) {

            let newState = groups.map(el => {
              if (el.id === group.id) {
                return({...el,taskComplited:[...tasksDone].filter( t => t.id !== task.id)})
              } else {return(el)}
            })
            tasksArray(newState)
             setTasksDone(tasksDone.filter(t => t.id !== task.id))
           }}
       
       function taskDone (task) {
        
        let newState = groups.map(el => {
          if (el.id === group.id) {
            return({...el,task:[...tasks].filter( t => t.id !== task.id),taskComplited:[...tasksDone,task]})
          } else {return(el)}
        })
     
        tasksArray(newState)
        setTasks(tasks.filter(t => t.id !== task.id))
        setTasksDone ([...tasksDone,task])
         
        
        
         }


         const title1 = "Tasks -"
         const title2 = "Complited -"

         return (
    <div>



<section className="a">
    {group.id === id &&
     <div>
      <h1 style={{color:"white"}}>{group.title}</h1>
     
        <MyInput create = {createTask}/>
        <TaskList Setgroups ={tasksArray} groups ={groups} group={group} edit2={TaskEdit} done={taskDone} remove = {taskRemove} tasks={tasks} title = {title1} />
        <TaskList Setgroups ={tasksArray} groups ={groups} group={group} remove = {taskRemove} tasks={tasksDone} title = {title2} />
     </div>
    
    }
</section>

</div>
    
)


}

export default TaskGroup