
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
      // selectedMovie: {},
      // showDetails: false,
      error: ''
    }
  }
  
  componentDidMount() {
    getAllMovies()
      .then(({movies}) => this.setState({movies}))
      .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later'}))
  }

  // selectMovie = (id) => {
  //   getSingleMovie(id)
  //     .then(({ movie }) => this.setState({ selectedMovie: movie, showDetails: true }))
  //     .catch((error) => this.setState({ error: 'Sorry, there seems to be an error. Please try again later' }))
  // }

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
          render={({ match }) => {
            const movieToRender = this.state.movies.find(
              (movie) => movie.id === parseInt(match.params.id)
            );
            if(movieToRender === undefined) {
              return 'Loading'
            } else {
              return (
                <MovieDetails id={movieToRender.id} backdrop_path={movieToRender.backdrop_path} title={movieToRender.title} release_date={movieToRender.release_date} overview={movieToRender.overview} average_rating={movieToRender.average_rating} runtime={movieToRender.runtime} />
              )
            }
            
          }}
        />
      </main>

      
    
      

  
    )
  }
}


export default App


