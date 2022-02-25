import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../redux/actions';

class FormToDo extends Component {

  handleChange = ({ target: { value } }) => {
    const { saveTaskDispatch } = this.props;
    saveTaskDispatch(value);
  }

  render() {
    const { saveTask } = this.props
    const { toDo } = this.props;

    return (
      <form onSubmit={(e) => saveTask(e, toDo)} >
        <input
          type="text"
          name="toDo"
          onChange={this.handleChange}
          value={toDo}
        />
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveTaskDispatch: (task) => dispatch(actionCreators.saveTask(task))
})

const mapStateToProps = ({ toDo: { task } }) => ({
  toDo: task,
})

export default connect(mapStateToProps, mapDispatchToProps)(FormToDo);
