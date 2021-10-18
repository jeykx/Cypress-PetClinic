class VeterinariansPage {

    xpathLinkVet = '//span[contains(text(),"Veterinarians")]'
    xpathTableVetsSpecialities = '//table[@id="vets"]'

    clickLinkVeterinarians() {
      
       
       return cy.xpath(this.xpathLinkVet).click()
    }

    assertVerifyVetsPage() {

        return cy.xpath(this.xpathTableVetsSpecialities).should('be.visible')
    }
}
    
    export default VeterinariansPage;