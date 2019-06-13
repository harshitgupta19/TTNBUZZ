import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FooterComponent from './components/footer'
import LoginComponent from './components/login';
import AppRouterComponent from './components/AppRouterComponent'

class App extends Component {
  render() {
    return (
      <div>
      
      <Router>
          <Route path={'/'} component={AppRouterComponent}/>
        </Router>
      </div>

    );
  }
}

export default App;
