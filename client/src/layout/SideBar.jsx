import React, { useEffect } from "react";
import logo_with_title from "../assets/logo-with-title.png";
import logoutIcon from "../assets/logout.png";
import closeIcon from "../assets/white-close-icon.png";
import dashboardIcon from "../assets/element.png";
import bookIcon from "../assets/book.png";
import catalogIcon from "../assets/catalog.png";
import settingIcon from "../assets/setting-white.png";
import usersIcon from "../assets/people.png";
import { RiAdminFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logout, resetAuthSlice } from "../store/slices/authSlice";
import { toast } from "react-toastify";
import AddNewAdmin from "../popups/AddNewAdmin";
import {
  toggleAddNewAdminPopup,
  toggleSettingPopup,
} from "../store/slices/popUpSlice";

const SideBar = ({ isSideBarOpen, setIsSideBarOpen, setSelectedComponent }) => {
  const dispatch = useDispatch();
  const { addNewAdminPopup, SettingPopup } = useSelector(
    (state) => state.popup
  );
  const { loading, error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  function handleLogout() {
    dispatch(logout());
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetAuthSlice());
    }
    if (message) {
      toast.success(message);
      dispatch(resetAuthSlice());
    }
  }, [dispatch, isAuthenticated, error, loading, message]);

  return (
    <>
      {/* <aside
        className={`
    fixed top-0 left-0 bottom-0 z-10 w-64 bg-black text-white
    transform transition-transform duration-300 ease-in-out
    ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
    md:relative md:translate-x-0 md:flex md:flex-col
  `}
      > */}

      <aside
        className={`${isSideBarOpen ? "left-0" : "-left-full"} z-10 transition-all duration-700 md:relative md:left-0 flex w-64 bg-black text-white flex-col h-full`}
        style={{ position: "fixed" }}
      >
        <div className="px-6 py-4 my-8 ">
          <img src={logo_with_title} alt="logo" />
        </div>
        <nav className="flex-1 px-6 space-y-2">
          <button
            className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
            onClick={() => setSelectedComponent("Dashboard")}
          >
            <img src={dashboardIcon} alt="icon" /> <span>Dashboard</span>
          </button>
          <button
            className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
            onClick={() => setSelectedComponent("Books")}
          >
            <img src={bookIcon} alt="icon" /> <span>Books</span>
          </button>
          {isAuthenticated && user?.role === "Admin" && (
            <>
              <button
                className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
                onClick={() => setSelectedComponent("Catalog")}
              >
                <img src={catalogIcon} alt="icon" /> <span>Catalog</span>
              </button>

              <button
                className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
                onClick={() => setSelectedComponent("Users")}
              >
                <img src={usersIcon} alt="icon" /> <span>Users</span>
              </button>

              <button
                className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
                onClick={() => dispatch(toggleAddNewAdminPopup())}
              >
                <RiAdminFill className="w-6 h-6" /> <span>Add New Admin</span>
              </button>
            </>
          )}
          {isAuthenticated && user?.role === "User" && (
            <>
              <button
                className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
                onClick={() => setSelectedComponent("My Borrowed Books")}
              >
                <img src={catalogIcon} alt="icon" />{" "}
                <span>My Borrowed Books</span>
              </button>
            </>
          )}
          <button
            className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
            onClick={() => dispatch(toggleSettingPopup())}
          >
            <img src={settingIcon} alt="icon" /> <span>Update Credentials</span>
          </button>
        </nav>
        <div className="px-6 py-4 ">
          <button
            className="py-2 font-medium bg-transparent text-center rounded-md hover:cursor-pointer flex items-center justify-center space-x-5 mx-auto w-fit"
            onClick={handleLogout}
          >
            <img src={logoutIcon} alt="icon" />
            <span>Logout</span>
          </button>
        </div>
        <img
          src={closeIcon}
          alt="icon"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          className="h-fit w-fit absolute top-0 right-4 mt-4 block md:hidden"
        />
      </aside>
      {addNewAdminPopup && <AddNewAdmin />}
      {SettingPopup && <SettingPopup />}
    </>
  );
};

export default SideBar;

