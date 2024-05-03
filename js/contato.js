document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita o envio do formulário

    //Captura dos valores dos campos de entrada
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    //Verifica se os campos estão preenchidos
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    //Lógica para enviar os dados do formulário (substitua isso com sua lógica de envio real)
    alert('Dados do formulário enviados com sucesso:\nNome: ' + name + '\nTelefone: ' + phone + '\nE-mail: ' + email);
    
    //Limpa os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
});
//Lista de cores de fundo
const backgroundColors = ['#FFFFFF', '#000000', '#ffffcc'];
let currentColorIndex = 0;

//Função para mudar a cor de fundo
function changeBackgroundColor() {
    //Seleciona o elemento body
    const body = document.body;

    //Obtém a próxima cor de fundo da lista
    const nextColor = backgroundColors[currentColorIndex];

    //Define a nova cor de fundo
    body.style.backgroundColor = nextColor;

    //Atualiza o body para a próxima cor de fundo na próxima chamada
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
}
