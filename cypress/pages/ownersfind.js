class OwnersFind {

    xpathLinkFindOwners = "//span[contains(text(),'Find owners')]"
    findOwnerBtn = "//button[contains(text(),'Owner')]"
    ownersTableVerify = "//table[@id='vets']"

    clickLinkFindOwners() {
      
        return cy.xpath(this.xpathLinkFindOwners).click()
     }

    clickBtnOwner() {

        return cy.xpath(this.findOwnerBtn).click()
     }
    
    ownersListVisible() {
        
     cy.xpath(this.ownersTableVerify)
     return true

    }

}

export default OwnersFind;