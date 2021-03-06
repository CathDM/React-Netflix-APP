import React  from 'react';

import '../App.css';
// */--SAMPLE URLS
        
// 1. To get the config data like image base urls
// https://api.themoviedb.org/3/configuration?api_key=b1a68b4eb2cb080ad3ce165754970454

// 2. To fetch a list of movies based on a keyword
// https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=b1a68b4eb2cb080ad3ce165754970454

// 3. To fetch more details about a movie
// https://api.themoviedb.org/3/movie/<movie-id>?api_key=b1a68b4eb2cb080ad3ce165754970454
// *************/

const Movie = (props) =>{
  return(
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
{/* add conditional objects */}
{
  props.image == null ? <img src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpeg'}
alt="card-image" style={{width:"100%", height:360 }}/>:
<img src={'http://image.tmbd.org/t/p/w185${props.image}'}
alt="card-image" style={{width:"100%", height:360 }}/>}

        </div>
      </div>
    </div>
  );

}

export default Movie;

