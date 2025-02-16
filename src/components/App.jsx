import React from "react";
import {useState} from "react";

function App() {
  const [inputText, setInputText]=useState("");
  const[items ,addItems]=useState([]);
  function handleChange(event){
    const newValue=event.target.value;
    setInputText(newValue);
  }
  function handleClick(event){
    addItems((prevValue)=>{
      return [...prevValue,inputText];
    })
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
