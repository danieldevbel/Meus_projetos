let real = document.querySelector('#real');
let dolar = document.querySelector('#dolar');
let euro = document.querySelector('#euro');

function converter() {
    let valorReal = parseFloat(real.value);
    let valorDolar = parseFloat(dolar.value);
    let valorEuro = parseFloat(euro.value);

    if (!isNaN(valorReal)) {
        let real_dol = valorReal / 4.87;
        let real_euro = valorReal / 5.20;
        dolar.value = real_dol.toFixed(2);
        euro.value = real_euro.toFixed(2);
    } else if (!isNaN(valorDolar)) {
        let dolar_real = valorDolar * 4.87;
        let dolar_euro = valorDolar / 1.14;
        real.value = dolar_real.toFixed(2);
        euro.value = dolar_euro.toFixed(2);
    } else if (!isNaN(valorEuro)) {
        let euro_real = valorEuro * 5.20;
        let euro_dolar = valorEuro * 1.14;
        real.value = euro_real.toFixed(2);
        dolar.value = euro_dolar.toFixed(2);
    }else{
        alert('Preencha um dos campos!');
    }
}

function limpar() {
    real.value = '';
    dolar.value = '';
    euro.value = '';
};



























/* Aula 18 de JS Conversor de Moedas  */

/* SELECIONAR ELEMENTOS */
// selecionar input com o numero digitado

// selecionar os elementos radios (criar um array deles)

let aviso = document.querySelector('#aviso')

// selecionar os botoes

// COTACOES DO DIA 21/09/2021   // 22/09/2021

let moedaEstrangeira = ''
let moedaConvertida  = 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

/* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */

// REATIVAR BOTAO
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

// VERIFICAR QUAL BOTAO RADIO ESTA MARCADO checked ou checked == true
// vincular a verificacao a um evento, click no botao Converter
btnConverter.addEventListener('click', function() {
    // FAZER o parseFloat dos valores monetarios (converter String para Float)
    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    /*
    Use uma estrutura escolha caso para escolher
    qual e a moeda estrangeira que foi selecionada
    */

// {moedaConvertida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// CONVERSAO DE MOEDAS
// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch(moedaEstrangeira) {
        
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})
