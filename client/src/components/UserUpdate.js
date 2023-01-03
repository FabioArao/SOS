import React, { Fragment, useState } from "react";

const UserUpdate = ({ users }) => {
    const [fname, setFname] = useState(users.fname);
    const [lname, setLname] = useState(users.lname);
    const [urole, setUrole] = useState(users.urole);


    //edit user function

    const updateUser = async e =>{
        e.preventDefault();
        try {
            const body = { fname, lname, urole};
            const response = await fetch(`http://localhost:2000/sosusers/${users.users_id}`, {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }

    }

    return <Fragment>
    
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${users.users_id}`}>
      Edit
    </button>
    
    
    <div class="modal" id={`id${users.users_id}`} 
    onClick={() => { setFname(users.fname); setLname(users.lname); setUrole(users.urole) }}>
      <div class="modal-dialog">
        <div class="modal-content">
    
          <div class="modal-header">
            <h4 class="modal-title">Edit User</h4>
            <button type="button" class="close" data-dismiss="modal" onClick={() => { setFname(users.fname); setLname(users.lname); setUrole(users.urole) }}>&times;</button>
          </div>
    

          <div class="modal-body">
            <input type="text" className="form-control" value={fname} onChange={e => setFname(e.target.value)} />
            <input type="text" className="form-control" value={lname} onChange={e => setLname(e.target.value)} />
            <input type="text" className="form-control" value={urole} onChange={e => setUrole(e.target.value)} />
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateUser(e)}>Edit</button>
          
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => { setFname(users.fname); setLname(users.lname); setUrole(users.urole) }}>Close</button>
          </div>
    
        </div>
      </div>
    </div>
    </Fragment>
};

export default UserUpdate;