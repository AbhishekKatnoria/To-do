import React from "react";
import "./App1.css";
import cut1 from "./img/delete.png";

function TodoList(props) {
  return (
    <>
      <div className="todo-style">
        <div className="box-style">
          <input type="checkbox" className="cheak-box" />
          <li>{props.text}</li>
        </div>
        <div className="img-style">
          <img
            src={cut1}
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default TodoList;
