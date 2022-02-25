import { actionTypes } from '../actions';

const INITIAL_STATE = {
  task: '',
  taskList: [],
  id: 0,
};

const toDoReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case actionTypes.SAVE_TASK:
     return { ...state, task: action.task }
   case actionTypes.UPDATE_TASK_LIST:
     return { ...state, taskList: action.payload }
   case actionTypes.UPDATE_ID:
     return { ...state, id: state.id + 1 }
   default:
    return state;
 }
}

export default toDoReducer;
