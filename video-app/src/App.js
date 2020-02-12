import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Card from './Components/Card';


function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <About></About>
     <Card></Card>
    </div>
  );
}

export default App;
