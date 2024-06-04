context('testando login bem sucedido', () => {
    beforeEach(() => {
      cy.wrap(window.localStorage).invoke('setItem', 'eu21', 'Eu@21');
    });
    it('o usuário deve ser enviado para a página principal', () => {
      cy.visit("http://127.0.0.1:5500/arquivoshtml/login.html");
      cy.get('input[type="text"]').type('eu21');
      cy.get('input[type="password"]').type('Eu@21');
      cy.contains("Entrar").click();
    });
  });