
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
      error: ''
    }
  }
  
  componentDidMount() {
    getAllMovies()
      .then(({movies}) => this.setState({movies}))
      .then(() => this.getMovieGenres())
      .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later'}))
  }

  getMovieGenres = () => {
    this.state.movies.map(movie => {
      getSingleMovie(movie.id)
      .then(singleMovie => movie.genres = singleMovie.movie.genres)
    })
  }

  selectGenre = (genre) => {
    const movies = this.state.movies
  }


  render() {
    return (
      <main>
        <Header />
        <Filter selectGenre={this.selectGenre} />
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


