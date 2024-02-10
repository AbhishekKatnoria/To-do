import React, { useState } from "react";
import "./Input.css";
import cut1 from "./img/delete.png";

function Input() {
  const [task, SetValue] = useState("");
  const [message, Setmessage] = useState([]);
  const [complete, setComlete] = useState([]);
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
  const handleBox = (id) => {
    const completeTask = message[id];
    const update = message.filter((elem, ind) => {
      return id !== ind;
    });
    Setmessage(update);
    setComlete([...complete, completeTask]);
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
        <ol className="list-contianer-first">
          {message.map((elem, ind) => {
            return (
              <div className="todo-style" key={ind}>
                <div className="box-style">
                  <input
                    type="checkbox"
                    className="cheak-box"
                    onChange={() => {
                      handleBox(ind);
                    }}
                  />
                  <li className="task-list-first" l>
                    {elem}
                  </li>
                </div>
                <div className="img-style">
                  <img
                    alt="#"
                    src={cut1}
                    onClick={() => {
                      handlebtn2(ind);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </ol>
      </div>
      <div className="com-center-div">
        <br />
        <h1 className="list-com">Completed Task</h1>
        <ol className="list-container-sec">
          <br />
          {complete.map((elemt, indt) => {
            return <li className="task-list-sec">{elemt}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default Input;
