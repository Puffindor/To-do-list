import React from "react";
import { useState } from "react";

function MyInput ({create}) {

  const [body,setBody] = useState ('')

  function Addnew () {

    const NewTask = {
       id: Math.random(),
       text: body,
       isDone: false,
       edit: false,
       SubTask:[],
     }
     create(NewTask)
     setBody('')
    }
    return (
      <div className="inputBar">
      <button className="inputButton" 
      onClick={Addnew}
      />
      <input 
        className="input" 
        placeholder=" Add new"
        value={body}
        onChange = {e => setBody(e.target.value)}
        
       />
      </div>
    )
  }

export default MyInput