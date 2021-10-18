class Common {


xpathLinkFindOwners = "//span[contains(text(),'Find owners')]"
findOwnerBtn = "//button[contains(text(),'Owner')]"

baseUrl() {
   cy.visit('https://spring-petclinic-community.herokuapp.com/');
}

clickLinkFindOwners() {
      
    return cy.xpath(this.xpathLinkFindOwners).click()
 }

 clickBtnOwner() {

    return cy.xpath(this.findOwnerBtn).click()
 }

}

export default Common;