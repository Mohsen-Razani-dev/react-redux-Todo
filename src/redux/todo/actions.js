import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./Types";
let initId = 0;
export const addTodo = (title,descr) => {
  return {
    type: ADD_TODO,
    payload: {
      id: initId++,
      title: title,
      descr:descr
    }
  };
};
export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
};
