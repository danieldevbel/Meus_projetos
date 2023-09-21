
const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');

class Calculator{
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // adc o digito no visor da calculadora
    addDigit(digit) {
        // verifique se a operação atual já possui ponto
        if(digit === '.' && this.currentOperationText.innerText.includes(".")){
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }
    
    // processar todas as operações da calculadora
    processOperation(operation) {
        // verifique se a corrente está vazia
        if(this.currentOperationText.innerText === "" && operation != "C"){
            // mudar operação
            if(this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }

        // obter o valor atual e anterior
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
            break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
            break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL":
                this.processDelOperator();
                break;
            case "CE":
                this.processClearCurrentOperatorion();
                break;
            case "C":
                this.processClearOperatorion();
                break;
            case "=":
                this.processEqualOperator();
                break;
            default:
                return;
        }
    }
    
    // alterar o valor da tela da calculadora
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null) {
            console.log(operationValue, operation, current, previous);

        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        }else{
            // verifique se o valor é zero, se for apenas adicione o valor atual
            if(previous === 0) {
                operationValue = current;
            }

            // adicione o valor atual ao anterior
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }
    // mudar operações matematicas
    changeOperation(operation) {

        const mathOperations = ["*", "/" , "+", "-"]

        if(!mathOperations.includes(operation)){
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    
    }
    // deletar um digito
    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    // limpar operação atual
    processClearCurrentOperatorion(){
        this.currentOperationText.innerText = "";
    }

    // limpar toda operação
    processClearOperatorion(){
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }

    // operador igual
    processEqualOperator(){
        const operation = previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
    }
}




const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{
            calc.processOperation(value);
        };

    })
})