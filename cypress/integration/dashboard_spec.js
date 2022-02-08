describe('Movie flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should be able to visit the page and see all movies', () => {
    cy.visit('http://localhost:3000')
      .contains('Rancid Tomatillos')
      .get('.card')
      .should('have.length', 40)
  })

  it('Should be able to see movie details', () => {
    cy.visit('http://localhost:3000') 
      .get('.card').first().click()
      .get('.movie-details')
      .get('.details')
      .contains('Money Plane')
  })

  it('Should be able to go back home', () => {
    cy.visit('http://localhost:3000')
      .get('.card').first().click()
      .get('.home-button').click()
      .should()
      .get('.movie-container')
      .get('.card')
      .should('have.length', 40)
  })
})