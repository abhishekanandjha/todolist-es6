import React, { useState } from "react";

function ToDoItem(props) {
  const [cut, setcut] = useState(false);
  function strike() {
    setcut((prevCheck) => !prevCheck);
    console.log("clicked");
  }

  return (
    <li
      style={{ textDecoration: cut ? "line-through" : "none" }}
      onClick={strike}
    >
      {props.text}
    </li>
  );
}
export default ToDoItem;
