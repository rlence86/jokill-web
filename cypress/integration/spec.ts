it('loads examples', () => {
  cy.visit('/');
  cy.contains('header');
  cy.contains('footer');
  cy.contains('.home-page__container');
});
