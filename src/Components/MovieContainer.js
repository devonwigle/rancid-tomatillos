import React from 'react'
import MovieCard from './MovieCard'
import '../CSS/MovieContainer.css'

const MovieContainer = ({data}) => {
  console.log({data})
  const movieCardComponents = data.movies.map(movie => {
    return (
      <MovieCard 
        poster_path={movie.poster_path}
      />
    )
  })
  return (
    <div>
      {movieCardComponents}
    </div>
  )
}

export default MovieContainer