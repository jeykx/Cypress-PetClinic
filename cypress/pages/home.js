class HomePage {

HomeTitleAssert() {
    
    return cy.get('h2').should('be.visible')
  }

}

export default HomePage;
