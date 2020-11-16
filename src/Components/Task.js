import React, { useState } from "react";
import "./style.css";
import { deleteTask, editTask } from "../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

const Task = ({ data }) => { 
  const [des, setdes] = useState(data.description);
  console.log("data task component", data);
  const dispatch = useDispatch();
  

  const edit=(e,val)=>{
      e.preventDefault();
    dispatch(editTask(data.id,val));
    
  }
  return (
    <>
      <div className="item">
        {
          <input
            className="item_input"
            value={data.desription}
            onChange={(e) => setdes(e.target.value)}
          />
        }
        <button className="editbutton" onClick={(e)=>edit(e,true)}>
          <i className="fa fa-check-square-o "></i>
        </button>
        <button className="removebutton"  onClick={(e)=>edit(e,false)}>
          <i className="fa fa-times "></i>
        </button>
      </div>
      <div className="button_div">
        <button
          className="removebutton"
          onClick={() => dispatch(deleteTask(data.id))}
        >
          <i className="fa fa-trash"></i>Remove
        </button>
        <button
         
          className="editbutton"
        >
          <i className="fa fa-pencil-square-o "></i>Edit
        </button>
      </div>
    </>
  );
};
export default Task;
