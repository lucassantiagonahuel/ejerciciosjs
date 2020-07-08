
function opciones(id) {
    let parrafo=document.getElementById("parrafo_"+id)
    let radiobtn=document.getElementById("radioBtn_"+id)
    
    if (parrafo.className=="" || parrafo.className=='oculto') {
        parrafo.className='visible'
        radiobtn.checked=true
                                          
    } else {
        parrafo.className='oculto'
        radiobtn.checked=false
    }
    
}
