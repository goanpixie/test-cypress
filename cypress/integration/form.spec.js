describe('Form test', () => {
  it('Can fill form', () => {
    cy.visit('/');
    cy.get('form');
  });
});
