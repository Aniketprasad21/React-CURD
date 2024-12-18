import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Alluser from "./pages/Alluser";
import Update from "./pages/Update";
const App = () => {
  return (
    <div>
      <Toaster></Toaster>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/alluser" element={<Alluser></Alluser>}></Route>
          <Route path="/update" element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
