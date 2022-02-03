import React from 'react'
import MovieCard from './MovieCard'
import '../CSS/MovieContainer.css'

const MovieContainer = ({data}) => {
  console.log({data})
  const movieCardComponents = data.movies.map(movie => {
    return (
      <MovieCard 
        poster_path={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating.toFixed(2)}
        key={movie.id}
      />
    )
  })
  return (
    <div className='movie-container'> 
      {movieCardComponents}
    </div>
  )
}

export default MovieContainer