
import React, {Component} from 'react'
import {getAllMovies, getSingleMovie} from './apiCalls'
import MovieContainer from './Components/MovieContainer'
import MovieDetails from './Components/MovieDetails'
import Header from './Components/Header'
import Filter from './Components/Filter'
import './App.css'
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
      selectedGenre: 'all'
    }
  }
  
  componentDidMount() {
    getAllMovies()
      .then(({movies}) => this.setState({movies}))
      .then(() => this.getMovieGenres())
      .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later'}))
  }

  getMovieGenres = async () => {
    const updatedMovies = []
    for(const movie of this.state.movies) {
      const singleMovie = await getSingleMovie(movie.id)
      movie.genres = singleMovie.movie.genres
      updatedMovies.push(movie)
    }
    this.setState({movies: updatedMovies})
  }

  handleChange = (event) => {
    this.setState({selectedGenre: event.target.name})
  }

  filterGenre = (genre) => {
      debugger
      this.state.movies.filter(movie => {
      if(this.state.selectedGenre !== 'all') {
        return movie.genres.includes(this.state.selectedGenre)
      } else {
        return this.state.movies
      }
    })
  }


  render() {
    return (
      <main>
        <Header />
        <Filter filterGenre={this.filterGenre} />
        <Route exact path="/">
        {this.state.error && <h2>{this.state.error}</h2>}
        <MovieContainer movies={this.state.movies}></MovieContainer>
        </Route>
        <Route
          exact
          path="/:id"
          render={({match}) => <MovieDetails id={match.params.id}></MovieDetails>}
        />
      </main>
    )
  }
}


export default App


