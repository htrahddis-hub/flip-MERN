import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios';

function App() {

  useEffect(()=>{
    const user = {
      email: "ffgghhnbgvnvhghg@gmai.com",
      password: "pass"
    }
    
    var {data} = axios.post('http://localhost:5000/api/signup',user);
    var {data} = axios.post('http://localhost:5000/signup',user);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
