

describe('cadastro', () => {
    it('entradas', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Gabriel do Carmo Adriano Maia')
        cy.get('input[id="nomeUsuario"]').type('kenguiane')
        cy.get('input[type="email"]').type('Gay@mail')
        cy.get('input[placeholder="Senha"]').type('Gabriel@123')
        cy.get('input[type="date"]').type("2015-12-09")
        cy.contains("Cadastrar").click()

    });
});
