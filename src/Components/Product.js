import React from "react";
import {add} from "../Redux/Actions/Actions";
import {useDispatch} from "react-redux";
import "./style.css";
import {currency} from"./currency";
const Product=({products})=>{
 const dispatch=useDispatch();

  
    return(
        <div>
        <ul className="products">

        {products.map(prod=><li key={prod._id}><div className="product">
            
            <a href={"#"+ prod._id}>
                <img src={prod.image} alt={prod.title}/>
                <p>{prod.title}</p>
            </a>
            <div className="product-price">
                <div>{currency(prod.price)}</div>
                <button className="button primary" onClick={()=>dispatch(add(prod))}>Add to cart</button>
            </div>
            
        </div> </li>)}

        </ul>
        </div>
   
    )



}
export default Product;