import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, resetAuthSlice } from "../store/slices/authSlice";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const { loading, error, message, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    dispatch(register({ name, email, password }));
  };

  useEffect(() => {
    // if (message) {
    //   toast.success(message);
    //   dispatch(resetAuthSlice());
    //   navigateTo(`/otp-verification/${email}`);
    // }
    if (error) {
      toast.error(error);
      dispatch(resetAuthSlice());
    }
  }, [dispatch, error, message, navigateTo]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col justify-center md:flex-row h-screen">
      {/* LEFT */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col items-center justify-center p-8 rounded-tr-[80px] rounded-br-[80px]">
        <div className="text-center">
          <div className="flex justify-center mb-12">
            <img
              src={logo_with_title}
              alt="logo"
              className="mb-12 h-44 w-auto"
            />
          </div>
          <p className="text-gray-300 mb-12">
            Already have Account? Sign in now.
          </p>
          <Link
            to={"/login"}
            className="border-2 rounded-lg font-semibold border-white px-8 py-3"
          >
            SIGN IN
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-12">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-5">
              <h3 className="font-medium text-4xl overflow-hidden">Sign Up</h3>
              <img src={logo} alt="logo" className="h-auto w-24 object-cover" />
            </div>
          </div>

          <p className="text-gray-800 text-center mb-12">
            Please provide your information to sign up.
          </p>

          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
              disabled={loading}
            >
              {loading ? "Signing up..." : "SIGN UP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState, useEffect } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { register, resetAuthSlice } from "../store/slices/authSlice";
// import logo from "../assets/black-logo.png";
// import logo_with_title from "../assets/logo-with-title.png";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const { loading, error, message, user, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );

//   const navigateTo = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     console.log("Register clicked");
//     // Add your registration logic here later
//   };

//   useEffect(() => {
//     if (message) {
//       navigateTo(`/otp-verification/${email}`);
//     }
//     if (error) {
//       toast.error(error);
//       dispatch(resetAuthSlice());
//     }
//   }, [dispatch, isAuthenticated, error, loading]);

//   if (isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <>
//       <div className="flex flex-col justify-center md:flex-row h-screen">
//         {/* LEFT SIDE */}
//         <div className="w-full md:w-1/2 bg-black text-white flex flex-col items-center justify-center p-8 rounded-tr-[80px] rounded-br-[80px]">
//           <div className="text-center">
//             <div className="flex justify-center mb-12">
//               <img
//                 src={logo_with_title}
//                 alt="logo"
//                 className="mb-12 h-44 w-auto"
//               />
//             </div>
//             <p className="text-gray-300 mb-12">
//               Already have Account? Sign in now.
//             </p>
//             <Link
//               to={"/login"}
//               className="border-2 rounded-lg font-semibold border-white px-8 py-3"
//             >
//               SIGN IN
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
//           <div className="w-full max-w-sm">
//             <div className="flex justify-center mb-12">
//               <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-5">
//                 <h3 className="font-medium text-4xl overflow-hidden">
//                   Sign Up
//                 </h3>
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="h-auto w-24 object-cover"
//                 />
//               </div>
//             </div>

//             <p className="text-gray-800 text-center mb-12">
//               Please provide your information to sign up.
//             </p>

//             <form onSubmit={handleRegister}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Full Name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
//                 />
//               </div>
//               <div className="mb-6">
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
//               >
//                 SIGN UP
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
