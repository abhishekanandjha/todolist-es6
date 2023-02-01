import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

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

  function deleteItem(id) {
    setitems((previtems) => {
      return previtems.filter((items, index) => {
        return index !== id;
      });
    });
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
          {items.map((todoitem, index) => (
            <ToDoItem
              key={index}
              id={index}
              onChecked={deleteItem}
              text={todoitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
