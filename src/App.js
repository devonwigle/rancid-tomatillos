
import React, {Component} from 'react'
import movieData from './data.js'

import MovieContainer from './Components/MovieContainer'
import MovieDetails from './Components/MovieDetails'
import Header from './Components/Header'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedMovie: {},
      showDetails: false,
    }
  }

  selectMovie = (id) => {
    const foundMovie = movieData.movies.find(movie => movie.id === id)

    this.setState({selectedMovie: foundMovie, showDetails: true})
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
        >
        </MovieDetails>

      )
    }

    return(
      <MovieContainer data={movieData} selectMovie={this.selectMovie}/>
    )
  }

  goHome = () => {
    this.setState({selectedMovie: {}, showDetails: false})
  }

  
  render() {
    return (
      <main>
        <Header goHome={this.goHome} />
       {this.setMovieView()}
      </main>
    )
  }
}

export default App;
