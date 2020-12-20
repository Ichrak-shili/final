import React from "react";
import GoogleLogin from "react-google-login";
import {useDispatch} from "react-redux";
import {setLog,setUser} from "../Redux/Actions/Actions";
const Google=()=>{
const dispatch = useDispatch()
const responseGoogle=(response)=>{
    dispatch(setLog());
    console.log(response);

}
return(
<GoogleLogin 
    clientId="42227958726-tljvps9eua148qsj3abr0h9n2absr286.apps.googleusercontent.com"
    buttonText="LOGIN WITH GOOGLE"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />


)

}
export default Google ;