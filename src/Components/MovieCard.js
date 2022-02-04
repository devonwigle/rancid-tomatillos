import React from 'react'
import '../CSS/MovieCard.css'

const MovieCard = ({poster_path, backdrop_path, title, average_rating, release_date, id, showId}) => {
  return (
    <div className="card" onClick={() => showId(id)}>
      <img className="card-image" src={poster_path} />
      <p>{title}</p>
      <p>User Rating: {average_rating}</p>
    </div>
  )
} 

export default MovieCard