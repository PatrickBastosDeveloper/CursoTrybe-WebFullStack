import './App.css';
import ToDo from './ToDo';
import Form from './component/Form';
import List from './component/List';

function App() {
  return (
    <div className="App">
      <ToDo >
        <Form />
        <List />
      </ToDo >
    </div>
  );
}

export default App;
