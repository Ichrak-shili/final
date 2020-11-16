import { Add, Delete, FilterDone, FilterNotDone, Edit, setvisible } from './ActionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addTask = (data) => {

    console.log("action data",data)
    return {
        type: Add,
        payload: { id: uuidv4(), desription: data, isDone: false }
    }
}
export const deleteTask = (id) => {
    return {
        type: Delete,
        payload: id
    }
}

export const editTask= (id,val) => {
    return {
        type: Edit,
        payload: {id,val}
    
    }
}
export const filterDone = () => {
    return { type: FilterDone }
}
export const filterNotDone = () => {
    return { type: FilterNotDone }
}
export const setVisible=(val)=>{
    return {type:setvisible,
           payload:val
    };
}