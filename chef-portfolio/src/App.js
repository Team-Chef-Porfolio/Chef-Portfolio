import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import RegisterChef from './components/RegisterChef/RegisterChef';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import PortfolioList from './components/ChefPortfolio/PortfolioList';
import RecipeList from './components/ChefPortfolio/RecipeList';


function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Login/>

     <Route exact path = '/portfolio/all' component= {PortfolioList} />
     <Route exact path = '/portfolio/:id' component= {RecipeList} />
    </div>
  </Router>
  );
}

export default App;
