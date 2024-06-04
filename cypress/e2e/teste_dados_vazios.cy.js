describe('informar ao usuário que todos os campos devem ser preenchidos', () => {
    
    it('testar o campo name', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nomeUsuario"]').type('eu21')
        cy.get('input[placeholder="Email"]').type('igornobre2016@hotmail.com')
        cy.get('input[placeholder="Senha"]').type('Gabriel@123')
        cy.get('input[type="date"]').type("1997-11-07")
        cy.contains("Cadastrar").click()
    });

    it('testar o campo username', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Victor Matheus Pimenta')
        cy.get('input[placeholder="Email"]').type('igornobre2016@hotmail.com')
        cy.get('input[placeholder="Senha"]').type('Gabriel@123')
        cy.get('input[type="date"]').type("1997-11-07")
        cy.contains("Cadastrar").click()
    });

    it('testar o campo email', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Victor Matheus Pimenta')
        cy.get('input[id="nomeUsuario"]').type('eu21')
        cy.get('input[placeholder="Senha"]').type('Gabriel@123')
        cy.get('input[type="date"]').type("1997-11-07")
        cy.contains("Cadastrar").click()
    });

    it('testar o campo senha', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Victor Matheus Pimenta')
        cy.get('input[id="nomeUsuario"]').type('eu21')
        cy.get('input[placeholder="Email"]').type('igornobre2016@hotmail.com')
        cy.get('input[type="date"]').type("1997-11-07")
        cy.contains("Cadastrar").click()
    });

    it('testar o campo data de nascimento', () => {
        cy.visit("http://127.0.0.1:5500/arquivoshtml/cadastro.html")   
        cy.get('input[id="nome"]').type('Victor Matheus Pimenta')
        cy.get('input[id="nomeUsuario"]').type('eu21')
        cy.get('input[placeholder="Email"]').type('igornobre2016@hotmail.com')
        cy.get('input[placeholder="Senha"]').type('Gabriel@123')
        cy.contains("Cadastrar").click()
    });
});