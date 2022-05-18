import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    fetch("https://reqres.in/api/users?page=1").then((response) => {
      response.json().then((json) => {
        setUser(json);
      });
    });
  }
  console.warn(users);
  function deleteUser(id) {
    fetch(`https://reqres.in/api/users?page=1${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((json) => {
        console.warn(json);
      });
    });
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).map(function (item, i) {
            return (
              <tr key={i}>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
// import React from "react";

// export default class FetchRandomUser extends React.Component {
//   state = {
//     loading: true,
//     person: null,
//   };

//   async componentDidMount() {
//     const url = "https://reqres.in/api/users?page=1";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data.results[0], loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }

//     if (!this.state.person) {
//       return <div>didn't get a person</div>;
//     }

//     return (
//       <div>
//         <div>{this.state.person.id}</div>
//         <div>{this.state.person.first_name}</div>
//         <div>{this.state.person.last_name}</div>
//         {/* <img src={this.state.person.picture.large} /> */}
//       </div>
//     );
//   }
// }
/* {Object.keys(users).map(function (item, i)   */

// import React, { useState, useEffect } from "react";

// function FetchAPI() {
//   const [data, setData] = useState([]);

//   const apiGet = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setData(json);
//       });
//   };
//   useEffect(() => {
//     apiGet();
//   }, []);

//   return (
//     <div>
//       MY API <br />
//       <button onClick={apiGet}>Fetch api</button>
//       <br />
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//       <div className="container">
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>
//               {item.userId}
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default FetchAPI;
// import React, { useState, useEffect } from "react";

// function FetchAPI() {
//   const [data, setData] = useState([]);

//   const apiGet = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setData(json);
//       });
//   };
//   useEffect(() => {
//     apiGet();
//   }, []);

//   return (
//     <div>
//       MY API <br />
//       <button onClick={apiGet}>Fetch api</button>
//       <br />
//       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//       <div className="container">
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>
//               {item.userId}
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default FetchAPI;
