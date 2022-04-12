import React, { useContext, useState } from 'react';
import ToDoContext from '../context/ToDoContext';

export default function Form() {
  const [ input, setInput ] = useState( '' );
  const { addTask } = useContext(ToDoContext);
  
  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        onChange={ ( { target: { value } } ) => setInput( value ) }
        value={ input } />
      <button
        onClick={()=> addTask(input)}
      >
        Adicionar
      </button>
    </div>
  )
}
