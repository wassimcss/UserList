import React,{useState} from 'react'
import UserList from './Components/UserList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


 const App = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <div className="App">
      <h1>User List</h1>
      <button onClick={handleClick} className={show ? "btn btn-danger" : "btn btn-primary"}>{show ? "Hide users" : "Show users"}</button>
      {show ? <UserList/> : <p> Hello ,You can see our users whenever you want</p>}
    </div>
  )
}
export default App
