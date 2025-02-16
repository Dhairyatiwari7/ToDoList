import React from "react";
import {useState} from "react";

function App() {
  const [inputText, setInputText]=useState("");
  const[items ,setItems]=useState([]);
  function handleChange(event){
    const newValue=event.target.value;
    setInputText(newValue);
  }
  function handleClick(event){
    setItems((prevValue)=>{
      return [...prevValue,inputText];
    })
    setInputText("");
  }
  function deleteItem(index){
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
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
      <div >
        <ul >
          {items.map((item, index) => (
            <li key={index} onClick={() => deleteItem(index)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
