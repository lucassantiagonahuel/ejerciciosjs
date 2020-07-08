function numerosAlAzar() {
   let cantidad=document.getElementById("cantidad").value
   let mostrar=document.getElementById("mostrar")
   let resultado=""
   for (let i = 0; i < cantidad; i++) {
      let calculoAzar=(Math.ceil(Math.random()*cantidad))
      resultado+=calculoAzar
   }
  
   mostrar.innerHTML=`Los ${cantidad} numeros al azar son : \" ${resultado.split("")} \"`
   }

  