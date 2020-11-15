import React, { useState } from 'react';
import './style.css';
import { addTask } from '../Redux/Actions/Actions';
import { useDispatch } from 'react-redux';


const AddTask = () => {
    const [des, setDes] = useState("");
    const dispatch = useDispatch();
    return (
        <>
            <h1><span className="title">TODO </span>App</h1>
            <div className="input_div">
                <input className="input" placeholder="What Do you Want To Do ..." onChange={(e) => des = e.target.value} />
                <button className="addbutton" onClick={() => dispatch(addTask(des))}><i className="fa fa-plus"></i></button>
            </div>

        </>
    );

}
export default AddTask;