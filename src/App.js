
import React, {Component} from 'react'
import movieData from './data.js'
import videoIcon from './assets/video-icon.png'
import MovieContainer from './Components/MovieContainer'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedMovie: false
    }
  }

  showId = (id) => {
    this.setState({selectedMovie: true})
  }

  showMovieDetails = () => {
    if(this.state.selectedMovie){
      return (
        <div>movie</div>

      )
    }

    return(
      <MovieContainer data={movieData} showId={this.showId}/>
    )
  }

  
  render() {
    return (
      <main>
        <h1 className="title">Rancid Tomatillos <img className="icon" src={videoIcon}/> </h1>
        
       {this.showMovieDetails()}
      </main>
    )
  }
}

export default App;
