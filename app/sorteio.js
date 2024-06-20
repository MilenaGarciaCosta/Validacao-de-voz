const menorValor = 1;
const maiorValor = 100; // Limitando qual será o maior valor que poderá ser gerado
const numeroSecreto = gerarNumeroAleatorio();

// Exibindo o menor e o valor possível para o usuário
const elementoMenorValor = document.getElementById('menor-valor').textContent = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor').textContent = maiorValor;

// Gerando um número aleatório
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
    //O parseInt fará com que o número gerado seja sempre inteiro
    // É necessário somar 1 pois o MathRandom gera números entre 0 e 1, excluindo o 1 inteiro. O maior número gerado seria 0,999...
}