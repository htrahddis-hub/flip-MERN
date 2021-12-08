//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from "./components/login.jsx";
//import axios from 'axios';

function App() {

  // const d=3;
  // useEffect(()=>{
  //   const user = {
  //     email: "siddharth@gmai.com",
  //     password: "pass"
  //   }
    
  //   var {data} = axios.post('http://localhost:5000/api/signup',user);
  //   console.log(data);
  //   //var {data} = axios.post('http://localhost:5000/signup',user);
  // },[d]);

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
