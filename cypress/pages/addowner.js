class AddOwner {

btnPageAddOwner = "//a[contains(text(),'Add Owner')]"
btnAddOwnerValidate = "//button[contains(text(),'Add Owner')]"
inputLocator = "input"

linkAddOwner() {
    cy.xpath(this.btnPageAddOwner).click()
  }

AddOwnerValidate() {
    cy.xpath(this.btnAddOwnerValidate).click()
}

newOwnerForm(elements) {

  cy.get(this.inputLocator).eq(0).type(elements.FIRSTNAME)
  cy.get(this.inputLocator).eq(1).type(elements.LASTNAME)
  cy.get(this.inputLocator).eq(2).type(elements.ADDRESS)
  cy.get(this.inputLocator).eq(3).type(elements.CITY)
  cy.get(this.inputLocator).eq(4).type(elements.TELEPHONE)

  }

}

export default AddOwner