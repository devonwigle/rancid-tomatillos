describe('Movie flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should be able to visit the page and see all movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
      {
        statusCode: 200,
        ok: true,
        body: {
          movies: [{
            'id': 694919,
            'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
            'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
            'title': 'Money Plane',
            'average_rating': 6.666666666666667,
            'release_date': '2020-09-29'
          }]
        }
      })
    cy.visit('http://localhost:3000')
      .contains('Rancid Tomatillos')
      .get('.card')
      .should('have.length', 1)
  })

  it('Should be able to see movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
      {
        statusCode: 200,
        ok: true,
        body: {
          movies: [{
            'id': 694919,
            'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
            'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
            'title': 'Money Plane',
            'average_rating': 6.666666666666667,
            'release_date': '2020-09-29'
          }]
        }
      })
    cy.visit('http://localhost:3000') 
      .get('.card').first().click()
      .get('.movie-details')
      .get('.details')
      .contains('Money Plane')
  })

  it('Should not be able to return a bad url', () => {
    cy.visit('http://localhost:3000')
    cy.visit('http://localhost:3000/fdase')
      .contains('Trouble processing your request. Please try again later')
  })

  it('should be able to handle errors', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
      {
        statusCode: 404,
        ok: false,
      } 
    )
    cy.visit('http://localhost:3000')
      
  })

  it('Should be able to go back home', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
      {
        statusCode: 200,
        ok: true,
        body: {
          movies: [{
            'id': 694919,
            'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
            'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
            'title': 'Money Plane',
            'average_rating': 6.666666666666667,
            'release_date': '2020-09-29'
          }]
        }
      })
    cy.visit('http://localhost:3000')
      .get('.card').first().click()
      .get('.home-button').click()
  })
})