import React ,{useState} from 'react';

export const Goal=()=>{
    const [goal,setGoal]=useState("");
    return <div>
         <h2>Fitness Goal</h2>
      <input type='text' placeholder='Enter the Fitneess Goal' onChange={(e)=>setGoal(e.target.value)}></input>
    </div>
}