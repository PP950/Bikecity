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
 
 //SlideShow
let imagens = ['img/bike1.jpg', 'img/bike2.jpg', 'img/bike3.png', 'img/bike4.jpg'];
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
slideShow(); //Chama a função slideShow para iniciar o slideshow

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
