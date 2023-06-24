const ToDo = ({ todo, toggleCompletion }) => {
    return (
      <div className={`card ${todo.done}`}>
        <div className="flexleft">
        <label htmlFor={`todo_${todo.id}`}></label>
        <input
          id={`todo_${todo.id}`}
          name={todo.title}
          type="checkbox"
          value={todo.title}
          checked={todo.done}
          onChange={() => toggleCompletion(todo.id)}
        /><h3 className="spaceleft">{todo.title}</h3>
        <button>X</button>
        
        </div>
      </div>
    );
  };
  export default ToDo;
  