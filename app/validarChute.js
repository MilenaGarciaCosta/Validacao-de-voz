function validarValorChute(chute) {
    // Transformar o chute em um número
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }
    if (chuteMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=`<div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    // Caso o usuário diga 'Fim de jogo', a tela ficará vermelha e exibirá qual era o número gerado
    if (chute == 'Fim de jogo') {
        document.body.innerHTML = `
        <h2>Fim de jogo!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id='jogar-novamente'>Jogar novamente</button>
        `
        document.body.classList.add('game-over')
    } 
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id='jogar-novamente'>Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

// Verificando se o valor dito pelo usuário está dentro do escopo do maior e menor número definidos previamente
function chuteMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

// Verificando se o valor inserido é um número ou um texto
function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

// Função para recarregar a página ao clicar no botão 'Jogar novamente'
document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})