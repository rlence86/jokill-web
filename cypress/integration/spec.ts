it('Loads home page', () => {
  cy.visit('/');
  cy.get('header').contains('Jokill');
  cy.get('footer').contains('Made with');
  cy.get('.home-page__container').contains('Welcome to Jokill');
});
