/// <reference types="cypress" />

describe('Index page', () => {
  it('Should visit the index page', () => {
    cy.visit('http://localhost:8080')
  })

  it('Should have a Navbar', () => {
    cy.get('[data-testid="test-navbar"]').should('be.visible')
  })

  it('Should have Navbar Items visible', () => {
    cy.get('[data-testid="test-navbar-items-list"]').should('be.visible')
  })

  it('Should not have the Navbar Icon visible on Desktop', () => {
    cy.viewport(1020, 1020)
    cy.get('[data-testid="test-navbar-icon"]').should('not.be.visible')
  })

  it('Should have the Navbar Icon visible on Mobile', () => {
    cy.viewport(375, 812)
    cy.get('[data-testid="test-navbar-icon"]').should('be.visible')
  })

  it('Should click the Navbar Icon', () => {
    cy.viewport(375, 812)
    cy.get('[data-testid="test-navbar-icon"]').should('be.visible').click()
  })

  it('Should have a welcome title', () => {
    cy.get('h1').should('be.visible')

    cy.get('h1').should('have.text', 'Join the fishing')
  })

  it('Should have a link to the collection', () => {
    const link = cy.get('[data-testid="test-hero-link"]')

    link.should('be.visible')
    link.should('have.text', 'Fish now')
    link.should('have.attr', 'href', 'https://opensea.io/collection/rarefishesofficial')
  })
})
