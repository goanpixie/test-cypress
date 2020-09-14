describe('Form test', () => {
  it('Can fill form', () => {
    cy.visit('/');
    cy.get('form');

    cy.get('input[name="name"]')
      .type('Suhas')
      .should('have.value', 'Suhas');

    cy.get('input[name="email"]')
      .type('suhas2u@gmail.com')
      .should('have.value', 'suhas2u@gmail.com');

    cy.get('textarea')
      .type('Mind you if I ask some silly question?')
      .should('have.value', 'Mind you if I ask some silly question?');

    cy.server()
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Saved", code: 201 }
    });

    cy.get("form").submit();

    cy.contains("Form Saved!")
  });
});
