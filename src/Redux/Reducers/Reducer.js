
import { Add, Delete, FilterDone, FilterNotDone, Edit } from '../Actions/ActionTypes';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = [{ id: uuidv4(), description: "Wake up at 7 am", isDone: false }]


export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Add:
       return state.push({ id: uuidv4(), description: action.payload, isDone: false })
    case Delete:
       return state.filter(item => item.id != action.payload);
    case FilterDone:
       return state.filter(item => item.isDone);
    case FilterNotDone:
       return state.filter(item => !item.isDone);
    case Edit:
       return state.map((item) => {
      if (item.id == action.payload.id) {
        item.isDone = action.payload.data.isDone;
        item.description = action.payload.data.description;
      }
    })
    default: return state;
  }

}