//Perguntas Para o Usuario
var questions = [
    "O que signfica a sigla BMX?",
    "Qual o nome do banco da bicicleta?",
    "Quantas marchas tem uma bicicleta de estrada típica?",
    "Qual é o nome do componente da bicicleta que conecta o quadro à roda dianteira?",
    "Em que país a famosa corrida de ciclismo Tour de France tem lugar?",
    "Qual é o componente da bicicleta que transforma o movimento dos pedais em movimento da roda traseira?",
    "O que é um pneu de bicicleta 'tubeless'?",
    "O que significa a sigla 'MTB'?",
    "O que é uma bicicleta 'fixie'?",
    "Qual é o órgão de ciclismo internacional responsável por regras e competições?"
];

//Respostas das Perguntas
var answers = [
    "Bicycle Moto Cross",
    "Selim",
    "20 ou mais",
    "Garfo",
    "França",
    "Corrente",
    "Um pneu que não requer um tubo de ar interno",
    "Mountain Bike",
    "Uma bicicleta de marcha única",
    "UCI (Union Cycliste Internationale)"
];

//Função Para Exibir o Quiz
function startQuiz() {
    var score = 0;
    var respostasCorretas = ""; //Armazenar respostas corretas

    //Loop para fazer as perguntas
    for (var i = 0; i < questions.length; i++) {
        //Pergunta ao usuário e Guarda a resposta
        var userAnswer = prompt(questions[i]);

        //Verifica se a resposta do usuário está correta
        if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
            score++; //Adiciona a pontuação se a resposta estiver correta
            respostasCorretas += "<p><strong>Pergunta " + (i + 1) + ":</strong> " + questions[i] + "<br><strong>Resposta correta:</strong> " + answers[i] + "</p>";
        }
    }

    //Exibe o resultado na tela
    var resultadoHTML = "<h3>Você acertou " + score + " de " + questions.length + " perguntas.</h3>";
    resultadoHTML += "<h3>Respostas corretas:</h3>";
    resultadoHTML += respostasCorretas;
    document.getElementById("resultadoQuiz").innerHTML = resultadoHTML; // Exibe o resultado na div
}

//Chama a função para iniciar o quiz
startQuiz();


