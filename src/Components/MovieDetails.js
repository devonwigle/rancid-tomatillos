import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../CSS/MovieDetails.css'
import BadUrl from './BadUrl'
import {getSingleMovie} from '../apiCalls'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      movie: undefined,
    }
  }

  componentDidMount() {
    getSingleMovie(this.props.id)
      .then((data) => {
        this.setState({ movie: data.movie })
      })
  }

  render() {
    if (!this.state.movie) {
      return <BadUrl />
    }

    return(
      <div className="movie-details">
        <img className="backdrop" src={this.state.movie.backdrop_path} />
        <div className="details">
          <p className="detail-title">{this.state.movie.title}</p>
          <p>User Rating: {this.state.movie.average_rating.toFixed(2)}</p>
          <p>Release Date: {this.state.movie.release_date}</p>
          <p>Overview: {this.state.movie.overview}</p>
          <p>Runtime: {this.state.movie.runtime} minutes</p>
        </div>
        <Link to="/">
          <button className="home-button">Go Home ↩︎</button>
        </Link>
      </div>
    )
  }
}

export default MovieDetails