describe('cadastro', () => {
    it('entradas', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Victor Matheus Pimenta')
        cy.get('input[id="nomeUsuario"]').type('SeuPimenta')
        cy.get('input[type="email"]').type('TextoQualquer')
        cy.get('input[placeholder="Senha"]').type('Gabriel@123')
        cy.get('input[type="date"]').type("1997-11-07")
        cy.contains("Cadastrar").click()
    });
});