import React from 'react';
import './style.css';
import { deleteTask, editTask } from '../Redux/Actions/Actions';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
const Task = ({ data }) => {
    const dispatch = useDispatch();
    const edit = (e) => {
        e.preventDefault();
        dispatch(editTask(data.id, e.target.value))
    }
    return (
        <>
            <div className="item">
                <input className="item_input" value={data.description} disabled onChange={(e) => $(".item_input").attr('value', e.target.value)} />
                <button className="editbutton" ><i className="fa fa-check-square-o "></i></button>
                <button className="removebutton" ><i className="fa fa-times "></i></button>
            </div>
            <div className="button_div">
                <button className="removebutton" onClick={() => dispatch(deleteTask(data.id))}><i className="fa fa-trash"></i>Remove</button>
                <button onClick={() => $(".item_input").prop('disabled', false)} className="editbutton" ><i className="fa fa-pencil-square-o " ></i>Edit</button>
            </div>
        </>
    );



}
export default Task;