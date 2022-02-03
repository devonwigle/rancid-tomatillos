import React from 'react'
import '../CSS/MovieCard.css'

const MovieCard = ({poster_path, backdrop_path, title, average_rating, release_date}) => {
  return (
    <div className="card">
      <img src={poster_path} />
      <p>Title: {title}</p>
      <p>User Rating: {average_rating}</p>
    </div>
  )
} 

export default MovieCard