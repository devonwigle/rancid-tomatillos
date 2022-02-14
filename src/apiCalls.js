

  const getAllMovies = async () => { 
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
      .then(response => errorCheck(response))
  }

  const getSingleMovie = async (id) =>{
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => errorCheck(response))
  }

const errorCheck = (response) => {
  if (!response.ok) {
    throw new Error('Please try again in an hour')
  } else {
    return response.json();
  }
}
  export {getAllMovies, getSingleMovie}