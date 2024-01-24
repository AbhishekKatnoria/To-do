import React, { useState } from "react";
import "./App1.css";
import TodoList from "./TodoList";
import TaskDone from "./TaskDone";

function Input() {
  const [task, SetValue] = useState("");
  const [message, Setmessage] = useState([]);

  const handleClick = (event) => {
    SetValue(event.target.value);
  };
  

  const handleBtn = () => {
    if (!task) {
    } else {
      Setmessage([...message, task]);
      SetValue("");
    }
  };

  const handlebtn2 = (id) => {
    const newitem = message.filter((items, idx) => {
      return idx !== id;
    });
    Setmessage(newitem);
  };
  return (
    
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={handleClick}
            name="input"
            value={task}
            className="todo-input"
          />
          <button className="btn-input" onClick={handleBtn}>
            +
          </button>

          <ol>
            {message.map((elem, ind) => {
              return (
                <TodoList
                  key={ind}
                  id={ind}
                  text={elem}
                  onSelect={handlebtn2}
                />
              );
            })}
          </ol>
        </div>
        <TaskDone/>
      </div>
   
  );
}

export default Input;
