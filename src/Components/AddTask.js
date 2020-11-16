import React, { useState } from "react";
import "./style.css";
import { addTask, filterDone,filterNotDone,setVisible } from "../Redux/Actions/Actions";
import { useDispatch ,useSelector} from "react-redux";


const AddTask = () => {
  const [des, setDes] = useState("");
  //const visible= useSelector(state => state.visible);

  const handleSubmit = () => {
    dispatch(addTask(des));
    setDes("");
    document.querySelector('.input').value="";
  };
  const handleSearchDone=()=>{
    dispatch(filterDone());
    dispatch(setVisible(true));
    
    
   
  }
  const handleSearchNotDone=()=>{
    dispatch(filterNotDone());
    dispatch(setVisible(true));
    
  
    

  }

  const dispatch = useDispatch();
  return (
    <>
      <h1>
        <span className="title">TODO </span>App
      </h1>
      <div className="input_div">
        <input
          className="input"
          placeholder="What Do you Want To Do ..."
          onChange={(e) => setDes(e.target.value)}
        />
        <button className="addbutton" onClick={handleSubmit}>
          <i className="fa fa-plus"></i>
        </button>
        <div className="button_div">
        <button className="addbutton" onClick={handleSearchDone}>Done
          <i className="fa fa-search"></i>
        </button>
        <button className="addbutton"onClick={handleSearchNotDone}>Not Done
          <i className="fa fa-search"></i>
        </button>
        </div>
      </div>
    </>
  );
};
export default AddTask;
