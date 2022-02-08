describe('Movie flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should be able to visit the page', () => {
    cy.visit('http://localhost:3000')
      .contains('Rancid Tomatillos')
  })
})