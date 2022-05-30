import React from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";

const App = () => {
  return (
    <>
      <Home />
      {/* <Register /> */}
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
