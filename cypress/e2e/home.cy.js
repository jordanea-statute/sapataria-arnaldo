describe('Testes na Home', () => {
  it('Abrir o diretório', () => {

    cy.visit('/')

  })

  it('Abrir a pagina Index', () => {

    cy.visit('/index.html')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Título da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/contato.html');
    cy.get('.page-title').should('have.text', 'Sapataria Arnaldo');
    cy.get('.page-title').should('have.class', 'page-title');
    cy.get('.page-title').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})