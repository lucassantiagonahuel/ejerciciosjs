function cambioColor(elemento) {
  switch (elemento.className) {
    case 'comun': elemento.className='cambio'
      break;
  
   case 'cambio': elemento.className='comun'
   break;
  }
}