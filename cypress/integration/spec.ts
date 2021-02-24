it('loads examples', () => {
  cy.visit('/');
  cy.contains('home-page works!');
});
