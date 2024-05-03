document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura dos valores dos campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica se os campos estão preenchidos
    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica as credenciais
    if (username === 'usuario' && password === 'senha') {
        // Redireciona para a página do quiz
        window.location.href = 'quiz.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
