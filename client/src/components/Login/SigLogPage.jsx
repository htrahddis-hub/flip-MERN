import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './login';
import Signup from './Signup';
import Home from '../home/home';

const SigLogPage= ()=>{
  const [user, setUser]= React.useState(false);

  return (
    <div>
			{/* <Navbar path={useLocation()}/> */}
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path ="/auth/home" element={<>} */}
      </Routes>
    </div>
    )
}

export default SigLogPage;