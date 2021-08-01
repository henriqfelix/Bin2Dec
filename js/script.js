//capturando botão
const button = document.getElementById('button')
//capturando evento de click
button.addEventListener('click', function(){
    //capturando input
    const input = document.getElementById('input')
    //chamando função que realizará a conversão (.value para caputar os caracteres inseridos no input)
    treatData(input.value)
})
//criando função que fará validação dos dados (queremos que aceite apenas '0' e '1')
function treatData(value){
    //usando expressão regular para validar
    if (! /^[01]+$/.test(value)){
        //se o valor não for um número binário, a função 'showError' será chamada
        showError()
    }else{
        //se o valor for um número binário, a função 'calBinToDec' será chamada
        calcBinToDec(value)
    }
}
//criando função que realizará conversão dos dados
function calcBinToDec(value){
    //criando variáveis nevessárias para a realização das operações matemáticas
    let potencia = 0
    let decimal = 0
    //percorrendo a string de trás para frente 
    for(let i = value.length - 1; i >= 0; i--){
        //realizando cálculos | incrementando resultados em 'decimal' a cada laço de repetição
        decimal += Math.pow(2, potencia) * Number(value.charAt(i));
        //incrementando valor da potência em 1 a cada laço
        potencia++
    }
    //chamando função que exibirá o resultado
    printDecimal(decimal);
}
//criando função que exibe mensagem de erro
function showError(){
    //capturando output
    const print = document.getElementById('result')
    //setando valor a ser exibido
    print.value = 'Valor Inválido'
    //setando estilos CSS
    print.style.backgroundColor = '#FF8C00'
    print.style.color = '#33132D'
}

function printDecimal(decimal){
    //capturando output
    const print = document.getElementById('result')
    //setando valor a ser exibido
    print.value = decimal
    //setando estilos CSS
    print.style.backgroundColor = '#5c2151'
    print.style.color = '#FFFFFF'
}