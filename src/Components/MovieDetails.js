import React from 'react'

const MovieDetails = ({id, backdrop_path, title, release_date, overview, average_rating}) => {
  return(
    <div>
      <img src={backdrop_path} />
      <p>{title}</p>
      <p>User Rating: {average_rating}</p>
      <p>Release Date: {release_date}</p>
      <p>Overview: {overview}</p>
    </div>
  )
}

export default MovieDetails