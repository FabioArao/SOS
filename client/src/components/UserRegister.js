import React, { Fragment, useState } from "react";

const UserRegister = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [urole, setUrole] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { fname, lname, urole };
      const response = await fetch("http://localhost:2000/sosusers", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">User Registration</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={urole}
          onChange={(e) => setUrole(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default UserRegister;
