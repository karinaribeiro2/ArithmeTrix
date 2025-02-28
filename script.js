function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;

    function calculo(num1, num2, operacao) {
        let resultado;
        if (operacao === 'soma') {
            resultado = num1 + num2;
        } else if (operacao === 'subtração') {
            resultado = num1 - num2;
        } else {
            resultado = "Operação inválida!";
        }
        return resultado;
    }

    const resultado = calculo(num1, num2, operacao);
    document.getElementById('resultado').innerText = `O resultado é: ${resultado}.`;
}
