
import React, {useState, useEffect} from 'react';

import '../App.css';
// */--SAMPLE URLS
        
// 1. To get the config data like image base urls
// https://api.themoviedb.org/3/configuration?api_key=b1a68b4eb2cb080ad3ce165754970454

// 2. To fetch a list of movies based on a keyword
// https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=b1a68b4eb2cb080ad3ce165754970454

// 3. To fetch more details about a movie
// https://api.themoviedb.org/3/movie/<movie-id>?api_key=b1a68b4eb2cb080ad3ce165754970454
// *************/






function Card() {

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async () => {
    const data = await fetch('https://api.themoviedb.org/3/configuration?api_key=b1a68b4eb2cb080ad3ce165754970454')
    const items = await data.json();
    console.log(items);
  }
  return (
    <div className="App">
    <h1>Card</h1>
    </div>
  );
}

export default Card;
