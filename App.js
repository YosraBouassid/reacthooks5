import React, { useState } from 'react'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import {moviedata} from "./data"

const App = () => {
  const [movies, setMovies] = useState(moviedata)

  const handleAdd = (newMovie) => {
      setMovies([...movies,newMovie])
  }
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  
  const handleChange =(e) =>
  {
    setTitle(e.target.value)

  }
  
  return (
    <div>
     
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged}/>
      <AddMovie handleAdd={handleAdd}/>
      <MovieList movies={movies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase().trim()) && el.rate > rating)} />
     
    </div>
  )
}

export default App
