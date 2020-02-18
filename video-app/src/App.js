import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import MovieList from './Components/MovieList'
//import Home from './View/Home';

import Movie from './Components/MovieCard';

import Search from './Components/Search';
//import { Component } from 'react';

    
 class App extends Component {
   constructor(){
     super()
     this.state = {
       moevies:[],
       searchTerm:""
     }
     //set a property for api created in a seperate .env file
     this.apiKey = process.env.REACT_APP_API
   }
   handleSubmit = (e) =>{
     e.preventDefault();
     //set a request to the moviedb api
     fetch('https://api.themoviedb.org/3/search/movie?api_key=b1a68b4eb2cb080ad3ce165754970454&query=${this.state.searchTerm}')
     .then(data => data.json())
     .then(data =>{
       console.log(data);
       this.setState({movies: [...data.results]})
     })
   }
   handleChange = (e) =>{
     this.setState({searchTerm: e.target.value})
   }
   render(){
    return (
      <div className="App">
      <Nav></Nav>
      <MovieList/>
      <Movie></Movie>
      <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}></Search>
      </div>
    );
   }
 

 }
 

     
    


export default App;
