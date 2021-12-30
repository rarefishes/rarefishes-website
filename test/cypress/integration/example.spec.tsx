/// <reference types="cypress" />

describe('example to-do app', () => {
  it('Should visit the index page', () => {
    cy.visit('http://localhost:8080')
  })

  it('Should display a Hello message', () => {
    const helloMessageH1 = cy.get('h1')

    helloMessageH1.should('be.visible')
    helloMessageH1.should('have.text', ' Hello from rarefishes.crypto')
  })
})
