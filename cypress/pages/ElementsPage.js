class ElementsPage{
    elements = {
    textboxButton : () => cy.get(".element-list > .menu-list > li .text").contains("Text Box"),
    userForm : () => cy.get('#userForm')
    }

    populateForm(data){
        this.elements.userForm().within(() => {
            cy.get('#userName').type(data.name)
            cy.get('#userEmail').type(data.email)
            cy.get('#currentAddress').type(data.name)
            cy.get('#permanentAddress').type(data.name)
            cy.get("#submit").click()
        })
    }

}

module.exports = new ElementsPage();