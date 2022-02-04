
import React, {Component} from 'react'
import movieData from './data.js'
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
        <h1 className="title">Rancid Tomatillos</h1>
        <MovieContainer data={movieData}/>
      </main>
    )
  }
}

export default App;
