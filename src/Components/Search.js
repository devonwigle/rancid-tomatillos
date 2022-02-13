import React, { useImperativeHandle } from 'react'

const Search = ({searchMovies}) => {
  let searchField = '' 

  const submitTitle = event => {
    searchMovies(searchField)
    event.preventDefault()
  }

  const handleInput = event => {
    searchField = event.target.value
  }

  return (
    <div>
      <input type="text" placeholder="Movie Title" name="search" onChange={handleInput} /> 
      <button onClick={submitTitle}>Search</button> 
    </div>
  )
}

export default Search