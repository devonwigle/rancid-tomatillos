
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
      // selectedMovieId: 0,
      // selectedMovie: {},
      error: ''
    }
  }
  
  componentDidMount() {
    getAllMovies()
      .then(({movies}) => this.setState({movies}))
      .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later'}))
  }


  // setMovieView = () => {
  //   if(this.state.showDetails === true){
  //     const movie = this.state.selectedMovie
  //     return (
  //         <MovieDetails 
  //         backdrop_path={movie.backdrop_path}
  //         title={movie.title}
  //         average_rating={movie.average_rating.toFixed(2)}
  //         release_date={movie.release_date}
  //         overview={movie.overview}
  //         runtime={movie.runtime}
  //         >
  //         </MovieDetails>
        
  //     )
  //   }

  //   return(
  //     <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie}/>
  //   )
  // }

  // goHome = () => {
  //   this.setState({selectedMovie: {}, showDetails: false})
  // }


  render() {
    console.log('state', this.state)

    return (
      <main>
        <Header />
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


