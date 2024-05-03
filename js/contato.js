document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura dos valores dos campos de entrada
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    // Verifica se os campos estão preenchidos
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Lógica para enviar os dados do formulário (substitua isso com sua lógica de envio real)
    alert('Dados do formulário enviados com sucesso:\nNome: ' + name + '\nTelefone: ' + phone + '\nE-mail: ' + email);
    
    // Limpa os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
});
