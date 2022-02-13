import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/MovieCard.css'

const MovieCard = ({poster_path, title, average_rating, id}) => {
  return (
    <Link to={`/${id}`} style={{textDecoration: "none"}}>
      <div className="card">
        <img className="card-image" src={poster_path} />
        <p>{title}</p>
        <p>User Rating: {average_rating}</p>
      </div>
    </Link>
  )
} 

export default MovieCard