import React from "react";
import TaskGroup from "./TaskGroup";
import { useState } from "react";
import GroupPlate from "./GrpupPlate";
import GroupInput from "./GroupInput";

import group from "group";
import GroupList_closed from "./GroupList_closed";
import IconList from "../icons/IconList";




function GroupList () {

    const [groups,setGroup] = useState ([
        {id:1, title: "Task group 1",edit:false, task: [
            { id: Math.random(),text:"Задчача 1",isDone: false,edit:false,SubTask: []
               
                },
            
          ], taskComplited: [
            { id: Math.random(),text:"Задчача 5",isDone: true,edit:false,SubTask:[]},
            { id: Math.random(),text:"Задчача 6",isDone: true,edit:false,SubTask:[]},]
        },
        
    ])

const [sel,setSel] = useState (1)      

function addNewtaskgroup (NewTaskGroup) {
    if (NewTaskGroup.title) {
        setGroup([...groups,NewTaskGroup])
    }}    

function selected (group) {
    setSel(group.id)
}    

function deleteG (group) {
setGroup(groups.filter(t => t.id !== group.id))
}

function editeG (group) {
  
}

return (
    <>
    
    
<div className="Wrapper"  >
    <section>
    <GroupInput add = {addNewtaskgroup}/>
        {groups.map (group => <GroupPlate editeG={editeG} deleteG ={deleteG} selected={selected} id = {sel} group={group} key = {group.id}/>)} 
        {/* <div className="GroupPlateInput_closed" >
            <span className="List_hover">
                <IconList/>
            </span>
        </div> */}
        {/* {groups.map (group => <GroupList_closed key = {group.id} />)} */}
    </section>
    <hr className="TaskGroupHr" />
        {groups.map (group => <TaskGroup groups={groups} tasksArray = {setGroup} id = {sel}  group={group} key = {group.id}/>)}    
       
</div>
    </>
)
}

export default GroupList