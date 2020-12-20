import {
  Add,
  Remove,
  setUser,
  setLogged,
  filterBySize,
  filterByOrder,
} from "../Actions/ActionTypes";
import data from "../../Components/data.json";
import { filterOrder } from "../Actions/Actions";

const INITIAL_STATE = {
  User: { name: "", url: "" },
  cartItems: [],
  products: data.products,
  isLogged: false,
  sort:"",
   size:"",
   filter:[]
};
export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { User, cartItems, isLogged, products,sort,size} = state;
  switch (type) {
    case setLogged : return {...state,isLogged:true};
    case filterByOrder: return {
      ...state,
      sort:payload, products:products.slice().sort((a,b)=>{
        switch(sort){
          case "lowest" : { return (a.price<b.price)? 1:-1 }
          case "highest" :{return (a.price>b.price)? 1:-1 }
        
          default: return (a._id>b._id)? 1:-1  ;
          }
        }

      
     
     
      )
      
    }
    
    
    case filterBySize:{  if(payload==="")
    return {...state,size:payload,products:data.products}
  else
  {   
    
    return {...state,size:payload,products:data.products.filter(prod=>prod.availableSizes
      .includes(payload))    
  };

    }}
    case Remove:
      return {
        ...state,
        cartItems: cartItems.filter((prod) => prod._id !== payload._id),
      };

    case Add: {
      const copie = cartItems.slice();
      let alreadyIn = false;
      copie.forEach((p) => {
        if (p._id === payload._id) {
          alreadyIn = true;
          p.count++;
        }
      });
      if (!alreadyIn) {
        copie.push({ ...payload, count:1});

        return {
          ...state,
          cartItems: copie,
        };
      }
    }

    default:
      return state;
  }
};
