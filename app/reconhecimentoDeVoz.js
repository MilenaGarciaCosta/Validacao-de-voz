const elementoChute = document.getElementById('chute')

// Ativando e inicializando o reconhecimento de voz
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)
// Buscando o resultado do que foi dito pelo usuário
function onSpeak(e) {
    chute = e.results[0][0].transcript 
    exibeChute(chute)
    validarValorChute(chute)
}

// Exibindo o que foi dito pelo usuário
function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div> Você disse </div>
        <span class = 'box'> ${chute} </span>
    `
}

// Deixando o reconhecimento de voz sempre ativo
recognition.addEventListener('end', () => recognition.start())