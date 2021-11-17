describe('Chat features', () => {
  before(() => {
    cy.visit('/')
  })

  const personOneMessage = 'How you doing?'
  const personTwoMessage = 'I am good.'

  it('should be able to send and receive messages', () => {
    cy.get('.contact').first().click()
    cy.get('.chat-input').type(personOneMessage)
    cy.get('#personOne').click()
    cy.get('.chat-output-container').should('contain', personOneMessage)
    cy.get('.chat-input').type(personTwoMessage)
    cy.get('#personTwo').click()
    cy.get('.chat-output-container').should('contain', personTwoMessage)
  })

  it('should be able to delete all chat messages', () => {
    cy.get('#dropdown').click()
    cy.findByText('Clear chat').click()
    cy.findByText('CLEAR').click()
  })

  it('should be able to add smiley(s) to chat messages', () => {
    cy.get('.chat-input').type(personTwoMessage)
    cy.get('.smiley-button').click()
    cy.get('.smiley').first().click()
    cy.get('#personOne').click()
    cy.get('.chat-output-container').should('contain', '😀')
  })

  it('should be able to delete single chat messages', () => {
    cy.get('.chat-item-wrapper').first().click()
    cy.get('#deleteButton').click()
    cy.get('.delete-modal').should('be.visible')
    cy.findByText('DELETE FOR ME').click()
    cy.get('.chat-output-container').should('contain', '')
  })

  it('should be able to add images to chat messages', () => {
    cy.get('input[type="file"]').attachFile('monkey.jpg')
    cy.get('.chat-photo-preview').find('input').type('Enjoy a picture of a monkey')
    cy.get('.chat-photo-preview').find('.person-one').click()
    cy.get('.chat-output-container').find('img').should('have.attr', 'alt', 'chatPhoto')
  })
})
