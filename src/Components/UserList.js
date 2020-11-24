import React, { useState, useEffect } from 'react'
import axios from 'axios';


function UserList() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  async function getUsers() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response;
  }
  useEffect(() => {
    getUsers()
      .then(res => {
        setListOfUsers(res.data)
        setIsLoaded(true)
      })
      .catch(error => setError(error))

  }, [])
  
  if (error) return (<div>Error : {error}</div>)
  else if (!isLoaded) return (<div>Loading ...</div>)
  else return (
    <div className="App">
      {
        listOfUsers.map(user => {
          return (
            <li key ={user.id}>{user.name}
            </li>

          )
        })
      }
    </div>
  );
}

export default UserList;
