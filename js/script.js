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
    setTimeout(slideShow, time); // Chama a função slideShow diretamente
}
slideShow(); // Chama a função slideShow para iniciar o slideshow

