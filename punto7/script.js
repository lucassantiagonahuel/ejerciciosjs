function cambiarColor(id) {
   let texto=document.getElementById("textoColores")
   //console.log(texto)
   //console.log(id)
   switch (id) {
      case 'r':texto.className="rojo"
         
         break;
      case 'b':texto.className="azul"
         
      break;
      case 'y':texto.className="amarillo"
         
      break;
      case 'n':texto.className="textoPlano"
      
      break;
      default:
         break;
   }
}
  