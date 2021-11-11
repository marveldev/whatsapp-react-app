describe('Setting features', () => {
  before(() => {
    cy.visit('/')
  })

  const name = 'Marvel Alika'
  const occupation = 'Front-end developer'

  it('should be able to add profile photo', () => {
    cy.get('#dropdownIcon').click()
    cy.findByText('Settings').click()
    cy.get('.photo-container').click()
    cy.url().should('include', '/profilePage')
    cy.get('input[type="file"]').attachFile('monkey.jpg')
    cy.get('.toaster').should('be.visible')
    cy.get('.photo-container').find('img').should('have.id','profilePhoto')
  })

  it('should be able to add profile name', () => {
    cy.get('#name').clear().type(name)
    cy.get('#nameCheckButton').click()
    cy.get('.toaster').should('be.visible')
    cy.get('#name').should('have.value', name)
  })

  it('should be able to add about information', () => {
    cy.get('#about').clear().type(occupation)
    cy.get('#aboutCheckButton').click()
    cy.get('.toaster').should('be.visible')
    cy.get('#about').should('have.value', occupation)
  })

  it('should be able to change theme', () => {
    cy.get('#profileBackButton').click()
    cy.findByText('Chats').click()
    cy.findByText('Theme').click()
    cy.get('.theme-modal').should('be.visible')
    cy.findByText('Dark').click()
    cy.findByText('OK').click()
    cy.get('.app-layer').should('have.class', 'dark')
  })
})
