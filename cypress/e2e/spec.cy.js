describe('My First Test', () => {
  before(() => {
    cy.log("BEFORE")
  })

  after(() => {
    cy.log("AFTER")
  })

  beforeEach(() => {
    cy.log("before each test case")
  })
  
  afterEach(() => {
    cy.log("after each test case")
  })

  it('TC 1', () => {
    cy.log("Test Case 1")
  })

  it.skip('TC 2', () => {
    cy.log("Test Case 2")
  })

  it('TC 3', () => {
    cy.log("Test Case 3")
  })

  it('TC 4', () => {
    cy.log("Test Case 4")
  })
})