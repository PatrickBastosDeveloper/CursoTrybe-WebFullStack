// ACTION TYPES
const SAVE_TASK = "SAVE_TASK";
const UPDATE_TASK_LIST = "UPDATE_TASK_LIST";
const UPDATE_ID = "UPDATE_ID";

export const actionTypes = {
  SAVE_TASK,
  UPDATE_TASK_LIST,
  UPDATE_ID,
}

// ACTIONS CREATORS
// { type: ? }

const saveTask = (task) => ({
  type: SAVE_TASK,
  task,
})

const updateTaskList = (payload) => ({
  type: UPDATE_TASK_LIST,
  payload,
})

const updateId = () => ({
  type: UPDATE_ID,
})

export const actionCreators = {
  saveTask,
  updateTaskList,
  updateId,
}
