/// <reference types="cypress" />

describe('example to-do app', () => {
  it('Should visit the index page', () => {
    cy.visit('http://localhost:8080')
  })
})
