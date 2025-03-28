import React , {useState} from 'react';

type Text={
  category:string;
}

export const Repititions=(props:Text)=>{
  const[repititions,setRepititions]=useState("");
  
    return <div>
        <h2>Repititions</h2>
      <input type='text' placeholder={`Enter the ${props.category}`} onChange={(e)=>setRepititions(e.target.value)}></input>
    </div>
}