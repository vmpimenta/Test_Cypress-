document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if user exists and password matches
    if (localStorage.getItem(username) === password) {
        window.location.href = "http://127.0.0.1:5500/arquivoshtml/main.html";
        alert("Login Concluido!");
       
        // You can redirect to another page after successful login if needed
    } else {
        alert("Usuário ou Senha invalidos!");
    }
    localStorage.setItem("eu21", "Eu@21");
});
