const textoOperacaoAnterior = document.querySelector('#operacao-anterior');
const textoOperacaoAtual = document.querySelector('#operacao-atual');
const botoes = document.querySelectorAll('#botoes-container button');

class Calcular{
    constructor(textoOperacaoAnterior, textoOperacaoAtual) {
        this.textoOperacaoAnterior = textoOperacaoAnterior;
        this.textoOperacaoAtual = textoOperacaoAtual;
        this.operacaoAtual = "";
    }

    // adc o digito no visor da calculadora
    addDigito(digito) {
        // verifique se a operação atual já possui ponto
        if(digito === '.' && this.textoOperacaoAtual.innerText.includes(".")){
            return;
        }

        this.operacaoAtual = digito;
        this.atualizarTela();
    }

    // processar todas as operações da calculadora
    processarOperacao(operacao) {
        // verifique se a corrente está vazia
        if(this.textoOperacaoAtual.innerText === "" && operacao != "C"){
            // mudar operação
            if(this.textoOperacaoAnterior.innerText !== "") {
                this.carregarOperacao(operacao);
            }
            return;
        }

        // obter o valor atual e anteriorr
        let valorOperacao;
        const anterior = + this.textoOperacaoAnterior.innerText.split(" ")[0];
        const atual = + this.textoOperacaoAtual.innerText;

        switch(operacao){
            case "+":
                valorOperacao = anterior + atual;
                this.atualizarTela(valorOperacao, operacao, atual, anterior);
            break;
            case "-":
                valorOperacao = anterior - atual;
                this.atualizarTela(valorOperacao, operacao, atual, anterior);
                break;
            case "/":
                valorOperacao = anterior / atual;
                this.atualizarTela(valorOperacao, operacao, atual, anterior);
            break;
            case "*":
                valorOperacao = anterior * atual;
                this.atualizarTela(valorOperacao, operacao, atual, anterior);
                break;
            case "x²":
                valorOperacao = Math.pow(atual, 2);
                this.textoOperacaoAtual.innerText = `${valorOperacao}`;
                this.textoOperacaoAnterior.innerText = atual + " ² =";
                break;
            case "Sqrt":
                valorOperacao = Math.sqrt(atual);
                this.textoOperacaoAtual.innerText = `${valorOperacao}`;
                this.textoOperacaoAnterior.innerText = atual + " Sqrt =";
                break;
            case "DEL":
                this.processarOpDEL();
                break;
            case "CE":
                this.limparOperacaoAtual();
                break;
            case "C":
                this.limparOperacao();
                break;
            case "=":
                this.operadorIgual();
                break;
            default:
                return;
        }
    }

    // alterar o valor da tela da calculadora
    atualizarTela(
        valorOperacao = null,
        operacao = null,
        atual = null,
        anterior = null) {
            console.log(valorOperacao, operacao, atual, anterior);

        if(valorOperacao === null) {
            this.textoOperacaoAtual.innerText += this.operacaoAtual;
        }else{
            // verifique se o valor é zero, se for apenas adicione o valor atual
            if(anterior === 0) {
                valorOperacao = atual;
            }

            // adicione o valor atual ao anteriorr
            this.textoOperacaoAnterior.innerText = `${valorOperacao} ${operacao}`;
            this.textoOperacaoAtual.innerText = "";
        }
    }
    
    // mudar operações matematicas
    carregarOperacao(operacao) {

        const mathOperations = ["*", "/" , "+", "-"]

        if(!mathOperations.includes(operacao)){
            return
        }

        this.textoOperacaoAnterior.innerText = this.textoOperacaoAnterior.innerText.slice(0, -1) + operacao;

    }
    
    // deletar um digito
    processarOpDEL() {
        this.textoOperacaoAtual.innerText = this.textoOperacaoAtual.innerText.slice(0, -1);
    }

    // limpar operação atual
    limparOperacaoAtual(){
        this.textoOperacaoAtual.innerText = "";
    }

    // limpar toda operação
    limparOperacao(){
        this.textoOperacaoAtual.innerText = "";
        this.textoOperacaoAnterior.innerText = "";
    }

    // operador igual
    operadorIgual(){
        const operacao = textoOperacaoAnterior.innerText.split(" ")[1];

        this.processarOperacao(operacao);
    }

    operadorPotencia(){
        return Math.pow(anterior,2)
    }
}

const calc = new Calcular(textoOperacaoAnterior, textoOperacaoAtual);

botoes.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if(+value >= 0 || value === "."){
            calc.addDigito(value);
        }else{
            calc.processarOperacao(value);
        };

    })
})