import { useState } from "react";
import "./App.css";
import Addtask from "./components/Addtask";
import Editbutton from "./components/Editbutton";
import Deletebutton from "./components/Deletebutton";
import Donebutton from "./components/Donebutton";
import Todolist from "./components/Todolist";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div>
            <h2>to-do-list</h2>
          </div>
          <div className="addatask">
            <Addtask />
          </div>
          <div className="todo">
            <Todolist />
          </div>
          <div className="buttons">
            <Editbutton />
            <Donebutton />
            <Deletebutton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
