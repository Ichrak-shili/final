import {Add,Delete,FilterDone,FilterNotDone,Edit} from './ActionTypes';

export const addTask=(data)=>{
return {type:Add,
    payload:data
}
}
export const deleteTask=(id)=>{
    return  {type:Delete,
        payload:id
          }
}

export const editTask=(id,data)=>{
  return  {type:Edit,
        payload:{id ,data}
          }
}
export const filterDone=()=>{
    return {type:FilterDone}
}
export const filterNotDone=()=>{
    return {type:FilterNotDone}
}