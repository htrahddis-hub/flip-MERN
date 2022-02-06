//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login/login';
import Signup from './components/Login/Signup';
import Home from './components/home/home';
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import {authorize} from './api';

function App() {
  const [user,setUser]=React.useState('');
  React.useEffect(async()=>{
    const data= await authorize();
    console.log(data);
    if(data==='ok')
      setUser('valid');
  },[])
  const setuser=(user)=>{
    setUser('valid');
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user==='valid'?<Home/>:<Navigate to="/login" />} />
          <Route path="/login" element={user==='valid'?<Navigate to="/" />:<Login setUser={setuser}/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
