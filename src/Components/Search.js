import React, { useImperativeHandle } from 'react'
import '../CSS/Search.css'

const Search = ({searchMovies}) => {
  let searchField = '' 

  const submitTitle = event => {
    event.preventDefault()
    searchMovies(searchField)
  }

  const handleInput = event => {
    searchField = event.target.value
  }

  return (
    <div className="search-bar"> 
      <input className="search-input" type="text" placeholder="Movie Title" name="search" onChange={handleInput} /> 
      <button className="search-button" onClick={submitTitle}>Search 🔎</button> 
    </div>
  )
}

export default Search