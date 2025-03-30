// import React from 'react';
// import { useState, useEffect } from "react";

// const Home = () => {

//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await fetch(`http://localhost:7001/api/users?page=${page}&limit=5`);
//         if (!res.ok) throw new Error("Failed to fetch users");

//         const data = await res.json();
//         setUsers(data.users);
//         setTotalPages(data.totalPages);
//       } catch (err) {
//         setError(err.message || "Unknown error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [page]);


//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">Users List</h2>

//       {/* Loading and Error Handling */}
//       {loading && <p className="text-blue-500">Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {/* Users List */}
//       {!loading && !error && (
//         <ul className="bg-white p-4 rounded-lg shadow-md">
//           {users.length > 0 ? (
//             users.map((user) => (
//               <li key={user._id} className="border-b py-2">
//                 {user.name} - {user.email}
//               </li>
//             ))
//           ) : (
//             <p className="text-gray-500">No users found.</p>
//           )}
//         </ul>
//       )}

//       {/* Pagination Controls */}
//       <div className="mt-4 flex gap-2">
//         <button
//           className="p-2 bg-gray-200 rounded disabled:opacity-50"
//           onClick={() => setPage(page - 1)}
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <span>Page {page} of {totalPages}</span>
//         <button
//           className="p-2 bg-gray-200 rounded disabled:opacity-50"
//           onClick={() => setPage(page + 1)}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import UsersList from '../Userlist/UsersList';


const Home = () => {
  return (
    <div>
      home
      <UsersList/>
    </div>
  );
}

export default Home;
