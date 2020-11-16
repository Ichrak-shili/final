import React ,{useState}from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { setVisible } from '../Redux/Actions/Actions';
import { store } from '../Redux/Store/Store'
import Task from './Task';


const ListTask = () => {
    const visible= useSelector(state => state.visible);
    const all = useSelector(state => state.todos); // doit connaitre on travaille sur todos or filter
    const filter=useSelector(state=>state.filter);
    const dispatch = useDispatch();
    return (
        <>
        {visible ?<>
        { filter.length > 0 ?<>
         
        
        <div className="container_filter" >
        <button onClick={()=>dispatch(setVisible(false))} type="button" class="close" data-dismiss="alert" aria-label="Close"style={{position:"relative" ,top:"0%",left:"49%"}} >
         <span aria-hidden="true">&times;</span>
        </button>
        <h5 >Searched tasks</h5>
        
        
              {filter.map(item => <Task data={item} />)} 
              
        </div></> :<p>Couldn't find any task</p>
          } </>: null}
         <h5 >List of tasks</h5>
        
        <div className="container">
            {all.length > 0 ? all
                .map(item => <Task data={item} />) : null}
        </div>
        
        </>

    );


}
export default ListTask;