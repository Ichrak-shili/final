import React from "react";
import "./style.css";
import avatar from "../img/avatar.svg";
import img from "../img/img1.svg";
import Facebook from "./Facebook";
import Google from "./Google";

const Login=()=>{

return(<>


<div className="container">
 <div className="img">
     <img className="img" src={img}/>
 </div>
 <div className="login_container">
     <form>
         <img className="avatar" src={avatar}/>
         <h2>Welcome</h2>

         <div className="input_div one">
            <div className="i">
                <i className="fa fa-user"></i>
            </div>
         
         <div>
         
         <input className="input" type="text" placeholder="UserName"/>
         </div>
         </div>
         <div className="input_div pass">
            <div className="i">
                <i className="fa fa-lock"></i>
            </div>
         
         <div>
         
         <input className="input" type="password" placeholder="Password"/>
         </div>
         </div>
         
         <Facebook  /> <br/>
         <Google/>
     </form>
 </div>

</div>



</>
);




}
export default Login ;