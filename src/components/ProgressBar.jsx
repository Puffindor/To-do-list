import React from "react";
import { useState } from "react";


function ProgressBar ({ar1,ar2}) {
// console.log(ar1,ar2)     
    // const [percent,SetPercent] = useState (0)
    // function set () {

    //     SetPercent(progress)
    // }
    
    const progress =100
    const circumference = 2*Math.PI*20
    let harray = `${circumference} ${circumference}`
    let offset = circumference
    const [off,setOff] = useState (circumference - progress/100*circumference)
    



    return (
        <svg className="ProgressBar" >
           <circle 
           stroke="#FF8B03"
            strokeWidth="4" 
            cx ="30" cy = "30" 
            r ="20" 
            fill="transparent"
            strokeDasharray={harray}
            strokeDashoffset ={off}
            
            />
        </svg>
    )

}
export default ProgressBar