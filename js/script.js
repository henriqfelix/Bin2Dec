//capturando botão
const button = document.getElementById('button')
//capturando evento de click
button.addEventListener('click', function(){
    //capturando input
    const input = document.getElementById('input')
    //verificando se há mais de 8 digitos
    if(input.value.length <= 8){
        //chamando função que realizará a conversão (.value para caputar os caracteres inseridos no input)
        treatData(input.value)
    }
    else{
        //chamando função que tratará os erros
        treatError(0)
    }
    
})
//criando função que fará validação dos dados (queremos que aceite apenas '0' e '1')
function treatData(value){
    //usando expressão regular para validar
    if (! /^[01]+$/.test(value)){
        //se o valor não for um número binário, a função 'showError' será chamada
        treatError(1)
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
//criando função que tratará os erros
function treatError(error){
    //erro 0 = número excede 8 digitos 
    if(error === 0){
        showErrorMoreThan8()
        return
    }
    //erro 1 = valor não binário
    if(error === 1){
        showErrorNotBinary()
        return
    }
}
function showErrorMoreThan8(){
    //capturando output
    const print = capturePrint()
    //setando valor a ser exibido
    print.value = 'Número excede 8 digitos!'
    //chamando função que setará os estilos css
    styleError()
}
//criando função que exibe mensagem de erro
function showErrorNotBinary(){
    //capturando output
    const print = capturePrint()
    //setando valor a ser exibido
    print.value = 'Valor Não Binário'
    //chamando função que setará os estilos css
    styleError()
}
//criando função que capturará o output
function capturePrint(){
    //retornando o elemendo 
    return document.getElementById('result')
}
function styleError(){
    //capturando output
    const print = capturePrint()
    //setando estilos CSS
    print.style.backgroundColor = '#FF8C00'
    print.style.color = '#33132D'
}
//criando função que exibe número decimal
function printDecimal(decimal){
    //capturando output
    const print = document.getElementById('result')
    //setando valor a ser exibido
    print.value = decimal
    //setando estilos CSS
    print.style.backgroundColor = '#5c2151'
    print.style.color = '#FFFFFF'
}