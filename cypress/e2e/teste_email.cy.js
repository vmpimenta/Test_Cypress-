describe('testando o campo email', () => {
    beforeEach(() => {
        cy.wrap(window.localStorage).invoke('setItem', 'eu21', 'Eu@21');
      });
    it('apenas email com formato válido', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Victor Matheus Pimenta')
        cy.get('input[id="nomeUsuario"]').type('SeuPimenta')
        cy.get('input[placeholder="Email"]').type('teste@teste')
        cy.get('input[placeholder="Senha"]').type('Abc123#')
        cy.get('input[type="date"]').type("1997-11-07")

        cy.on('window:alert', (alertText) => {
            // Verifica se o texto do alerta é o esperado
            expect(alertText).to.equal('Por favor, insira um e-mail válido')
        });

        cy.contains("Cadastrar").click()
    });
});