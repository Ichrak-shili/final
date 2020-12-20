import React from "react";
import "./style.css";
import {currency} from"./currency";
import {useDispatch} from "react-redux";
import {remove} from "../Redux/Actions/Actions";

const Cart=({cartItems})=>{
const dispatch=useDispatch();
    return(
  <>
   <div>{
      cartItems.length===0? <div className="cart cart-header">Cart is empty</div>:
      <div className="cart cart-header">You have {cartItems.length} in the cart </div>
       
       }
       </div>
       <div>
         <div className="cart">
           <ul className="cart-items">
              {cartItems.map(i=><li key={i._id}>
                   <div>
                       <img src={i.image} alt={i.title}/>
                   </div>
                   <div>
                       <div>{i.title}</div>
                       <div className="right">
                        {currency(i.price)} x {i.count}
                       <button  onClick={()=>dispatch(remove(i))}>Remove</button>
                       </div>
                   </div>

              </li>)}

           </ul>

         </div>
         {cartItems.length!==0?<div className="cart">
             <div className="total">
                 Total : {" "}
                 <div>{currency(cartItems.reduce((t,i)=>t+=i.price*i.count,0))}
                
                 </div>
             </div>
         </div>:null}
         
       </div></>

    )

}
export default Cart;