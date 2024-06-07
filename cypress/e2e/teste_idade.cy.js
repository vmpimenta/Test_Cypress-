describe('testando o campo da data de nascimento', () => {
    it('permitir cadastro apenas se usuário maior de 15 anos de idade', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Gabriel do Carmo Adriano Maia')
        cy.get('input[id="nomeUsuario"]').type('kenguiane')
        cy.get('input[placeholder="Email"]').type('gabriel@mail.com')
        cy.get('input[placeholder="Senha"]').type('Gabriel@123')
        cy.get('input[type="date"]').type("2023-12-09")

        cy.on('window:alert', (alertText) => {
            // Verifica se o texto do alerta é o esperado
            expect(alertText).to.equal('Você deve ter pelo menos 15 anos para se registrar')
        });

        cy.contains("Cadastrar").click()
    });
});
