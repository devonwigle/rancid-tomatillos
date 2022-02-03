
import React, {Component} from 'react'
import movieData from './data.js'
import MovieContainer from './Components/MovieContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <main>
        <MovieContainer data={movieData}/>
      </main>
    )
  }
}

export default App;
