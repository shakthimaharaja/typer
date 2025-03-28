import React, { useState } from "react";
import "./App.css";
import Category from "./Components/Category";
import { FormHandler as TrackButton } from "./Components/FormHandler";
import { Goal } from "./Components/Goal";
import { MutableRef } from "./Components/Timer";
function App() {
  const [goal, setGoal] = useState("");

  return (
    <div className="App">
      <Goal />
      <Category />
      <TrackButton />
      <MutableRef />
    </div>
  );
}

export default App;
