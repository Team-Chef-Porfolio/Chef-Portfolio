import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login';
import RegisterChef from './components/RegisterChef/RegisterChef';
import './App.css';
import NavBar from "./components/NavBar/NavBar";



function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
     
    </div>
  </Router>
  );
}

export default App;
