// Check if the app allows to send pictures, video and audio files, and documents without any issues. Different types of file formats should be supported
// Verify that the user can edit and delete messages.
//   Check if the chat history is displaying correctly for the user.
//   The user should be able to upload a profile picture and edit the profile information.
// Verify that the user can change the status in the app

describe('Chats', () => {
  beforeEach(() => {
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
})
