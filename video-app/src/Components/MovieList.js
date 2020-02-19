import React  from 'react';
import Movie from './MovieCard';
import '../App.css';


const MovieList=(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                
                {props.movies.map(
               (movie, i) => {
                   return(
                    <Movie key={i}v image={movie.poster_path}/>
                   )}
                        )}
                </div>
            </div>
        </div>
        
      
       
    );
}
export default MovieList;





