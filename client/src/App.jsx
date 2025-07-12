// import { useState } from 'react'
// import './App.css'
// import { Route, Router, Routes } from 'react-router-dom'
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import ForgotPassword from "./pages/ForgotPassword"
// import OTP from "./pages/OTP"
// import ResetPassword from "./pages/ResetPassword"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/login' element={<Login/>}></Route>
//         <Route path='/register' element={<Register/>}></Route>
//         <Route path='/password/forgot' element={<ForgotPassword/>}></Route>
//         <Route path='/otp-verification/:email' element={<OTP/>}></Route>
//         <Route path='/password/reset' element={<ResetPassword/>}></Route>
//       </Routes>
//     </Router>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import OTP from "./pages/OTP";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/slices/authSlice";
import { fetchAllUsers } from "./store/slices/userSlice";
import { fetchAllBooks } from "./store/slices/bookSlice";
import { fetchUserBorrowedBooks } from "./store/slices/borrowSlice";

const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchAllBooks());
    if (isAuthenticated && user?.role === "User") {
      dispatch(fetchUserBorrowedBooks());
    }
    if (isAuthenticated && user?.role === "Admin") {
      dispatch(fetchAllUsers());
    }
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/otp-verification/:email" element={<OTP />} />
        <Route path="/password/reset" element={<ResetPassword />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} />
    </BrowserRouter>
  );
};

export default App;
