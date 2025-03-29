// import React from 'react';
// import { useState } from "react";
// import { FaHome, FaChartBar, FaUserFriends, FaCog, FaSignOutAlt } from "react-icons/fa";
// const Logout = () => {

//     const [open, setOpen] = useState(true);
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
  
//     const handleLogout = () => {
//       setIsLoggedIn(false);
//     };
  
//     const handleLogin = () => {
//       setIsLoggedIn(true);
//     };
    
//     if (!isLoggedIn) {
//       return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//           <button onClick={handleLogin} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Login
//           </button>
//         </div>
//       );
//     }

//     return (
//         <div>
//               <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`bg-blue-900 text-white p-5 transition-all ${open ? "w-64" : "w-20"}`}>
//         <button onClick={() => setOpen(!open)} className="mb-5 focus:outline-none">
//           {open ? "⬅" : "➡"}
//         </button>
//         <ul>
//           <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
//             <FaHome /> {open && "Home"}
//           </li>
//           <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
//             <FaChartBar /> {open && "Analytics"}
//           </li>
//           <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
//             <FaUserFriends /> {open && "Referrals"}
//           </li>
//           <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
//             <FaCog /> {open && "Settings"}
//           </li>
//         </ul>
//         {/* Logout Button */}
//        <button 
//           onClick={handleLogout} 
//           className="mt-10 flex items-center gap-2 p-3 bg-red-600 hover:bg-red-700 rounded w-full">
//           <FaSignOutAlt /> {open && "Logout"}
//         </button>
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 p-5">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <p className="text-gray-600">Welcome to your dashboard.</p>
//       </div> 
//     </div>
//         </div>
//     );
// }

// export default Logout;


// // import { createContext, useContext, useState } from "react";

// // // Create Auth Context
// // const AuthContext = createContext();

// // export function AuthProvider({ children }) {
// //   const [user, setUser] = useState(null);

// //   const login = (email) => setUser({ email });
// //   const logout = () => setUser(null);

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // // Custom Hook
// // export function useAuth() {
// //   return useContext(AuthContext);
// // }


import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth tokens or user session (Modify as per your auth logic)
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
