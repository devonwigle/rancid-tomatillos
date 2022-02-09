import React from 'react'
import MovieCard from './MovieCard'
import {NavLink} from 'react-router-dom'
import '../CSS/MovieContainer.css'

const MovieContainer = ({movies, selectMovie, MovieDetails}) => {
  const movieCardComponents = movies.map(movie => {
    return (
      <NavLink to={`/${movie.id}`}>
      <MovieCard 
        poster_path={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating.toFixed(2)}
        selectMovie={selectMovie}
        movieDetails={MovieDetails}
        id={movie.id}
        key={movie.id}
      />
      </NavLink>
    )
  })
  return (
    <div className='movie-container'> 
      {movieCardComponents}
    </div>
  )
}

export default MovieContainer