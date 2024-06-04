describe('verificar se o usuário já existe', () => {
    beforeEach(() => {
        cy.wrap(window.localStorage).invoke('setItem', 'eu21', 'Eu@21');
      });
    it('testar o campo de username', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Victor Matheus Pimenta')
        cy.get('input[id="nomeUsuario"]').type('eu21')
        cy.get('input[placeholder="Email"]').type('igornobre2016@hotmail.com')
        cy.get('input[placeholder="Senha"]').type('Eu@21')
        cy.get('input[type="date"]').type("1997-11-07")
        cy.contains("Cadastrar").click()
    });
});