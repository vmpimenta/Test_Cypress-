describe('testando requisitos minimos de senha', () => {
    it('verificar campo senha', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Luis Igor Nobre')
        cy.get('input[id="nomeUsuario"]').type('netoxxy')
        cy.get('input[placeholder="Email"]').type('igornobre2016@hotmail.com')
        cy.get('input[placeholder="Senha"]').type('abc123')
        cy.get('input[type="date"]').type("1998-07-14")

        cy.on('window:alert', (alertText) => {
            // Verifica se o texto do alerta é o esperado
            expect(alertText).to.equal('A senha deve conter pelo menos um número, uma letra, um caractere especial e uma letra maiúscula.')
        });

        cy.contains("Cadastrar").click()
    });
});