import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../Redux/Store/Store'
import Task from './Task';


const ListTask = () => {
    const state = useSelector(state => state)

    return (
        <div className="container">
            {state.length > 0 ? state
                .map(item => <Task data={item} />) : null}
        </div>

    );


}
export default ListTask;