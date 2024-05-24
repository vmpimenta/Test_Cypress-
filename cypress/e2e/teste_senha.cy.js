describe('cadastro', () => {
    it('entradas', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Luis Igor Nobre')
        cy.get('input[id="nomeUsuario"]').type('netoxxy')
        cy.get('input[type="email"]').type('igornobre2016@hotmail.com')
        cy.get('input[placeholder="Senha"]').type('abc123')
        cy.get('input[type="date"]').type("1998-07-14")
        cy.contains("Cadastrar").click()
    });
});