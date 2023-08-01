class MainPage{
    elements ={
    elementsCard : () => cy.get(".card-body h5").contains("Elements")
    }


    clickOnElementsCard(){
        this.elements.elementsCard().click();
    }


}

module.exports = new MainPage();