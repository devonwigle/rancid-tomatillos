describe('Search flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('should be able to search movie titles', () => {
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
          },
            {
              'id': 413518,
              'poster_path': "https://image.tmdb.org/t/p/original//4w1ItwCJCTtSi9nPfJC1vU6NIVg.jpg",
              'backdrop_path': "https://image.tmdb.org/t/p/original//AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg",
              'title': "Pinocchio",
              'average_rating': 4.75,
              'release_date': "2019-12-19"
            }]
          }
        })
    cy.visit('http://localhost:3000')
      .get('input')
      .type('Money Plane')
      .get('.search-button').click()
      .get('.card')
      })
} )