// import React, { useEffect } from "react";
// import logo_with_title from "../assets/logo-with-title.png";
// import logoutIcon from "../assets/logout.png";
// import closeIcon from "../assets/white-close-icon.png";
// import dashboardIcon from "../assets/element.png";
// import bookIcon from "../assets/book.png";
// import catalogIcon from "../assets/catalog.png";
// import settingIcon from "../assets/setting-white.png";
// import usersIcon from "../assets/people.png";
// import { RiAdminFill } from "react-icons/ri";
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, resetAuthSlice } from "../store/slices/authSlice";
// import { toast } from "react-toastify"
// import AddNewAdmin from "../popups/AddNewAdmin";
// import { toggleAddNewAdminPopup } from "../store/slices/popUpSlice";

// const SideBar = ({ isSideBarOpen, setIsSideBarOpen, setSelectedComponent }) => {
//   const dispatch = useDispatch();
//   const { addNewAdminPopup } = useSelector(state => state.popup);
//   const { loading, error, message, user, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(resetAuthSlice());
//     }
//     if (message) {
//       toast.success(message);
//       dispatch(resetAuthSlice());
//     }
//   }, [dispatch, isAuthenticated, error, loading, message]);

//   // Close sidebar when clicking outside on mobile
//   const handleOverlayClick = () => {
//     setIsSideBarOpen(false);
//   };

//   return (
//     <>
//       {/* Overlay */}
//       {isSideBarOpen && (
//         <div
//           onClick={handleOverlayClick}
//           className="fixed inset-0 bg-black opacity-50 z-5 md:hidden"
//           aria-hidden="true"
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed top-0 bottom-0 z-10 w-64 bg-black text-white
//           transform transition-transform duration-300 ease-in-out
//           ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
//           md:relative md:translate-x-0 md:flex md:flex-col
//         `}
//       >
//         <div className="px-6 py-4 my-8 ">
//           <img src={logo_with_title} alt="logo" />
//         </div>
//         <nav className="flex-1 px-6 space-y-2">
//           <button
//             className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
//             onClick={() => {
//               setSelectedComponent("Dashboard");
//               setIsSideBarOpen(false); // Close sidebar on mobile after selection
//             }}
//           >
//             <img src={dashboardIcon} alt="icon" /> <span>Dashboard</span>
//           </button>
//           <button
//             className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
//             onClick={() => {
//               setSelectedComponent("Books");
//               setIsSideBarOpen(false);
//             }}
//           >
//             <img src={bookIcon} alt="icon" /> <span>Books</span>
//           </button>
//           <button
//             className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
//             onClick={() => {
//               setSelectedComponent("Catalog");
//               setIsSideBarOpen(false);
//             }}
//           >
//             <img src={catalogIcon} alt="icon" /> <span>Catalog</span>
//           </button>
//           <button
//             className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
//             onClick={() => {
//               setSelectedComponent("Users");
//               setIsSideBarOpen(false);
//             }}
//           >
//             <img src={usersIcon} alt="icon" /> <span>Users</span>
//           </button>
//           <button
//             className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
//             onClick={() => dispatch(toggleAddNewAdminPopup())}
//           >
//             <RiAdminFill className="w-6 h-6" /> <span>Add New Admin</span>
//           </button>

//           {isAuthenticated && user?.role === "User" && (
//             <button
//               className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
//               onClick={() => {
//                 setSelectedComponent("My Borrowed Books");
//                 setIsSideBarOpen(false);
//               }}
//             >
//               <img src={catalogIcon} alt="icon" /> <span>My Borrowed Books</span>
//             </button>
//           )}
//           <button
//             className="w-full py-2 font-medium bg-transparent rounded-md hover:cursor-pointer flex items-center space-x-2"
//           >
//             <img src={settingIcon} alt="icon" /> <span>Update Credentials</span>
//           </button>
//         </nav>
//         <div className="px-6 py-4 ">
//           <button
//             className="py-2 font-medium bg-transparent text-center rounded-md hover:cursor-pointer flex items-center justify-center space-x-5 mx-auto w-fit"
//             onClick={handleLogout}
//           >
//             <img src={logoutIcon} alt="icon" /><span>Logout</span>
//           </button>
//         </div>
//         <img
//           src={closeIcon}
//           alt="icon"
//           onClick={() => setIsSideBarOpen(false)}
//           className="h-fit w-fit absolute top-0 right-4 mt-4 block md:hidden cursor-pointer"
//         />
//       </aside>

//       {addNewAdminPopup && <AddNewAdmin />}
//     </>
//   );
// };

// export default SideBar;
