


import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Display from "./Display";


// function Login() {
//   let [email, SetEmail] = useState('');
//   let [password, SetPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = async () => {
//     try {
//       // Send login request to server and receive response
//       const response = await fetch("http://localhost:9292/auth/login", {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
      
//       // Store session token in local storage or cookie
//       localStorage.setItem('token', data.token);

//       // Redirect user to another page
//       history.push("/memes");
//     } catch (error) {
//       console.error(error);
//     }
//   };
const Signup = () => {

  // let navigate = useNavigate()

  let [registered, setRegistered] = useState(false);

  let [email, SetEmail] = useState("");
  let [password, SetPassword] = useState("");
  let [full_name, SetFullname] = useState("")


  const handleLogin = (e) => {
    e.preventDefault();

    fetch("https://meme-generator-backend.onrender.com/auth/register", {
      method: "POST",
      crossorigin: true,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
       full_name, email, password,
      })

    }).then((response) => response.json())
    .then((data) => {
      // Handle successful login
      
      console.log(data);
    })
    .catch((error) => {
      // Handle login error
      console.error(error);
    });
   setRegistered(true)
};

  

  return (
<div className="main">
  
  {registered && <Redirect to='/login' />}
    <form id="form-login" onSubmit={handleLogin}>

    <div className="form-group">
        <i className="input-icon uil uil-at"></i>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="form-style"
          placeholder="Your Full Name"
          autoComplete="off"
          onChange={e => SetFullname( e.target.value )} required
        />
      </div>

      <div className="form-group">
        <i className="input-icon uil uil-at"></i>
        <input
          type="email"
          name="email"
          id="email"
          className="form-style"
          placeholder="Your Email"
          autoComplete="off"
          onChange={e => SetEmail( e.target.value )} required
        />
      </div>
      <div className="form-group mt-2">
        <i className="input-icon uil uil-lock-alt"></i>
        <input
          type="password"
          name="password"
          className="form-style"
          placeholder="Your Password"
          id="password"
          autoComplete="off"
          onChange={e =>
            SetPassword( e.target.value )}  required
          
        />
      </div>
      <button type="submit" className="btn btn-secondary mt-4">
      
        Register
      </button>
      {/* <p className="mb-0 mt-4 text-center">
        <a href="#0" className="" style={{"textDecoration": "none", "color": "#adb5bd"}}>
          Forgot Your Password?
        </a>
      </p> */}
    </form>
   
    </div>
  );
};

export default Signup;
// import React, { useState } from "react";
// import {  Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function SignUp() {
// // const navigate = useNavigate();

// let [full_name, setFullName] = useState("")
//   let [email, SetEmail] = useState("");
//   let [password, SetPassword] = useState("");

// const handleSignUp = (e) => {
//   e.preventDefault();

//   fetch("http://localhost:9292/auth/register", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },

//     body: JSON.stringify({
//       full_name: full_name,
//       email: email,
//       password: password,
//     }),
//   }).then((response) => {
//     if (response.ok) {
//       response.json().then((data) => {
//         setFullName(full_name)
//         SetEmail(email)
//         SetPassword(password)
//         // navigate("/");
//       });
//     } else {
//       console.log("error");
//     }
//   });
// };

// return (
//   <form id="form-signup" onSubmit={(e) => handleSignUp(e)}>
//     <div className="form-group mt-2">
//       <i className="input-icon uil uil-at"></i>
//       <input
//         type="text"
//         name="full_name"
//         id="full_name"
//         className="form-style"
//         placeholder="Full Name"
//         autoComplete="off"
//         onChange={(e) =>
//           setFullName({ full_name: e.target.value })
//         }
//       />
//     </div>
//     <div className="form-group mt-2">
//       <i className="input-icon uil uil-at"></i>
//       <input
//         type="text"
//         name="email"
//         id="email"
//         className="form-style"
//         placeholder="Email"
//         autoComplete="off"
//         onChange={(e) =>
//           SetEmail({  email: e.target.value })
//         }
//       />
//     </div>
//     {/* <div className="form-group mt-2">
//       <i className="input-icon uil uil-at"></i>
//       <input
//         type="email"
//         name="logemail"
//         className="form-style"
//         placeholder="Your Email"
//         id="logemail"
//         autoComplete="off"
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//     </div> */}
//     <div className="form-group mt-2">
//       <i className="input-icon uil uil-lock-alt"></i>
//       <input
//         type="password"
//         name="password"
//         className="form-style"
//         placeholder="Your Password"
//         id="logpass"
//         autoComplete="off"
//         onChange={(e) =>
//           SetPassword({  password: e.target.value })
//         }
//       />
//     </div>
//     <button type="submit" className="btn btn-secondary mt-4">
//       {" "}
//       <Link to="http://localhost:9292/auth/login"> Submit</Link>
//     </button>
//   </form>
// );
// }

// export default SignUp;