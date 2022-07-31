import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import {CSSTransition,TransitionGroup,} from 'react-transition-group';
import IconDelete from "../icons/IconDelete";
import IconEdite from "../icons/IconEdit";


function GroupPlate ({editeG,deleteG,group,selected,id}) {
const [openDrop, setopenDrop] = useState("55px")
const [openPlate, setopenPlate] = useState("80px")
const [open, setopen] = useState(false)
const [ed, setEd] = useState(false)


function drop () {
    setopen(!open)
    if(openDrop === "55px") {
        setopenDrop("130px")
        setopenPlate("170px") 
    } else {
        setopenDrop("55px")
        setopenPlate("80px") 
    }
    
}

function deleteGroup () {
    deleteG (group)
}

function editeGroup () {
    setEd(!ed)
    group.edit = ed
    editeG (group)
}

    function select() {
        selected(group)
        }

      
       const abs = 12
    return (
<> 
{group.edit === true
? <div></div>
: <> {group.id === id 
    ? <section>
    <div>
        <div style={{height:openPlate}} className="TaskGroup_selected">
            <div onClick={drop} style={{height:openDrop}} className="ArrowContainer">
            <div className="iconContainer">
                
            <ArrowIcon/>
                </div>
            <CSSTransition
            
            in ={open}
            classNames="icoE"
            timeout={500}
            mountOnEnter
            unmountOnExit
            >
    <div onClick={editeGroup} className="iconContainer">
    
                    <IconEdite/>
    </div>
            </CSSTransition>
            <CSSTransition
            unmountOnExit
            in ={open}
            classNames="icoE"
            timeout={500}
            >
    <div onClick={deleteGroup} className="iconContainer">
    
                    <IconDelete/>
    </div>
            </CSSTransition>
            </div>
            <span onClick={select} className="TaskGroupString2">
                {group.title} 
                
            </span>
    
    
            
             <hr className="GroupHr"/>
            <div className="TaskGroupString">{group.taskComplited.length}/{group.taskComplited.length+group.task.length}</div>
            <ProgressBar/>
    
          
        </div>
    </div> 
    </section>
    
    
    
    : <section>
    <div >
        <div style={{height:openPlate}} className="TaskGroup">
            <div onClick={drop} style={{height:openDrop}} className="ArrowContainer">
                <div className="iconContainer">
            <ArrowIcon/>
                </div>
            <CSSTransition
            
            in ={open}
            classNames="icoE"
            timeout={500}
            mountOnEnter
            unmountOnExit
            >
                <div className="iconContainer">
                    <IconEdite/>
                </div>
            </CSSTransition>
            <CSSTransition
            unmountOnExit
            in ={open}
            classNames="icoE"
            timeout={500}
            >
                <div onClick={deleteGroup} className="iconContainer">
                    <IconDelete/>
                </div>
            </CSSTransition>
            </div>
            <span onClick={select} className="TaskGroupString2">
                {group.title}
            </span>
             <hr className="GroupHr"/>
            <div className="TaskGroupString">{group.taskComplited.length}/{group.taskComplited.length+group.task.length}</div>
            <ProgressBar/>
        </div>
    </div> 
    </section>
    }
    
    </>

}

</>
    )

} 

export default GroupPlate