import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import RegisterChef from './components/RegisterChef/RegisterChef';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Support from './components/support/Support';
import Account from './components/account/Account';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PortfolioList from './components/ChefPortfolio/PortfolioList';
import RecipeList from './components/ChefPortfolio/RecipeList';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <RegisterChef />
        <Switch>
          <PrivateRoute exact path='/Portfolio' component={Portfolio} />
          <PrivateRoute path='/account' component={Account} />
          <PrivateRoute path='/about' component={About} />
          <PrivateRoute path='/addrecipe' component={AddRecipe} />
          {/* <Route exact path='/' component={PortfolioList} /> */}
          <Route path='/login' component={Login} />
          <Route path='/support' component={Support} />
          <Route path='/registerchef' component={RegisterChef} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
