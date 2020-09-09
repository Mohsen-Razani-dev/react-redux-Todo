import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./Types";

const initialState = {
  data: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(state)
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.payload.id,
            title: action.payload.title,
            descr:action.payload.descr,
            complete: false
          }
        ]
      };
    case TOGGLE_TODO:
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.map(i => {
          if (i.id === id) {
            return {
              id: i.id,
              title: i.title,
              descr:i.descr,
              complete: !i.complete
            };
          } else {
            return i;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};
export default reducer;
