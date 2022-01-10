/// <reference types="cypress" />

describe('Index page', () => {
  it('Should visit the index page', () => {
    cy.visit('http://localhost:8080')
  })

  it('Should have a Navbar', () => {
    cy.get('[data-testid="test-navbar"]').should('be.visible')
  })

  it('Should have a welcome title', () => {
    cy.get('h1').should('be.visible')

    cy.get('h1').should('have.text', ' Hello from rarefishes.crypto')
  })
})
