import React, { useState } from 'react';
import ToDoContext from './context/ToDoContext';

export default function ToDo({children}) {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskToRemove) => {
    setTasks([...tasks.filter((task) => task !== taskToRemove)]);
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
  };

  return (
    <ToDoContext.Provider value={ contextValue }>
      ({ children })
    </ToDoContext.Provider>
  );
}
