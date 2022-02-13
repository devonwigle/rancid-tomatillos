
import React, {Component} from 'react'
import {getAllMovies, getSingleMovie} from './apiCalls'
import MovieContainer from './Components/MovieContainer'
import MovieDetails from './Components/MovieDetails'
import Header from './Components/Header'
import Filter from './Components/Filter'
import Search from './Components/Search'
import './App.css'
import { Route } from 'react-router-dom';
import loading from './assets/loading-gif.gif'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      filteredMovies: [],
      error: '',
    }
  }
  
  componentDidMount = () => {
    getAllMovies()
      .then(({movies}) => this.getMovieGenres(movies))
      .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later'}))
  }

  searchMovies = (input) => {
    
    const searchedMovies = this.state.movies.filter(movie => {
      return movie.title.includes(input)
    })
    debugger
    this.setState({filteredMovies: searchedMovies})
  }

  getMovieGenres = async (movies) => {
    const updatedMovies = []
    for(const movie of movies) {
      const singleMovie = await getSingleMovie(movie.id)
      movie.genres = singleMovie.movie.genres
      updatedMovies.push(movie)
    }
    this.setState({movies: updatedMovies, filteredMovies: updatedMovies})
  }

  filterGenre = (genre) => { 
    if (genre === "All") {
      this.setState({filteredMovies: this.state.movies})
      return
    }

    const filteredMovies = this.state.movies.filter(movie => movie.genres.includes(genre))
    this.setState({filteredMovies: filteredMovies})
  }

  goHome = () => {
    this.setState({
      movies: [],
      filteredMovies: [],
      error: '' })
  }

  setMovies = () => {
    if (this.state.filteredMovies.length === 0) {
      return <img className="loading-gif" src={loading}></img>
    }

    return (
      <div>
        <Filter filterGenre={this.filterGenre} />
        <Search searchMovies={this.searchMovies} /> 
        <MovieContainer movies={this.state.filteredMovies}></MovieContainer>
      </div>
    )
  }


  render() {
    return (
      <main>
        <Header />
        
        <Route exact path="/">
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.setMovies()}
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


