class HomePage {

visit() {
    cy.visit('https://spring-petclinic-community.herokuapp.com/');
}

HomeTitleAssert() {
    
    return cy.get('h2').should('be.visible')
  }

}

export default HomePage;
