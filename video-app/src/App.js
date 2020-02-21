import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import MovieList from './Components/MovieList'
//import Home from './View/Home';



import Search from './Components/Search';


    
 class App extends Component {
   constructor(){
     super()
     this.state = {
       moevies:[],
       searchTerm:""
     }
     //set a property for api created in a seperate .env file
    //this.apiKey = process.env.REACT_API_KEY
   }
   //test with working api (most popular)
   //follow docs at https://www.themoviedb.org/talk/5e455d020c2710001585a9a1
   //https://api.themoviedb.org/3/discover/movie?api_key=b1a68b4eb2cb080ad3ce165754970454&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&title=Parasite
   handleSubmit = (e) =>{
     e.preventDefault();
     //set a request to the moviedb api
     fetch('https://api.themoviedb.org/3/search/movie?api_key=b1a68b4eb2cb080ad3ce165754970454&query=${this.state.searchTerm}&language=en-US&page=1&include_adult=false')
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
      <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      {/*set a prop for movielist*/}
      <MovieList movies={this.state.movies}/>
  
      </div>
    );
   }
 }
 

     
    


export default App;
