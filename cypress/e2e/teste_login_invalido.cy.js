context('testando login invalido', () => {
  beforeEach(() => {
    cy.wrap(window.localStorage).invoke('setItem', 'eu21', 'Eu@21');
  });
    it('usuário não cadastrado', () => {
      cy.visit("http://127.0.0.1:5500/arquivoshtml/login.html");
      cy.get('input[type="text"]').type('kenguiane');
      cy.get('input[type="password"]').type('Eu@21');
      cy.contains("Entrar").click();
    });
  });