import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import SearchBox from './Components/SearchBox';
import Home from './View/Home';

import Card from './Components/Card';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from './Components/SearchBox';

function App() {
  return (
    <Router>
    <div className="App">
     <Nav></Nav>
     <Search></Search>
     <Switch>
     <Route path="/" exact component={Home}></Route>
     
     <Route path= "/Card" component={Card}></Route>
     </Switch>
     
    </div>
    </Router>
  );
}


export default App;
