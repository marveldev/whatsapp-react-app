//   Check if the chat history is displaying correctly for the user.
//   The user should be able to upload a profile picture and edit the profile information.
//  Verify that the user can change the status in the app

describe('Chat features', () => {
  before(() => {
    cy.visit('/')
  })

  it('should be able to send and receive messages', () => {
    cy.findByText(/kofi hawa/i).click()
    cy.findByRole('textbox').type('How you doing?')
    cy.findByRole('button', {  name: /person1/i}).click()
    cy.get('.chat-output-container').should('contain', 'How you doing?')
    cy.findByRole('textbox').type('I am good.')
    cy.findByRole('button', {  name: /person2/i}).click()
    cy.get('.chat-output-container').should('contain', 'I am good.')
  })

  it('should be able to delete single chat messages', () => {
    cy.findAllByText('How you doing?').click({ multiple: true, force: true })
    cy.get('.fa-trash').click()
    cy.get('.delete-modal').should('be.visible')
    cy.findByRole('button', {  name: /delete for me/i}).click()
    cy.get('.chat-output-container').should('not.contain', 'How you doing?')
  })

  it('should be able to delete all chat messages', () => {
    cy.findByRole('button', {  name: //i}).click()
    cy.findByRole('button', {  name: /clear chat/i}).click()
    cy.findByText('CLEAR').click()
  })

  it('should be able to add smiley(s) to chat messages', () => {
    cy.findByRole('textbox').type('I love you')
    cy.get('.smiley-button').click()
    cy.findByRole('button', {  name: /😍/i}).dblclick()
    cy.findByRole('button', {  name: /person1/i}).click()
    cy.get('.chat-output-container').should('contain', '😍')
  })

  it('should be able to add images to chat messages', () => {
    cy.get('input[type="file"]').attachFile('monkey.jpg')
    cy.get('.chat-photo-preview').find('input').type('Enjoy a picture of a monkey')
    cy.get('.chat-photo-preview').find('.person-one').click()
    cy.get('.chat-output-container').find('img').should('have.attr', 'alt', 'chatPhoto')
  })
})
