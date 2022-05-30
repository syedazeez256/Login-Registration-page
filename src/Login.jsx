import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    const Uname = localStorage.getItem("obj");
    const parseing = JSON.parse(Uname);
    const user = parseing.userName;
    const pass = parseing.password;
    if (userName === user && password === pass) {
      alert("You have been Loged In");
    } else {
      alert("Cridentials does'nt match");
    }
  };
  const handleData = (e) => {
    const user = e.target.name;
    const value = e.target.value;
    console.log(user, value);

    user === "username"
      ? setUserName(value)
      : user === "password" && setPassword(value);
  };
  return (
    <>
      <h1>Welcome Login Page</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="username">User Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter user name"
          name="username"
          id="username"
          value={userName}
          onChange={handleData}
        />{" "}
        <br /> <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          id="password"
          value={password}
          onChange={handleData}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default Login;
