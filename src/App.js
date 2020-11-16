import logo from './logo.svg';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import { Add } from './Redux/Actions/ActionTypes';

function App() {
  return (
    <>
    <AddTask/>
    <ListTask/>
   </>
   
  );
}

export default App;
