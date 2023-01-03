import React, { Fragment } from "react";
import "./App.css";

// Components
import UserRegister from "./components/UserRegister";
import UserList from "./components/UserList";

function App() {
  return (
    <Fragment>
      <div className="container">
        <UserRegister />
        <UserList />
      </div>
    </Fragment>
  );
}

export default App;