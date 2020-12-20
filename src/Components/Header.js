
import Product from "./Product";
import Filter from "./Filter";
import "./style.css";
import React ,{ useState } from "react";
import data from "./data.json";
import {useSelector} from "react-redux";
import Cart from "./Cart";


const Header=()=>{
    //const [state, setstate] = useState({products:data.products,size:"",sort:"",cartItems:[]});
    //const {products,size,sort,cartItems}=state;
    
    /*const removeFromCart=(p)=>{
        
        setstate({...state,cartItems:cartItems.filter(prod=>prod._id!==p._id)});
        
    }*/
    /*const addToCart=(product)=>{
    const copie=cartItems.slice();
    let alreadyIn=false;
    copie.forEach(p=>{
      if(p._id===product._id)  
       {   alreadyIn=true;
           p.count++;
       }
    }
        );
    if(!alreadyIn)
    { copie.push({...product,count : 1});
      setstate({...state,cartItems:copie});
    }
    }*/
    const products=useSelector(state=>state.products);
    const cartItems=useSelector(state=>state.cartItems);
   /* const filterProd=(e)=>{
    if(e.target.value==="")
      setstate({...state,size:e.target.value,products:data.products})
    else
    {   
      
      setstate({...state,size:e.target.value,products:products.filter(prod=>prod.availableSizes
        .includes(e.target.value))    
    });
}
    }
    const sortProd=(e)=>{
        setstate({...state,sort:e.target.value,
        products:products.slice().sort((a,b)=>
        sort==="lowest"
        ? a.price<b.price
        ? 1 :
        -1 :
        sort==="highest"
        ? a.price>b.price
        ? 1:
        -1:
        a._id>b._id
        ?1
        :-1


        )
        })

    }*/
return(
    <div className="grid-container">
      <header>
          <a href="/">Shopping cart</a>
      </header>
      <main>
      <div className="content">
        <div className="main">
            <Filter
            
            />
          <Product products={products}/>
        </div>
        <div className="sidebar">
           <Cart cartItems={cartItems} />
        </div>

    </div>
      </main>
      <footer>All right is reserved.</footer>

    </div>
)


}
export default Header ;