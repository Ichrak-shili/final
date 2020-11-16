import {
  Add,
  Delete,
  FilterDone,
  FilterNotDone,
  Edit,
  setvisible,
} from "../Actions/ActionTypes";


const INITIAL_STATE = { todos: [], filter: [],visible:false };

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { todos, filter,visible } = state;
  switch (type) {
    case Add:
      console.log("reducer", payload);
      return {
        ...state,
        todos: [...todos, payload],
      };
    case Delete:
     
      return { ...state,
        todos : todos.filter ((item) => item.id !== payload)       

      }
    case FilterDone:
     
      return { ...state,
        filter : todos.filter ((item) =>item.isDone)       

      }
    case FilterNotDone:
     
      return { ...state,
        filter : todos.filter ((item) =>!item.isDone)       

      }

    case Edit:
     
      return {
        ...state,
        todos: todos.map((item) => {
          if (item.id === payload.id) return { ...item, isDone: payload.val };
          else return item;
        })
      }
      case setvisible: return{...state, visible:payload}

    default:
      return state;
  }
};
