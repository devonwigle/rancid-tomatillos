import React from 'react'

const Filter = ({selectGenre}) => {
  

  const handleChange = (genre) => {
    selectGenre(genre)
  }

  
    return (
    <div>
        <label name="genre">Choose a genre:</label>
          <select id="genre" name="genre" onChange={({target: {value}}) => handleChange(value)}>
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
      </div>
    )
  }


export default Filter