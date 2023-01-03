import React, { Fragment, useEffect, useState } from "react";

import UserUpdate from "./UserUpdate";

const UserList = () => {

    const [users, setUsers] = useState([])

    //delete user
    
    const deleteUser = async(id) =>{
      try {
        const deleteUser = await fetch(`http://localhost:2000/sosusers/${id}`, {
          method: "DELETE"
        });

        setUsers(users.filter(users => users.users_id !== id));
      } catch (err) {
        console.error(err.message);
      };
    };

    const getUsers = async() =>{
        try {
            const response = await fetch("http://localhost:2000/sosusers")
            const jsonData = await response.json()

            setUsers(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getUsers();
    }, []);

    console.log(users)

    return <Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Role</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/*      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>Professor</td>
      </tr> */}
      {users.map(user =>(
        <tr key={user.users_id}>
          <td>{user.fname}</td>
          <td>{user.lname}</td>
          <td>{user.urole}</td>
          <td><UserUpdate users ={user} /></td>
          <td><button className="btn btn-danger" onClick={() =>deleteUser(user.users_id)}>Delete</button></td>

        </tr>
      ))}

    </tbody>
  </table>
        </Fragment>
};

export default UserList;