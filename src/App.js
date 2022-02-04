
import React, {Component} from 'react'
import movieData from './data.js'
import videoIcon from './assets/video-icon.png'
import MovieContainer from './Components/MovieContainer'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <main>
        <h1 className="title">Rancid Tomatillos <img className="icon" src={videoIcon}/> </h1>
        
        <MovieContainer data={movieData}/>
      </main>
    )
  }
}

export default App;
