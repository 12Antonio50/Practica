/*function numSuma() {
    let sumaNum = document.getElementById("numero").value;
    let sumaNum2 = document.getElementById("numero2").value;
    let resultado = document.getElementById("sumas");

    sumaNum = parseFloat(sumaNum);
    sumaNum2 = parseFloat(sumaNum2);

    if (isNaN(sumaNum) || isNaN(sumaNum2)) {
        resultado.innerHTML = "Es obligatorio introducir dos números válidos";
    } else {
        let suma = sumaNum + sumaNum2;
        resultado.innerHTML = "Resultado: " + suma;
    }
}*/

function calculadora(operacion) {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let resultado = document.getElementById("sumas");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "Es obligatorio ingresar dos números válidos";
    } else {
        switch (operacion) {
            case '+':
                resultado.innerHTML = "Resultado: " + (num1 + num2);
                break;
            case '-':
                resultado.innerHTML = "Resultado: " + (num1 - num2);
                break;
            case '*':
                resultado.innerHTML = "Resultado: " + (num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    resultado.innerHTML = "No se puede dividir por cero";
                } else {
                    resultado.innerHTML = "Resultado: " + (num1 / num2);
                }
                break;
            case '=':
                resultado.innerHTML = "Seleccione una operación";
                break;
            default:
                resultado.innerHTML = "Operación incorrecta";
        }
    }
}