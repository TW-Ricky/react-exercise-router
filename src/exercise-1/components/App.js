import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Products from './Products';
import Product from './Product/Product';

class App extends Component {
  state = {
    checked: 'home'
  }
  render() {
    return (
      <div className="app">
        <Router>
          <div className = 'header'>
            <ul>
              <li>
                <NavLink exact activeStyle = {{textDecorationLine: "underline"}} to = "/">Home</NavLink>
              </li>
              <li>
                <NavLink activeStyle = {{textDecorationLine: "underline"}} to = "/products">Products</NavLink>
              </li>
              <li>
                <NavLink activeStyle = {{textDecorationLine: "underline"}} to = "/my-profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink activeStyle = {{textDecorationLine: "underline"}} to = "/about-us">About Us</NavLink>
              </li>
            </ul>
          </div>
          <div className = 'text-area'>
            <Switch>
              <Route exact path = "/" component = {Home}></Route>
              <Route exact path = "/products" component = {Products}></Route>
              <Route exact path = "/products/:id" component = {Product}/>;
              <Route path = "/my-profile" component = {MyProfile}></Route>
              <Route path = "/about-us" component = {AboutUs}></Route>
            </Switch>
          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;
