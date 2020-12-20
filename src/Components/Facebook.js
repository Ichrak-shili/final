import React from "react";

import FacebookLogin from "react-facebook-login";
import {useDispatch,useSelector} from "react-redux";
import {setLog,setUser} from "../Redux/Actions/Actions";

const Facebook=()=>{

const dispatch = useDispatch();
const componentClicked=()=>{console.log("clicked")}
const responseFacebook=(response)=>{
dispatch(setLog());
console.log(response);


}

return(
  

<FacebookLogin buttonStyle={{width:"100%",height:"50px",borderRadius:"25px",fontFamily: "'Poppins', sans-serif",display:"block",padding:"0"}}
    appId="280520390205047"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />


)

}
export default Facebook ;