import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './redux/actions';
import FormToDo from './components/FormToDo';
import './App.css';

class App extends React.Component {

  saveTask = (e, task) => {
    e.preventDefault();
    const { dispatch, taskList, id } = this.props;

    const taskObj = {
      id: `${id}-${task}`,
      task,
      done: false,
    };

    dispatch(actionCreators.updateTaskList([ ...taskList, taskObj ]));
    dispatch(actionCreators.updateId());
  }

  removeTask = (taskId) => {
    const { taskList, dispatch } = this.props;

    dispatch(actionCreators
      .updateTaskList(taskList.filter(({ id }) => id !== taskId)));
  }

  editTask = (taskId) => {
    const { taskList, dispatch } = this.props;

    const newTask = taskList.map(({ id, done, task }) => {
      if (id === taskId) {
        return { id, done: !done, task };
      }
      return { id, done, task };
    });

    dispatch(actionCreators.updateTaskList(newTask));
  }

  render() {
    const { taskList } = this.props;

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

const mapStateToProps = ({ toDo: { taskList, id } }) => ({
  taskList,
  id,
})

export default connect(mapStateToProps)(App);
