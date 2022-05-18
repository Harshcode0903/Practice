import "./App.css";
import React from "react";
import FetchAPI from "./Fetchapi";

function App() {
  return (
    <div className="App">
      <FetchAPI />
    </div>
  );
}

export default App;

// function App() {
//   const [users, setUser] = useState([]);

//   useEffect(() => {
//     getUsers();
//   }, []);
//   function getUsers() {
//     fetch("https://reqres.in/api/users?page=1").then((result) => {
//       result.json(users).then((resp) => {
//         setUser(resp);
//       });
//     });
//   }
//   console.warn(users);
//   function deleteUser(id) {
//     fetch(`https://reqres.in/api/users?page=1${id}`, {
//       method: "DELETE",
//     }).then((result) => {
//       result.json(users).then((resp) => {
//         console.warn(resp);
//       });
//     });
//   }

//   return (
//     <div className="App">
//       <div className="container">
//         <table>
//           <thead>
//             <tr>
//               <td>Id</td>
//               <td>First Name</td>
//               <td>Last Name</td>
//             </tr>
//           </thead>
//           {/* {users.map((item, i) => { */}
//           <tbody>
//             {Object.keys(users).map(function (item, i) {
//               console.log(users[i]);
//               return (
//                 <tr key={i}>
//                   <td>{item.id}</td>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>
//                     <button onClick={() => deleteUser(item.id)}>Delete</button>
//                   </td>
//                 </tr>
//               );
//             })}
//             ;
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// export default App;
