
import React, {Component} from 'react'
import getAllMovies from './apiCalls'
import MovieContainer from './Components/MovieContainer'
import MovieDetails from './Components/MovieDetails'
import Header from './Components/Header'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: {},
      showDetails: false,
    }
  }
  
  componentDidMount() {
    const apiData = getAllMovies()
      .then(({movies}) => this.setState({movies}))
      .catch((error) => console.log(error))
  }

  selectMovie = (id) => {
    const foundMovie = this.movies.find(movie => movie.id === id)

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
       {this.setMovieView()}
      </main>
    )
  }
}

export default App;
