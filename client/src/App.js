import "./App.css";
import React from "react";
import Login from "./components/Login/login";
import Signup from "./components/Login/Signup";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Forgotpassword from "./components/Login/Forgotpassword";
import Checkout from "./components/cart/checkout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authorize } from "./actions/auth";
import { getUser } from "./reducers/user";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(authorize());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user.auth ? <Home user={user.user} /> : <Navigate to="/login" />} />
          <Route path="/login" element={user.auth ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
