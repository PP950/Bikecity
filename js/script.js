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