//import logo from './logo.svg';
import './App.css';
import React from 'react';
import SigLogPage from './components/Login/SigLogPage.jsx';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <SigLogPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
