import React, {Component} from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      genre: '',
      title: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="title" name="title" value={this.state.title} onChange={event => this.handleChange(event)} />
        <label for="genre">Choose a genre:</label>
          <select id="genre" name="genre">
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="family">Family</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="music">Music</option>
            <option value="romance">Romance</option>
            <option value="science fiction">Science Fiction</option>
            <option value="thriller">Thriller</option>
            <option value="war">War</option>
          </select>
          <input type="submit" onChange={event => this.handleChange(event)}/>
      </form>
    )
  }
}

export default Form