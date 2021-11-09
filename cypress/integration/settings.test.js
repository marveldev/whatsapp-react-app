describe('Setting features', () => {
  before(() => {
    cy.visit('/')
  })

  it('should be able to add profile photo', () => {
    cy.get('#dropdownIcon').click()
    cy.findByRole('button', {  name: /settings/i}).click()
    cy.get('.photo-container').click()
    cy.get('input[type="file"]').attachFile('monkey.jpg')
    cy.get('.toaster').should('be.visible')
    cy.get('.photo-container').find('img').should('have.id','profilePhoto')
  })

  it('should be able to add profile name', () => {
    cy.get('#name').clear().type('Marvel Alika')
    cy.get('#nameCheckButton').click()
    cy.get('.toaster').should('be.visible')
    cy.get('#name').should('have.value', 'Marvel Alika')
  })

  it('should be able to add about information', () => {
    cy.get('#about').clear().type('FrontEnd developer')
    cy.get('#aboutCheckButton').click()
    cy.get('.toaster').should('be.visible')
    cy.get('#about').should('have.value', 'FrontEnd developer')
  })

  it('should be able to change theme', () => {
    cy.get('#profileBackButton').click()
    cy.findByText(/chats/i).click()
    cy.findByRole('button', {  name: /theme/i}).click()
    cy.get('.theme-modal').should('be.visible')
    cy.findByText('Dark').click()
    cy.findByRole('button', {  name: /ok/i}).click()
    cy.get('.app-layer').should('have.class', 'dark')
  })
})
