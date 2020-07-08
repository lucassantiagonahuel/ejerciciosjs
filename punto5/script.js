function calcularOperacion() {
    let num1= parseInt(document.getElementById("num1").value)
    let num2= parseInt(document.getElementById("num2").value)
    let operacion= document.getElementById("operacion").value


    switch (operacion) {
        case 'Suma': document.write(`La suma de ${num1} + ${num2} da como resultado : \" ${suma(num1,num2)} \"`)
            
            break;
        case 'Resta': document.write(`La resta de ${num1} - ${num2} da como resultado : \" ${resta(num1,num2)} \"`)
            
        break;
        case 'Multiplicacion': document.write(`La multiplicacion de ${num1} * ${num2} da como resultado : \" ${multiplicacion(num1,num2)} \"`)
            
        break;
        case 'División': document.write(`La division de ${num1} / ${num2} da como resultado : \" ${division(num1,num2)} \"`)
            
        break;    
    
        default: alert("Usted no ingreso ninguna opcion")
            break;
    }  
}

function suma(numero1,numero2) {
    let resultado = numero1+numero2
    return resultado
}
function resta(numero1,numero2) {
    let resultado = numero1-numero2
    return resultado
}
function multiplicacion(numero1,numero2) {
    let resultado = numero1*numero2
    return resultado
}
function division(numero1,numero2) {
    let resultado = numero1/numero2
    return resultado
}
