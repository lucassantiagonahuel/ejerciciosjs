function sumarValores() {
   let num1=parseInt( document.getElementById("numero1").value)
   let num2=parseInt(document.getElementById("numero2").value)
   let resultado= num1+num2
   console.log(resultado)
   alert(`El resultado de la suma entre ${num1} + ${num2} es de : \" ${resultado} \"`)
}