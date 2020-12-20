import './App.css';
import React, {useState} from "react";
//import components
import Input from "./components/Input";
import Display from "./components/Display";

function App() {

  const [boxColors, setBoxColors] = useState([])

  return (
    <div className="App">
      <Input setBoxColors={setBoxColors} boxColors={boxColors} />
      <Display boxColors={boxColors} />      
    </div>
  );
}

export default App;
