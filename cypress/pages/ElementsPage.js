class ElementsPage{
    elements = {
    textboxButton : () => cy.get(".element-list > .menu-list > li .text").contains("Text Box"),
    userNameTextbox : () => cy.get('#userName'),
    userEmailTextbox : () => cy.get('#userEmail'),
    currentAddressTextbox : () => cy.get('#currentAddress'),
    permanentAddressTextbox : () => cy.get('#permanentAddress'),
    submitButton : () => cy.get('#submit'),
    userForm : () => cy.get('#userForm'),
    registryBox : () => cy.get('.border'),
    nameText : () => cy.get('#name'),
    emailText : () => cy.get('#email'),
    currentAddressText : () => cy.get('.border > #currentAddress'),
    permanentAddressText : () => cy.get('.border > #permanentAddress')
    }

    populateForm(data){
        this.elements.userForm().within(() => {
            this.elements.userNameTextbox().type(data.name)
            this.elements.userEmailTextbox().type(data.email)
            this.elements.currentAddressTextbox().type(data.currentAddress)
            this.elements.permanentAddressTextbox().type(data.permanentAddress)
            this.elements.submitButton().click()
        })
    }

}

module.exports = new ElementsPage();