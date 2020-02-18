import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import MovieList from './Components/MovieList'
//import Home from './View/Home';

import Movie from './Components/MovieCard';

import Search from './Components/Search';
//import { Component } from 'react';

    
 function App(){
  return (
    <div className="App">
    <Nav></Nav>
    <MovieList/>
    <Movie></Movie>
    <Search></Search>
    </div>
  );

 }
 

     
    


export default App;
