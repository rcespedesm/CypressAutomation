import MainPage, { elements } from "../pages/MainPage"
import ElementsPage from "../pages/ElementsPage"

describe('Suit to test elements in demo qa web page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


    before(() => {
      cy.visit("https://demoqa.com/")
    })

    beforeEach(() => {
      cy.fixture('elementsFixture')
      .then(function(elementsData) { 
        this.elementsData = elementsData;
      })
    })
  
    it.only('Positive Textbox test case', function() {
      MainPage.clickOnElementsCard();
      ElementsPage.elements.textboxButton().click()
      ElementsPage.populateForm(this.elementsData);
      ElementsPage.elements.nameText().should('contains.text', this.elementsData.name)
      ElementsPage.elements.emailText().should('contains.text', this.elementsData.email)  
      ElementsPage.elements.currentAddressText().should('contains.text', this.elementsData.currentAddress)  
      ElementsPage.elements.permanentAddressText().should('contains.text', this.elementsData.permanentAddress)  
    })
  })