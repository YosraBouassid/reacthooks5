import React from "react";
import MovieCard from "../components/MovieCard";

const MovieList = ({ movies, handleFilterTitle }) => {
  
  
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} handleFilterTitle={handleFilterTitle}/>
      ))}
    </div>
  );
};

export default MovieList;