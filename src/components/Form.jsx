import { useState } from "react";

const Form = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSumbmit = (event) => {
    event.preventDefault();
    if (!title) {
      alert("All fields are required!!!");
      return;
    }
    setTodos((prev) => [
      ...prev,
      { title, done: false, id: crypto.randomUUID() }
    ]);
    setTitle(""); /* Gibt den eingetragenen Wert wieder */
    setPriority(""); /* Gibt den eingetragenen Wert wieder */
  };

  return (
    <div className="block">
      <form onSubmit={handleSumbmit}>
        <fieldset>
          <legend>
            <h3>Add a To-do</h3>
          </legend>
          <div className="flex">
            <input
              className="add"
              name="title"
              type="text"
              placeholder="To Do"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          
          
          <button>Add</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
