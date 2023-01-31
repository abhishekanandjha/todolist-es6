import React, { useState } from "react";

//const list = ["jha", "this", "check"];
//console.log(list);

function App() {
  const [inputtext, setinputtext] = useState("");
  const [items, setitems] = useState([]);

  function handleChange(event) {
    const newvalue = event.target.value;
    setinputtext(newvalue);
  }

  function handleClick() {
    setitems((previtems) => {
      return [...previtems, inputtext];
    });
    setinputtext("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputtext} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
