document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("email").value;
    var fullname = document.getElementById("nome").value;
    var dob = new Date(document.getElementById("dataNascimento").value);
    var password = document.getElementById("senha").value;
    var data = document.getElementById("dataNascimento").value;

    // Verificar se algum campo está vazio
    if (!username || !email || !fullname || !dob || !password || !data) {
        alert("Por favor, preencha todos os campos");
        return;
    }

    // Verificar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido");
        return;
    }

    // Verificar se o usuário já existe
    if (localStorage.getItem(username)) {
        alert("Usuário já existe!");
        return;
    }

    // Verificar idade mínima de 15 anos
    var today = new Date();
    var minAgeDate = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());
    if (dob >= minAgeDate) {
        alert("Você deve ter pelo menos 15 anos para se registrar");
        return;
    }

    // Verificar se a senha atende aos critérios
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/;
    if (!passwordRegex.test(password)) {
        alert("A senha deve conter pelo menos um número, uma letra, um caractere especial e uma letra maiúscula.");
        return;
    }

    // Armazenar username e password no localStorage
    localStorage.setItem(username, password);
    alert("Registro bem-sucedido!");
    window.location.href = "http://127.0.0.1:5500/arquivoshtml/login.html"; // Redirecionar para a página de login após o registro bem-sucedido
});