import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './View/Home';
import About from './Components/About';
import Card from './Components/Card';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Nav></Nav>
     <Switch>
     <Route path="/" exact component={Home}></Route>
     <Route path= "/about" component={About}></Route>
     <Route path= "/Card" component={Card}></Route>
     </Switch>
     
    </div>
    </Router>
  );
}


export default App;
