 // Lista de cores de fundo
 const backgroundColors = ['#ffcccc', '#ccffcc', '#ccccff'];
 let currentColorIndex = 0;

 // Função para mudar a cor de fundo
 function changeBackgroundColor() {
     // Seleciona o elemento body
     const body = document.body;

     // Obtém a próxima cor de fundo da lista
     const nextColor = backgroundColors[currentColorIndex];

     // Define a nova cor de fundo
     body.style.backgroundColor = nextColor;

     // Atualiza o índice para a próxima cor de fundo na próxima chamada
     currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
 }
 
 //SlideShow
let imagens = ['img/produto1.jpg', 'img/produto2.jpg', 'img/produto3.jpg', 'img/produto4.jpg'];
let index = 0;
let time = 3000;

function slideShow() {
    document.getElementById('imgBanner').src = imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout(slideShow, time);
}
slideShow(); // Chama a função slideShow para iniciar o slideshow

//Alerta Para o Usuario 
alert("seja bem vindo")

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
