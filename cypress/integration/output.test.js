describe('Output', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  //Check if all the numbers are working ( 0 to 9)
  it('user should be able to input all numbers from (0 to 9)', () => {
    cy.findByRole('button', {  name: /0/i}).click()
    cy.findByRole('button', {  name: /1/i}).click()
    cy.findByRole('button', {  name: /2/i}).click()
    cy.findByRole('button', {  name: /3/i}).click()
    cy.findByRole('button', {  name: /4/i}).click()
    cy.findByRole('button', {  name: /5/i}).click()
    cy.findByRole('button', {  name: /6/i}).click()
    cy.findByRole('button', {  name: /7/i}).click()
    cy.findByRole('button', {  name: /8/i}).click()
    cy.findByRole('button', {  name: /9/i}).click()
    cy.get('#inputDisplay').should('contain.value', '0123456789')
  })

  //Check if the user should is able to add arithmetic keys at beginning of calculation.
  it('user should not be able to add arithmetic keys at beginning of calculation', () => {
    cy.findByRole('button', {  name: /–/i}).click()
    cy.findByRole('button', {  name: /÷/i}).click()
    cy.findByRole('button', {  name: /x/i}).click()
    cy.findByRole('button', {  name: /\+/i}).click()
    cy.findByRole('button', {  name: /√/i}).click()
    cy.findByRole('button', {  name: /%/i}).click()
    cy.get('#inputDisplay').should('contain.value', '-')
  })

  //Check if the clear key is working.
  it('user should be able to clear display', () => {
    cy.findByRole('button', {  name: /9/i}).click()
    cy.findByRole('button', {  name: /c/i}).click()
    cy.get('#inputDisplay').should('contain.value', '')
  })

  //check if the back space button is working.
  it('user should be able to remove last digit from display', () => {
    cy.findByRole('button', {  name: /1/i}).click()
    cy.findByRole('button', {  name: /2/i}).click()
    cy.findByText(/⌫/i).click()
    cy.get('#inputDisplay').should('contain.value', '1')
    cy.findByRole('button', {  name: /3/i}).click()
    cy.findByRole('button', {  name: /4/i}).click()
    cy.findByRole('button', {  name: /5/i}).click()
    cy.findByText(/⌫/i).click()
    cy.get('#inputDisplay').should('contain.value', '134')
  })
})
