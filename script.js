
//Evoluçao do codigo
//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo do número Secreto';

//case semsitive: diferencia maiusculo do minusculo
//let paragrafo = document.querySelector ('p')
//paragrafo.innerHTML = 'Escolha um numero de 1 a 100';
let listaDeNumeroSorteados = []
let numeroLimite = 100;
let numeroSecreto =  gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial (){
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 100');
}
exibirMensagemInicial()
//foi feita uma funçao para exibir o texto, visando o cod limpo, ambas formas estão certas, porem, melhor usar a que é padrao
//input = entrada de usuario
function verificarChute(){
    let chute =  document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p', 'O número secreto é menor');
        }else {
            exibirTextoNaTela ('p', 'O número secreto é maior');
        }
       // tentativas = tentativas + 1;
        tentativas ++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;


    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = []
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    } else{ listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
chute = document.querySelector ('input');
chute.value = '';  
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas = 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}