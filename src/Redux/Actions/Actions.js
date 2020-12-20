import {Add,Remove,setUser,setLogged,filterBySize,filterByOrder} from "./ActionTypes";

export const add=(product)=>{
    return{
        type:Add,
        payload:product
    }
}
export const remove=(product)=>{
return {
    type:Remove,
    payload:product}

}
export const setuser=(User)=>{
    return{
        type:setUser,
        payload:User
    }
}
export const setLog=()=>{
    return {
        type:setLogged
    }
}
export const filterSize=(size)=>{
  return {
      type:filterBySize,
      payload:size
  }
}
export const filterOrder=(order)=>{
    return {
        type:filterByOrder,
        payload:order
    }
  }
