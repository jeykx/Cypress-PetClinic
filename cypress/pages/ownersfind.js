class OwnersFind {

    ownersTableVerify = "//table[@id='vets']"
    ownerInput= "input"
    
    ownersListVisible() {
        
     cy.xpath(this.ownersTableVerify)
     return true

    }

    ownerSearch(element) {

    cy.get(this.ownerInput).type(element.lastname)

    }

}

export default OwnersFind;