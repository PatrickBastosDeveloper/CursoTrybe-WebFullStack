import React from 'react';
import FormToDo from './components/FormToDo';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      taskList: [],
      id: 0,
    };

    this.saveTask = this.saveTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  saveTask(e, task) {
    e.preventDefault();
    const { id } = this.state;

    const taskObj = {
      id: `${id}-${task}`,
      task,
      done: false,
    };

    this.setState(
      prevState => ({
        taskList: [...prevState.taskList, taskObj],
      }),
      () => {
        this.setState(prevState => ({
          id: prevState.id + 1,
        }));
      },
    );
  }

  removeTask(taskId) {
    const { taskList } = this.state;

    this.setState({
      taskList: taskList.filter(({ id }) => id !== taskId),
    });
  }

  editTask(taskId) {
    const { taskList } = this.state;
    const newTask = taskList.map(({ id, done, task }) => {
      if (id === taskId) {
        return { id, done: !done, task };
      }
      return { id, done, task };
    });

    this.setState({ taskList: newTask });
  }

  render() {
    const { taskList } = this.state;

    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <FormToDo saveTask={this.saveTask} />

        <section>
          {taskList.map(({ task, id, done }) => (
            <div className="container-task" key={id}>
              <p
                className={done ? "done" : ""}
                onClick={() => this.editTask(id)}>
                {task}
              </p>
              <button type="button" onClick={() => this.removeTask(id)}>
                X
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
