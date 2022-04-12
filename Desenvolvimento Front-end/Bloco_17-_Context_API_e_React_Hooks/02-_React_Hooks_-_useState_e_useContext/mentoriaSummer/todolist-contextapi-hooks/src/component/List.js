import { useContext } from 'react';
import ToDoContext from '../context/ToDoContext';

export default function List() {
  const { task, removeTask } = useContext( ToDoContext )
  console.log(task)
  return (
    <div>
      {
        task.map( ( task ) => ( <p onClick={ () => removeTask( task ) }
        >
          { task }
        </p> ))
      }
    </div>
  )
}
