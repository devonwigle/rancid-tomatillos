import React from 'react'

const Search = () => {
  const submitTitle = event => {
    event.preventDefault()
  }

  return (
    <div>
      <input type="text" placeholder="Movie Title" name="search" /> 
      <button onClick={event => this.submitTitle(event)}>SUBMIT</button> 
    </div>
  )
}

export default Search