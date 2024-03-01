function playRockPaperScissor(player1, player2) {
    const opcoesValidas = ["Pedra", "Papel", "Tesoura"];

    if (!(opcoesValidas.indexOf(player1) !== -1) || !(opcoesValidas.indexOf(player2) !== -1)) {
        return "Escolhas inválidas. Por favor, escolha entre 'Pedra', 'Papel' ou 'Tesoura'.";
    }

    if (player1 === player2) {
        return "Empate!";
    } else if (
        (player1 === "Pedra" && player2 === "Tesoura") ||
        (player1 === "Tesoura" && player2 === "Papel") ||
        (player1 === "Papel" && player2 === "Pedra")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}

// Exemplo de uso
const resultado = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado);
