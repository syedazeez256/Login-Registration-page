import React, { useState, useEffect } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [detail, setDetail] = useState("");
  const obj = {
    userName,
    password,
    phone,
    password,
    email,
    gender,
    address,
    detail,
  };
  const [formsErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  ////////////////// handling inputs ////////////////
  // const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    name === "userName"
      ? setUserName(value)
      : name === "password"
      ? setPassword(value)
      : name === "email"
      ? setEmail(value)
      : name === "phone"
      ? setPhone(value)
      : name === "detail"
      ? setDetail(value)
      : name === "address"
      ? setAddress(value)
      : name === "gender" && setGender(value);
  };

  /////////////// handling Form ///////////////
  const handleSubmit = (e) => {
    const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
    e.preventDefault();
    if (
      userName === "" ||
      password === "" ||
      phone === "" ||
      password === "" ||
      email === "" ||
      gender === "" ||
      address === "" ||
      detail === ""
    ) {
      alert("Every field is required");
    } else if (!password === regex) {
      alert(
        "Password must be contain one numeric digit one upper case one lower case"
      );
    } else {
      alert("submited");
    }
    // setFormErrors(validate(obj));
    setIsSubmit(true);
  };

  ////////////////////////////////////

  useEffect(() => {
    localStorage.setItem("obj", JSON.stringify(obj));
  }, [obj]);

  return (
    <>
      <pre>{JSON.stringify({ obj }, undefined)}</pre>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label> <br />
          <input
            type="text"
            autoComplete="off"
            value={userName}
            onChange={handleInput}
            name="userName"
            id="userName"
          />
        </div>
        <p>{formsErrors.userName}</p>
        <div>
          <label htmlFor="password">Psssword</label>
          <br />
          <input
            type="password"
            autoComplete="off"
            value={password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <p>{formsErrors.password}</p>
        <div>
          <label htmlFor="phone">Mobile Number</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="phone">Email</label>
          <br />
          <input
            type="email"
            autoComplete="off"
            value={email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <p>{formsErrors.email}</p>
        <div>
          <label htmlFor="gender">Gender</label>
          <br />
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={handleInput}
          />{" "}
          Male
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={handleInput}
          />{" "}
          Female
          <input
            type="radio"
            value="transgender"
            name="gender"
            checked={gender === "transgender"}
            onChange={handleInput}
          />{" "}
          Transgender
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={address}
            onChange={handleInput}
            name="address"
            id="address"
          />
        </div>
        <div>
          <label htmlFor="textbox">Details</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={detail}
            onChange={handleInput}
            name="detail"
            id="detail"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Register;
