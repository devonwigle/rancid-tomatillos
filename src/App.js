
import React, {Component} from 'react'
import {getAllMovies, getSingleMovie} from './apiCalls'
import MovieContainer from './Components/MovieContainer'
import MovieDetails from './Components/MovieDetails'
import Header from './Components/Header'
import './App.css'
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: {},
      showDetails: false,
      error: ''
    }
  }
  
  componentDidMount() {
    const apiData = getAllMovies()
      .then(({movies}) => this.setState({movies}))
      .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later'}))
  }

  selectMovie = (id) => {
    const apiData = getSingleMovie(id)
      .then(({ movie }) => this.setState({ selectedMovie: movie, showDetails: true }))
      .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later' }))
  }

  setMovieView = () => {
    if(this.state.showDetails === true){
      const movie = this.state.selectedMovie
      return (
        <MovieDetails 
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating.toFixed(2)}
        release_date={movie.release_date}
        overview={movie.overview}
        runtime={movie.runtime}
        >
        </MovieDetails>

      )
    }

    return(
      <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie}/>
    )
  }

  goHome = () => {
    this.setState({selectedMovie: {}, showDetails: false})
  }


  render() {
    console.log('state', this.state)
    return (
      <main>
        <Header goHome={this.goHome} />
        {this.state.error && <h2>{this.state.error}</h2>}
       {this.setMovieView()}
      </main>
    )
  }
}

export default App;
