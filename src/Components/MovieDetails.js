import React from 'react'
import '../CSS/MovieDetails.css'

const MovieDetails = ({id, backdrop_path, title, release_date, overview, average_rating, runtime}) => {
  return(
    <div className="movie-details">
      <img className="backdrop" src={backdrop_path} />
      <div className="details">
      <p className="detail-title">{title}</p>
      <p>User Rating: {average_rating}</p>
      <p>Release Date: {release_date}</p>
      <p>Overview: {overview}</p>
      <p>Runtime: {runtime} minutes</p>
      </div>
    </div>
  )
}

export default MovieDetails