class OwnersFind {

    ownersTableVerify = "//table[@id='vets']"

    
    ownersListVisible() {
        
     cy.xpath(this.ownersTableVerify)
     return true

    }

}

export default OwnersFind;