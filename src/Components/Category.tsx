import React ,{useState}from "react";
import { Repititions } from "./Repititions";
const Category =()=>{
      const [value,setValue]=useState(""); 
      var validation ="Minutes/Repititions";
      validation=value==="Strength training"?"Repititions":"Minutes";
    return <div>
        <h2>Category</h2>
      <select value={value} onChange={(e)=>setValue(e.target.value)}>
        <option> Strength training</option>
        <option>Cardio</option>
      </select>
      <Repititions category={validation}  />
    </div>
}
export default Category;