import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      if (editIndex !== -1) {
        // Editing an existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex].text = newTask;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Adding a new task
        setTasks([...tasks, { text: newTask, done: false }]);
      }
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setNewTask(tasks[index].text);
    setEditIndex(index);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      
      <form onSubmit={addTask}>
        <fieldset>
            <legend><h2>Todo List</h2></legend>
            <div className='inputflex'>
        <input type="text" value={newTask} onChange={handleInputChange} className='add' placeholder='Add your task here ...'/>
        <button type="submit">{editIndex !== -1 ? 'Save' : 'Add Task'}</button>
        </div>
        </fieldset>
      </form>
      <ul>
        
        {tasks.map((task, index) => (
            
          <li key={index} className={task.done ? 'taskdone' : 'task'}>
           <div className='left'>
            <input
              className='check'
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTaskStatus(index)}
            />
            

            {editIndex === index ? (
              <input
              className='inputnonvis'
                type="text"
                value={newTask}
                onChange={handleInputChange}
              />
            ) : (
              <p className={task.done ? 'completed' : ''}>{task.text}</p>
            )}
            </div>
            <div className='right'>
            {editIndex === index ? (
              <button onClick={() => addTask(e)}>Edit</button>
            ) : (
              <button onClick={() => editTask(index)}>Edit</button>
            )}
            <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;