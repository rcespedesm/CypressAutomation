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
  
    it.only('Positive Textbox test case', () => {
      MainPage.clickOnElementsCard();
      ElementsPage.elements.textboxButton().click()
      var data = {
        name: "Rodrigo Cespedes",
        email: "rodrigo.cespedes@email.com",
        currentAddress: "Viktoria Street # 548",
        permanentAddress: "Viktoria Street # 548"
        }

    ElementsPage.populateForm(data);
    
    })
  })